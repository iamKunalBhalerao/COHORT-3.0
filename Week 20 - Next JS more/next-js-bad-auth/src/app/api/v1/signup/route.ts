import jwt from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";
const jwtPassword = "ThisisJWTpass";

export function GET() {
  return NextResponse.json({
    message: "This is Signp Endpoint",
  });
}

export async function POST(req: NextRequest) {
  const { userId, username, password } = await req.json();

  const token = jwt.sign({ userId }, jwtPassword);

  return NextResponse.json({
    data: {
      userId,
      username,
      password,
      token,
    },
  });
}
