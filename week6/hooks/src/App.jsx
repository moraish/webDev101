import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [toDoNo, setToDoNo] = useState(1);

  function updateToDo(id) {
    setToDoNo(id);
  }
  console.log("id = " + toDoNo)
  return (
    <>
      <button onClick={() => updateToDo(1)}>̵1</button>
      <button onClick={() => updateToDo(2)}>2</button>
      <button onClick={() => updateToDo(3)}>̵3</button>
      <button onClick={() => updateToDo(4)}>̵4</button>
      <br />

      <Todo id={toDoNo} />
    </>
  )
}


function Todo( {id} ) {

  const [todos, setToDos] = useState({});

  useEffect(() => {
    const toDoURL = "https://sum-server.100xdevs.com/todo?id=" + id
    fetch(toDoURL)
      .then(async (res) => {
        const res_todos = await res.json();
        setToDos(res_todos);
      })

  }, [id])

  return (
    <>
      {JSON.stringify(todos)}
    </>
  )
}

export default App
