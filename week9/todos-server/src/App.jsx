import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get("https://sum-server.100xdevs.com/todos")
      .then(res => {
        setTodos(res.data.todos);
      })
  }, []);


  return (
    <>
      {todos.map(todo => <DisplayTodo title={todo.title} description={todo.description} />)}

    </>
  )
}


function DisplayTodo({ title, description }) {
  return (
    <>
      <h1>{title}</h1>
      <h2>{description}</h2>
    </>
  )


}

export default App
