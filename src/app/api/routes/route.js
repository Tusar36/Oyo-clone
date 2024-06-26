import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    message: "hello world",
  });
}

export async function POST(res) {
  console.log("Response:");
  let data = await res.json();
  console.log(data);
  return NextResponse.json({
    message: "success",
  });
}
