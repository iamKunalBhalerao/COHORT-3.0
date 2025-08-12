import prismaClient from "@/app/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { username, email, password } = await req.json();

  const response = await prismaClient.user.create({
    data: {
      username: username,
      email: email,
      password: password,
    },
  });

  console.log(response);

  return NextResponse.json({
    success: true,
    message: "This is signup route",
    response,
  });
}
