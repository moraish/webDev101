import axios from "axios"
import { useEffect, useState } from "react"

interface Blog {
  author: {
    firstName: string
  }
}

function App() {
  const [blog, setBlog] = useState<Blog>({
    author: {
      firstName: ""
    }
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBlog() {
      try {
        const response = await axios.get("https://my-app.moraish.workers.dev/api/v1/blog/3", {
          headers: {
            Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Mjh9.0LL6UHAyTJEbOIoKBpdi4NsJ8oKwQsFPBXUXu9pmqw0',
          }
        })
        setBlog(response.data.blog);
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    }
    fetchBlog();
  }, []);

  return (
    <>
      Hello World!

      {
        loading ? (
          <p>"Loading..."</p>) : (
          <p>{blog.author.firstName}</p>)
      }
    </>
  )
}

export default App
