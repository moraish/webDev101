import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Count count={count}/>
      <Buttons count={count} setCount={setCount}/>
    </>
  )
}


function Count({ count }) {
  return <>{count} <br /></>

}

function Buttons({ count, setCount }) {

  return(
    <>
      <button onClick={() => {
        setCount(count + 1);
      }}>Increase</button>
      <button onClick={() => {
        setCount(count - 1);
      }}>Decrease</button>
    </>
  )


}


export default App

