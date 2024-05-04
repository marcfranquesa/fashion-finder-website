import * as Types from "@/lib/types";

const { MongoClient } = require("mongodb");

// connect to your Atlas cluster
const uri = process.env.CONNECTION_STRING!;

const client = new MongoClient(uri);

export async function run({ queryVector }: { queryVector: number[] }) {
  try {
    await client.connect();

    const database = client.db("hackupc");
    const coll = database.collection("clothings");

    // define pipeline
    const agg = [
      {
        $vectorSearch: {
          index: "_id_",
          path: "embedding",
          queryVector: queryVector,
          numCandidates: 150,
          limit: 10,
        },
      },
      {
        $project: {
          _id: 0,
          link_1: 1,
          link_2: 0,
          link_3: 0,
          score: {
            $meta: "vectorSearchScore",
          },
        },
      },
    ];

    const result = coll.aggregate(agg);

    await result.forEach((doc: Types.clothingLinks) =>
      console.dir(JSON.stringify(doc))
    );
  } finally {
    await client.close();
  }
}
