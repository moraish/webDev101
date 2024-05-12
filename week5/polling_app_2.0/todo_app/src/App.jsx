import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [todos, setToDo] = useState([{
    title: "go to the gym",
    description: "go to the gym from 7-9"
  },
  {
    title: "study DSA",
    description: "study DSA from 9-11"
  },
  {
    title: "study react",
    description: "study DSA from 11-1"
  }])

  function onButtonClick() {
    setToDo([...todos, {title: "new todo", description: "description"}])
  }

  return (
    <>
    <button onClick={onButtonClick}>Add a random todo</button>
    {todos.map(Todo)}
    </>
  )
}



function Todo(props) {
  return (
    <>
    <h1>{props.title}</h1>
    <h2>{props.description}</h2>
    </>
  )
}

export default App


