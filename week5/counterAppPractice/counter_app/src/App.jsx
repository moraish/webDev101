import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <MyButton count = {count} setCount = {setCount}></MyButton>
    </div>
  )
}

function MyButton(props) {
  function onClickHandler() {
    props.setCount(props.count + 1);
  }
  
  return (
    <button onClick={onClickHandler}>Counter {props.count}</button>
  )
}

export default App






