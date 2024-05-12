import { useState } from "react"

let counter = 4;

function App() {

  const [toDo, setToDo] = useState([
    {
      "id": 1,
      "title" : "Hello",
      "description" : "India"
    }, 
    {
      "id": 2,
      "title" : "Hello",
      "description" : "Thailand"
    }, 
    {
      "id": 3,
      "title" : "Hello",
      "description" : "USA"
    }
  ]);

  function addToDo() {
    setToDo([...toDo, {"id": counter++,"title": "Hello", "description": "Norway"}]);
    console.log(toDo)
  }

  return (
    <>
    <button onClick={addToDo}>Add To Do</button>
    {/* {toDo.map(ToDo_Creator)} */}

    {toDo.map(todo => <ToDo_Creator key={todo.id} title={todo.title} description={todo.description}></ToDo_Creator>)}



    </>
  )
}




function ToDo_Creator({title ,description}) {
  return (
    <>
    <h1>{title}</h1>
    <h2>{description}</h2>
    </>
  )

}




export default App



