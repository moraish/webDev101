import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { decode, sign, verify } from 'hono/jwt'


export const blogRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string,
        JET_SECRET: string,
    },
    Variables: {
        userId: string;
    }
}>();

blogRouter.use("/*", async (c, next) => {
    const authHeader = c.req.header("authorization") || "";
    const user = await verify(authHeader, c.env.JET_SECRET);
    if (user) {
        c.set("userId", user.id as string);
        next();
    }
    else {
        c.status(403);
        return c.json({
            message: "User not authorized!"
        })
    }
})

blogRouter.post('/', async (c) => {

    const body = await c.req.json();
    const userId = c.get("userId");
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());


    const blog = await prisma.blog.create({
        data: {
            authorId: parseInt(userId),
            title: body.title,
            content: body.content
        }
    })

    return c.json({
        id: blog.id
    })

})


blogRouter.put('/', async (c) => {
    const body = await c.req.json();

    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate());

    const blog = await prisma.blog.update({
        where: {
            id: body.id
        },
        data: {
            title: body.title,
            content: body.contnet
        }
    })

    return c.json({
        id: blog.id
    })
})

blogRouter.get('/', async (c) => {
    const body = await c.req.json();
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate())

    try {
        const blog = prisma.blog.findFirst({
            where: {
                id: body.id
            }
        })
        return c.json({
            blog
        })
    } catch (e) {
        console.log(e);
        return c.json({
            message: "failed to return blog"
        })
    }
})

// ToDo: add pagination
blogRouter.get('/bulk', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate())

    const blogs = await prisma.blog.findMany();
    return c.json({
        blogs
    })

})



// model Blog {
//     id        Int     @id @default(autoincrement())
//     authorId  Int
//     title     String
//     content   String
//     published Boolean @default(false)
//     author    User    @relation(fields: [authorId], references: [id])
//   }
