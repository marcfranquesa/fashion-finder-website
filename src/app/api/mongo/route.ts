import { NextResponse } from "next/server";
import * as Models from "@/lib/models";

export async function GET() {
  try {
    const collection = await Models.Clothing.find();
    return NextResponse.json(collection, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
}
