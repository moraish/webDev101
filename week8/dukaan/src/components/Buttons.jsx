export const Button = ({buttonText, variant = "default"}) => {
    let buttonStyle;
    if(variant === "default") {
        buttonStyle = "text-white bg-blue-500 hover:bg-blue-600 focus:ring-blue-300"
    }
    else {
        buttonStyle = "text-black bg-gray-200 hover:bg-gray-300 focus:ring-gray-100"
    }
    return (
    <>    
        <button type="button" 
        className={`font-medium rounded-full text-sm px-2 py-1 text-center me-1 mb-1 ${buttonStyle}`}
        >
            {buttonText}
        </button>
    </>
    )
}

