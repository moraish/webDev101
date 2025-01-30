import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { decode, sign, verify } from 'hono/jwt'


const app = new Hono<{
  Bindings: {
    DATABASE_URL: string,
    JET_SECRET: string
  }
}>()

app.post('/api/v1/user/signup', async (c) => {

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



app.post('/api/v1/user/signin', async (c) => {
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

app.post('/api/v1/blog', (c) => {
  return c.text('Hello Hono!')
})

app.put('/api/v1/blog', (c) => {
  return c.text('Hello Hono!')
})

app.get('/api/v1/blog', (c) => {
  return c.text('Hello Hono!')
})

app.get('/api/v1/blog/:id', (c) => {
  return c.text('Hello Hono!')
})

app.get('/api/v1/blog/bulk', (c) => {
  return c.text('Hello Hono!')
})




export default app;

// api_key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlfa2V5IjoiYjExMDE1NWItZjJhOC00NjZkLTg2YjctYjBjMWY5OThkYTQ3IiwidGVuYW50X2lkIjoiZWNmMTFjNWU2NmFkNDcyYzg0ZmY3MmMxMzE2NmZiMzMxYzU4MDRlODM0MDAyZDFiNzEyNjhmMzM2MTZkNjk5YSIsImludGVybmFsX3NlY3JldCI6IjU4ODk3ODczLWRmMWEtNGVhMi04MDk5LTMxNTkxZDA0YjEyMiJ9.fSl6PWfdNnXbmFDWQyTZ7V7-A2PrHkek81EuETjJPd8