import axios from "axios"

export default async function () {
    // no waterfalling - this is server ssr
    async function fetchData() {
        const response = await axios.get("http://localhost:3000/api/user")

        return response.data;

    }

    const data = await fetchData();



    return (
        <div>
            User Page <br />
            {data.title} <br />
            {data.content}
        </div>
    )
}