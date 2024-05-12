import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    alert("Mounted!");
  }, [count])

  function btnClick() {
    setCount(count+1);
  }
  return (
    <>
      <button onClick={btnClick}>Counter {count}</button>
    </>
  )
}

export default App
