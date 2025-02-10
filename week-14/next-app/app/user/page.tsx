import axios from "axios"

export default async function () {
    // no waterfalling - this is server ssr
    async function fetchData() {
        const response = await axios.get("https://my-app.moraish.workers.dev/api/v1/blog/3", {
            headers: {
                Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Mjh9.0LL6UHAyTJEbOIoKBpdi4NsJ8oKwQsFPBXUXu9pmqw0"
            }
        })

        return response.data.blog;

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