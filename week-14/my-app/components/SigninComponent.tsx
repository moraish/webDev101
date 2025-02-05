"use client"
export default function SigninComponent() {

    function handler() {
        console.log("hello")
    }

    return <div className="flex justify-center h-screen items-center">
        <div className="p-5 m-5 border w-full container sm:max-w-96">
            <div className="flex justify-center mb-5 text-xl font-bold">
                Sign In Page
            </div>
            <div className="flex flex-col ">
                <label className="block mb-2 text-sm font-medium text-gray-900">Username</label>
                <input type="text" id="small-input" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500" />


                <label className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                <input type="text" id="small-input" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 " />

                <button onClick={handler} type="button" className="mt-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 ">Sign in</button>
            </div>
        </div>
    </div>

}