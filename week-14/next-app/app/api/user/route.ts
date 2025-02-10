import { NextRequest, NextResponse } from "next/server";

export function GET(req: NextRequest) {
    // do validation here
    // hit the endpoint here
    console.log("HIT")
    return NextResponse.json({
        title: "first blog",
        content: "new content"
    })
}


export async function POST(req: NextRequest) {
    // body
    const body = await req.json();
    console.log(body)
    // headers
    console.log(req.headers.get("auth"));
    // query params
    console.log(req.nextUrl.searchParams.get("name"));

    return NextResponse.json({
        message: "params work!"
    })
}