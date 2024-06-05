import { useState, useEffect } from 'react'
import './App.css'

function useDebounce(value, setTime) {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setDebouncedValue(value);
        }, setTime);

        return () => {
            clearInterval(timeout);
        }
    }, [value])
    return debouncedValue;
}

function App2() {
    const [value, setValue] = useState(0);
    const val = useDebounce(value, 1000);
    return (
        <>
            <h1>Value set is: </h1> {val}
            <input type='text' onChange={(val) => { setValue(val.target.value) }} />
        </>
    )
}

export default App2
