"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { NextResponse } from "next/server";
import { useState } from "react"

export default function Signup() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    async function handler() {
        const response = await axios.post("http://localhost:3000/api/user", {
            username, password
        });
        router.push("/");
        return NextResponse.json({
            response
        })
    }

    return (
        <div className="flex justify-center">
            <div className="flex flex-col p-5 justify-center  m-5 h-screen" >
                <div className="flex flex-col border p-4 m-4">
                    <div className="mb-5 justify-center flex">
                        Signup Page</div>
                    <input onChange={(e) => {
                        setUsername(e.target.value);
                    }} className="border m-2 p-2" type="text" placeholder="username" />
                    <input onChange={(e) => {
                        setPassword(e.target.value);
                    }} className="border m-2 p-2" type="password" placeholder="password" />
                    <div className="flex justify-center">
                        <button onClick={handler} className="border rounded-lg text-white border-black bg-blue-500 p-2 m-2 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">Sign up</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

