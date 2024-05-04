import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const tr = ["link_1", "link_2", "link_3"];

export const GET = async (
  _req: NextRequest,
  { params }: { params: { index: number; image: number } }
) => {
  const mongoResponse = await fetch(
    process.env.BEGIN_URL! +
      process.env.VERCEL_URL! +
      "/api/mongo?index=" +
      params.index
  );
  const mongoCollection = await mongoResponse.json();
  const imageUrl = mongoCollection[tr[params.image]];
  const res = await fetch(imageUrl);
  const blob = await res.arrayBuffer();

  const headers = new Headers();
  headers.set("Content-Type", "image/jpg");

  return new NextResponse(blob, { status: 200, statusText: "OK", headers });
};
