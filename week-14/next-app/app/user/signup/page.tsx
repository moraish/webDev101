export default function () {
    return (
        <div className="flex justify-center">
            <div className="flex flex-col p-5 justify-center  m-5 h-screen" >
                <div className="flex flex-col border p-4 m-4">
                    <div className="mb-5 justify-center flex">
                        Signup Page</div>
                    <input className="border m-2 p-2" type="text" placeholder="username" />
                    <input className="border m-2 p-2" type="password" placeholder="password" />
                    <div className="flex justify-center">
                        <button className="border rounded-lg text-white border-black bg-blue-500 p-2 m-2 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">Sign up</button>
                    </div>
                </div>
            </div>

        </div>)
}