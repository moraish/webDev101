import { SignupInput } from "@moraish/medium-common";
import { useState } from "react";
import { Link } from "react-router-dom";

function SignUpForm() {

    const [postInputs, setpostInputs] = useState<SignupInput>({
        firstName: "",
        lastName: "",
        username: "",
        password: ""
    });

    return (
        <div className="h-screen flex justify-center items-center flex-col p-10 ">
            <div className="font-bold text-2xl ">
                Create an account
            </div>
            <div className="font-normal ">
                Already have an account? <Link to="/signin" className="underline pl-2">Login</Link>
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
                <LabelledInput label="Password" placeholder="********" onchange={(e) => {
                    setpostInputs({
                        ...postInputs,
                        password: e.target.value
                    })
                }} />
            </div>
            <div className="pt-3 w-3/5">
                <button className="w-full h-12 px-6 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800">
                    Signup
                </button>
            </div>
        </div>
    )
}

export default SignUpForm;

interface LabelledInputType {
    label: string,
    placeholder: string,
    onchange: (e: any) => void
}

function LabelledInput({ label, placeholder, onchange }: LabelledInputType) {
    return (
        <div>
            <label className="block mb-2 text-xl font-medium text-gray-900 dark:text-white">{label}</label>
            <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={placeholder} onChange={onchange} required />
        </div>
    )
}