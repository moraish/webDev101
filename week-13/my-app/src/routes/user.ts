import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { decode, sign, verify } from 'hono/jwt'



export const userRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string,
        JET_SECRET: string
    }
}>();


userRouter.post('/signup', async (c) => {

    const body = await c.req.json();

    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    // needs to add 1. ZOD
    // 2. Password enctyption
    try {

        const user = await prisma.user.create({
            data: {
                username: body.username,
                password: body.password,
                firstName: body.firstName,
                lastName: body.lastName
            }
        })
        const jwt = await sign({
            id: user.id,
        }, c.env.JET_SECRET);

        return c.text(jwt);
    } catch (e) {
        console.log(e)
        c.status(411);
        return c.text("Invalid username")
    }
})



userRouter.post('/signin', async (c) => {
    const body = await c.req.json();
    console.log(body);
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    try {
        const user = await prisma.user.findFirst({
            where: {
                username: body.username,
                password: body.password
            }
        })
        if (!user) {
            c.status(403); // unauthorized
            return c.json({
                message: "invalid credentials"
            })
        }
        const jwt = await sign({
            id: user.id
        }, c.env.JET_SECRET)

        return c.text(jwt)


    } catch (e) {
        console.log(e)
        return c.text("error occured");
    }


})