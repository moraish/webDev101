"use client";

import axios from "axios";
import { useState } from "react"

export default function SignupComponent() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function handler() {
        // console.log(username, password);
        axios.post('http://localhost:3000/api/user', {
            username, password
        });
    }


    return (
        <div className="flex justify-center h-screen">
            <div className="flex flex-col justify-center">
                <div>
                    <label className="block mb-2  text-gray-900 font-bold text-xl">Username</label>
                    <input onChange={(e) => {
                        setUsername(e.target.value)
                    }} type="text" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-3" placeholder="moraish.kapoor@gmail.com" required />
                </div>
                <div>
                    <label className="block mb-2 text-xl font-bold text-gray-900">Password</label>
                    <input onChange={(e) => {
                        setPassword(e.target.value)
                    }} type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-3" placeholder="" required />
                </div>
                <div className="flex justify-center">
                    <button onClick={handler} type="button" className="text-white flex flex-1 justify-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 ">Login</button>

                </div>
            </div>
        </div>
    )
}