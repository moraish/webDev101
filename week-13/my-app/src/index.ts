import { Hono } from 'hono'
import { userRouter } from './routes/user'
import { blogRouter } from './routes/blog'
import { cors } from 'hono/cors'

const app = new Hono<{
  Bindings: {
    DATABASE_URL: string,
    JET_SECRET: string
  }
}>()

app.use('/api/*', cors());


app.route("/api/v1/user", userRouter);
app.route("/api/v1/blog", blogRouter);






export default app;

// api_key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlfa2V5IjoiYjExMDE1NWItZjJhOC00NjZkLTg2YjctYjBjMWY5OThkYTQ3IiwidGVuYW50X2lkIjoiZWNmMTFjNWU2NmFkNDcyYzg0ZmY3MmMxMzE2NmZiMzMxYzU4MDRlODM0MDAyZDFiNzEyNjhmMzM2MTZkNjk5YSIsImludGVybmFsX3NlY3JldCI6IjU4ODk3ODczLWRmMWEtNGVhMi04MDk5LTMxNTkxZDA0YjEyMiJ9.fSl6PWfdNnXbmFDWQyTZ7V7-A2PrHkek81EuETjJPd8