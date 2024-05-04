import { NextResponse } from "next/server";
import * as Models from "@/lib/models";
import type { NextRequest } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const index = searchParams.get("index");
    const collection = await Models.Clothing.find({ index: index });
    return NextResponse.json(collection, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
}
