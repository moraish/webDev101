import { useState } from 'react'
import './App.css'



function App() {
  const [toDo, setToDo] = useState([{
    name: "Work task 1",
    description: "Complete office work!"
  }, {
    name: "work task 2",
    description: "Complete web dev work!"
  }])

  return (
    <>
    {toDo.map(RenderTask)}
    </>
  )
}


function RenderTask(props) {
  return(
    <>
    <h1>{props.name}</h1>
    <h2>{props.description}</h2>
    </>
  )
}



export default App
