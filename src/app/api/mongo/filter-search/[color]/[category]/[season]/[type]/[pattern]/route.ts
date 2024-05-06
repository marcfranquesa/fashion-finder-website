import { NextResponse } from "next/server";
import * as Models from "@/lib/models";
import type { NextRequest } from "next/server";
import { MongoClient } from "mongodb";

export async function GET(
  request: NextRequest,
  {
    params,
  }: {
    params: {
      color: string;
      category: string;
      season: string;
      type: string;
      pattern: string;
    };
  }
) {
  try {
    const collection = await Models.Filter.find({
      color: params.color,
      person: params.category,
      season: params.season,
      type: params.type,
      pattern: params.pattern,
    });

    const embedding = await collection[0].embedding;

    const uri = process.env.MONGODB_URI!;
    const client = new MongoClient(uri);
    await client.connect();
    const database = client.db("hackupc");
    const coll = database.collection("clothings");

    const agg = [
      {
        $vectorSearch: {
          index: "vector_index",
          path: "embedding",
          queryVector: embedding,
          numCandidates: 150,
          limit: 5,
        },
      },
      {
        $project: {
          _id: 0,
          index: 1,
          link_1: 1,
          score: {
            $meta: "vectorSearchScore",
          },
        },
      },
    ];

    const result = await coll.aggregate(agg).toArray();

    await client.close();

    return NextResponse.json(result, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
}
