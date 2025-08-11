import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const data = await req.json();

  return NextResponse.json({
    message: "This is signup route",
    data,
  });
}
