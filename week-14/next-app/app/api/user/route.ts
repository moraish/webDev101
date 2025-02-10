import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import client from "@/db"

// const client = new PrismaClient()

export async function GET(req: NextRequest) {
    // do validation here
    // hit the endpoint here
    console.log("HIT")
    // return NextResponse.json({
    //     title: "first blog",
    //     content: "new content"
    // })

    const user = await client.user.findFirst();
    return NextResponse.json({
        username: user?.username,
        password: user?.password
    })
}


export async function POST(req: NextRequest) {
    // body
    const body = await req.json();
    console.log(body)
    // headers
    // console.log(req.headers.get("auth"));
    // query params
    // console.log(req.nextUrl.searchParams.get("name"));

    try {
        await client.user.create({
            data: {
                username: body.username,
                password: body.password
            }
        })
        return NextResponse.json({
            message: "User created"
        })
    } catch (e) {
        console.log(e)
        return NextResponse.json({
            message: "Failed to create user"
        })
    }

}