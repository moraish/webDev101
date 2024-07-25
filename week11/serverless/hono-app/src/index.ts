import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.json({ message: 'Hello Hono!' })
})

app.get('/user', async (c) => {
  const body = await c.req.json();
  console.log(body);
  console.log(c.req.header("Authorization"));
  console.log(c.req.query("param"));

  return c.json({
    msg: "Hello Hono"
  });

})


export default app


/*
1. Return Data
2. Get Body
3. Get Headers
4. Get Query Params
5. Middlewares
6. Connecting to DB
*/