import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState(0);
  
  function btnClick() {
    setCounter(counter + 1);
  }

  function sumN(n) {
    console.log("rerender")
    n = Number(n);
    return (n * (n+1)) / 2;
  }


  return (
    <>
      <input type='text' onChange={(val) => setInputValue(val.target.value)}></input>
      <br />
      Sum is = {sumN(inputValue)}
      <br />
      <button onClick={btnClick}>Counter ({counter})</button>
    </>
  )
}

export default App
