
import AppBar from "../components/AppBar";
import { BlogCard } from "../components/BlogCard";
import useBlogs from "../hooks/useBlogs";



function Blogs() {
    const { loading, blogs } = useBlogs();
    if (loading) {
        return <div>loading...</div>
    }
    return (
        <div>
            <AppBar />
            <div className="flex justify-center">
                <div>
                    <BlogCard
                        authorName="Moraish Kapoor"
                        publishedDate="2nd Feb 2025"
                        title="How an Ugly Single-Page Website makes $5,000 a month with Affiliate Marketing"
                        content="How an Ugly Single-Page Website makes $5,000 a month with Affiliate Marketing How an Ugly Single-Page Website makes $5,000 a month with Affiliate Marketing How an Ugly Single-Page Website makes $5,000 a month with Affiliate Marketing How an Ugly Single-Page Website makes $5,000 a month with Affiliate Marketing How an Ugly Single-Page Website makes $5,000 a month with Affiliate Marketing"
                    />
                </div>
            </div>
        </div>
    )
}

export default Blogs;