import { ChangeEvent, useState } from "react";
import AppBar from "../components/AppBar"

export const CreateBlog = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    return (
        <div>
            <AppBar />
            <div className="px-20 ">

                <textarea onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
                    setTitle(e.target.value)
                }} id="Title" value={title} className="mt-10 p-2 block w-full text-sm text-gray-800 bg-white border border-zinc-200" placeholder="Title" required >
                </textarea>

                <textarea onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
                    setContent(e.target.value)
                }} id="Content" value={content} className="my-2 p-2 h-80 focus:outline-none block w-full text-sm text-gray-800 bg-white border border-zinc-200" placeholder="Write your Blog..." required >
                </textarea>


                <button onClick={() => {
                    console.log(title, content)
                }} type="submit" className="mt-4 inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-green-500 rounded-lg hover:bg-green-600">
                    Publish
                </button>
            </div>
        </div>
    )
}

