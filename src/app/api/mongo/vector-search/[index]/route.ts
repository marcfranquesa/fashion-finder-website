import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";

export const GET = async (
  _req: NextRequest,
  { params }: { params: { index: number } }
) => {
  try {
    const mongoResponse = await fetch(
      process.env.BEGIN_URL! +
        process.env.VERCEL_URL! +
        "/api/mongo/embedding/" +
        params.index
    );
    const embedding = await mongoResponse.json();

    const uri = process.env.CONNECTION_STRING!;
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
};
