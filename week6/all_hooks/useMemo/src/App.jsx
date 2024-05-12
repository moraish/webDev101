import { useState } from 'react'
import './App.css'
import { useMemo } from 'react';
import { memo } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [val, setVal] = useState(0)

  const nSum = memo((val) => {
    val = Number(val);
    setVal(val*100);
  }, [])
  return (
    <>
      <input type='text' value={val}></input>
      Sum is : {nSum(val)}
    </>
  )
}

export default App
