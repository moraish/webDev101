import { useBlog } from "@/hooks/useBlog";
import axios from "axios";

async function getBlogDetails() {
    const endpoint = 'http://localhost:3000/api/user';

    const response = await axios.get(endpoint);

    await timeout(5000); // Wait for 5 seconds

    return response.data;
}

function timeout(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


export default async function () {
    const blogDetails = await getBlogDetails();
    return (<div>
        Hello
        {blogDetails.title}
        {blogDetails.content}
    </div>)


}