import { Link } from "react-router-dom";
import { Avatar } from "./BlogCard";

function AppBar() {
    return (
        <div className="flex justify-between border-b border-slate-500 h-12 w-full">
            <div className="flex justify-center flex-col px-6">
                <Link to='/blogs'>
                    Blogs
                </Link>
            </div>
            <div className="flex justify-center flex-col px-6">
                <Avatar name="Moraish" size="big" />
            </div>
        </div>

    )
}

export default AppBar;
