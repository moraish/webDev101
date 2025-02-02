import { SignupInput } from "@moraish/medium-common";
import { useState } from "react";
import { Link } from "react-router-dom";

function Auth({ type }: { type: "signup" | "signin" }) {

    const [postInputs, setpostInputs] = useState<SignupInput>({
        firstName: "",
        lastName: "",
        username: "",
        password: ""
    });

    return (
        <div className="h-screen flex justify-center items-center flex-col p-10 ">
            {/* {JSON.stringify(postInputs)} */}
            <div className="font-bold text-2xl ">
                {type === 'signup' ? "Create an account" : "Login to your account"}
            </div>
            <div className="font-normal ">
                {type === 'signup' ? "Already have an account?" : "Don't have an account?"} {type === 'signup' ? <Link to="/signin" className="underline pl-2">Login</Link> : <Link to="/signup" className="underline pl-2">Signup</Link>}
            </div>

            <div className="pt-10 w-3/5">
                <LabelledInput label="First Name" placeholder="Moraish" onchange={(e) => {
                    setpostInputs({
                        ...postInputs,
                        firstName: e.target.value
                    })
                }} />
            </div>
            <div className="pt-6 w-3/5">
                <LabelledInput label="Last Name" placeholder="Kapoor" onchange={(e) => {
                    setpostInputs({
                        ...postInputs,
                        lastName: e.target.value
                    })
                }} />
            </div>
            <div className="pt-6 w-3/5">
                <LabelledInput label="Username / Email ID" placeholder="mkapoor" onchange={(e) => {
                    setpostInputs({
                        ...postInputs,
                        username: e.target.value
                    })
                }} />
            </div>
            <div className="pt-6 w-3/5">
                <LabelledInput label="Password" placeholder="********" type="password" onchange={(e) => {
                    setpostInputs({
                        ...postInputs,
                        password: e.target.value
                    })
                }} />
            </div>
            <div className="pt-3 w-3/5">
                <button className="w-full h-12 px-6 text-white transition-colors duration-150 bg-black rounded-lg focus:shadow-outline hover:bg-indigo-800">
                    Signup
                </button>
            </div>
        </div>
    )
}


interface LabelledInputType {
    label: string,
    placeholder: string,
    onchange: (e: any) => void,
    type?: string
}

function LabelledInput({ label, placeholder, onchange, type }: LabelledInputType) {
    return (
        <div>
            <label className="block mb-2 text-xl font-medium text-gray-900 dark:text-white">{label}</label>
            <input type={type || "text"} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={placeholder} onChange={onchange} required />
        </div>
    )
}


export default Auth;