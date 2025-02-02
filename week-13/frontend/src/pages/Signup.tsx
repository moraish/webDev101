import Quote from "../components/Quote";
import SignUpForm from "../components/SignUpForm";

function Signup() {
    return (
        <>
            <div className="grid grid-cols-2">
                <div className="w-full">
                    <SignUpForm />
                </div>
                <div className="invisible lg:visible">
                    <Quote />
                </div>
            </div>
        </>
    )
}

export default Signup;