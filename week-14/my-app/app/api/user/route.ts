import { NextRequest } from "next/server"

export function GET() {
    // database logic

    return Response.json({
        title: "Blog Header",
        content: "Blog Contents"
    })
}


// Express way to make a get request
// app.get('/api/user', (req, res) => {
//     return res.json({
//         email: "moraish.kapoor@gmail.com",
//         name: "moraish"
//     })
// })


export async function POST(req: NextRequest) {

    // extract the body
    const body = await req.json()
    console.log(body);

    // store in the databse

    return Response.json({
        message: "You are logged in"
    })
}