"use client"

import axios from "axios";
import { useEffect, useState } from "react"

interface Blog {
    authorId: number;
    title: string;
    content: string;
    author: {
        firstName: string;
        lastName: string;
    }
}



export function useBlog() {
    const endpoint = 'https://my-app.moraish.workers.dev/api/v1/blog/3'
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Mjh9.0LL6UHAyTJEbOIoKBpdi4NsJ8oKwQsFPBXUXu9pmqw0'

    const [isLoading, setisLoading] = useState(true);
    const [blog, setBlog] = useState<Blog | null>(null);

    useEffect(() => {
        async function fetchBlog() {
            console.log("Fetching data")
            try {
                const response = await axios.get(endpoint, {
                    headers: {
                        Authorization: token,
                    }
                })
                setBlog(response.data.blog)
            } catch (e) {
                console.log(e);
            } finally {
                console.log(blog);
                setisLoading(false);
            }
        }
        fetchBlog();
    }, [])

    return { isLoading, blog }
}