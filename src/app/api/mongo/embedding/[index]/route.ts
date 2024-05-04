import { NextResponse } from "next/server";
import * as Models from "@/lib/models";
import type { NextRequest } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { index: number } }
) {
  try {
    const mongoResponse = await fetch(
      process.env.BEGIN_URL! +
        process.env.VERCEL_URL! +
        "/api/mongo?index=" +
        params.index
    );
    const mongoCollection = await mongoResponse.json();
    const embedding = mongoCollection["embedding"];

    return NextResponse.json(embedding, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
}
