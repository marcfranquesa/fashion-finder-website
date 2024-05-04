import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export const GET = async (
  _req: NextRequest,
  { params }: { params: { id: number } }
) => {
  const mongoResponse = await fetch(
    process.env.BEGIN_URL! +
      process.env.VERCEL_URL! +
      "/api/mongo?index=" +
      params.id
  );
  const mongoCollection = await mongoResponse.json();
  const imageUrl = mongoCollection[0].link;
  const res = await fetch(imageUrl);
  const blob = await res.arrayBuffer();

  const headers = new Headers();
  headers.set("Content-Type", "image/jpg");

  return new NextResponse(blob, { status: 200, statusText: "OK", headers });
};
