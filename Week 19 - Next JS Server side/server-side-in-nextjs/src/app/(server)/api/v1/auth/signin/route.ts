import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prismaClient = new PrismaClient();

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();

  const response = await prismaClient.user.findFirst({
    where: {
      email: email,
    },
  });

  if(!response) {
    return NextResponse.json({
        success: false,
        message: "User Not Found with this email!"
    })
  }

  return NextResponse.json({
    success: true,
    message: "This is signin route",
    response,
  });
}
