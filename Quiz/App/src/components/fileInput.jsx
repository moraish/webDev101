import { useState } from 'react'
import { quizGenerator } from './quizGenerator';


export function FileInputComponent() {
    const [selectedFile, setSelectedFile] = useState(null);
    
    function fileUploadHandler(event) {
        setSelectedFile(event.target.files[0]);
        
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log("File Uploaded")
        const reader = new FileReader();
        reader.onload = function(event) {
            console.log("File content:", event.target.result);
        };
        
        console.log(reader.readAsText(selectedFile));
        // console.log(selectedFile)
    }

    
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="file" onChange={fileUploadHandler}></input>
                <button type="submit">Upload</button>
            </form>
        </>
      );
}