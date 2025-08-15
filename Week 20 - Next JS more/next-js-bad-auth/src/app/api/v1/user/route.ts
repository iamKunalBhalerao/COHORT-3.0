import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {

    const data = await req.headers

    return NextResponse.json({
        message: "This is user page",
        data
    })
}