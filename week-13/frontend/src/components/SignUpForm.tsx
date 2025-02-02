import { Link } from "react-router-dom";

function SignUpForm() {
    return (
        <div className="h-screen flex justify-center items-center flex-col p-10">
            <div className="font-bold text-2xl">
                Create an account
            </div>
            <div className="font-normal">
                Already have an account? <Link to="/signin" className="underline pl-2">Login</Link>
            </div>
        </div>
    )
}

export default SignUpForm;  