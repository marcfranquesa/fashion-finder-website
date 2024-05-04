import { NextResponse } from "next/server";
// import { type NextRequest } from "next/server";
import * as Models from "@/lib/models";
// import mongoose from "mongoose";

export async function GET() {
  //   request: NextRequest,
  //   { params }: { params: { slug: string } }
  try {
    const collection = await Models.Clothing.find();
    return NextResponse.json(collection, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
}
