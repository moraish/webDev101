import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <CustomButton count = {count} setCount = {setCount}></CustomButton>
  )
}


function CustomButton(props) {
  function onButtonPress() {
    props.setCount(props.count + 1);
  }

  return (
    <button onClick={onButtonPress}>Counter {props.count}</button>
  )


}

export default App
