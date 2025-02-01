import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { decode, sign, verify } from 'hono/jwt'
import { createBlogInput, updateBlogInput } from "@moraish/medium-common";


export const blogRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string,
        JET_SECRET: string,
    },
    Variables: {
        userId: string;
    }
}>();

// MIDDLEWARE TO CHECK IF USER IS LOGGED IN
blogRouter.use("/*", async (c, next) => {
    const authHeader = c.req.header("authorization") || "";
    const user = await verify(authHeader, c.env.JET_SECRET);
    if (user) {
        c.set("userId", user.id as string);
        console.log(user);
        await next();
    }
    else {
        c.status(403);
        return c.json({
            message: "User not authorized!"
        })
    }
})

// POST A BLOG
blogRouter.post('/', async (c) => {

    const body = await c.req.json();
    const { success } = createBlogInput.safeParse(body);
    if (!success) {
        c.status(411);
        return c.json({
            message: 'invalid inputs'
        })
    }


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

// UPDATE A BLOG
blogRouter.put('/', async (c) => {
    const body = await c.req.json();
    // ZOD validation
    const { success } = updateBlogInput.safeParse(body);
    if (!success) {
        c.status(411);
        return c.json({
            message: "incorrect inputs"
        })
    }

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

// GET ALL BLOGS
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

// GET BLOG WITH A PARTICULAR ID
blogRouter.get('/:id', async (c) => {
    const id = c.req.param('id');
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate())

    try {
        const blog = await prisma.blog.findFirst({
            select: {
                authorId: true,
                title: true,
                content: true
            },
            where: {
                id: Number(id)
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


// https://17e75e38-my-app.moraish.workers.dev/