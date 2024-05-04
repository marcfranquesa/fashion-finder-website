import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export const GET = async (
  _req: NextRequest,
  { params }: { params: { id: number } }
) => {
  const mongoResponse = await fetch("http://localhost:3000/api/mongo");
  const mongoCollection = await mongoResponse.json();
  const imageUrl = mongoCollection[params.id].link;
  const res = await fetch(imageUrl);
  const blob = await res.arrayBuffer();

  const headers = new Headers();
  headers.set("Content-Type", "image/jpg");

  return new NextResponse(blob, { status: 200, statusText: "OK", headers });
};

// export async function GET(
//   request: NextRequest,
//   { params }: { params: { id: string } }
// ) {
//   const collection = await fetch("/api/mongo");
//   const collectionJson = await collection.json();

//   const res = await fetch(
//     "https://static.zara.net/photos///2024/V/0/3/p/5767/521/712/2/w/2048/5767521712_6_1_1.jpg?ts=1707751045954"
//   );
//   const blob = await res.arrayBuffer();

//   const headers = new Headers();
//   headers.set("Content-Type", "image/jpg");

//   return new NextResponse(blob, { status: 200, statusText: "OK", headers });
// }
