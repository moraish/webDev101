import { useBlog } from "@/hooks/useBlog";
import axios from "axios";

async function getblogDetails() {
    const endpoint = 'https://my-app.moraish.workers.dev/api/v1/blog/3';
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Mjh9.0LL6UHAyTJEbOIoKBpdi4NsJ8oKwQsFPBXUXu9pmqw0';

    const response = await axios.get(endpoint, {
        headers: {
            Authorization: token,
        }
    })

    return response.data.blog;
}



export default async function () {
    const blogDetails = await getblogDetails();
    return (<div>
        Hello
        {blogDetails.title}
        {blogDetails.content}
    </div>)


}