import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";

function useBlogs() {

    const [loading, setLoading] = useState(true);
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        axios.get(BACKEND_URL + '/api/v1/blog/bulk', {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        })
            .then(response => {
                setBlogs(response.data)
                setLoading(false)
                console.log(response.data)
            })
    }, [])

    return {
        loading, blogs
    }

}


export default useBlogs;