import { useState } from 'react'
import './App.css'

function App() {
  const [toDo, setToDo] = useState([{"Action": "No current toDos"}]);
  // const [toDo, setToDo] = useState(0);
 
  return (
    <CustomButton toDo = {toDo} setToDo = {setToDo}></CustomButton>
  )
}

function CustomButton(props) {
  function onClickHandler() {
    let task = {'Action' :'Task Added'};
    props.setToDo([...props.toDo, task]);
    console.log(props.toDo);
  }


  return (
    <button onClick={onClickHandler}>Add ToDo</button>
  )
}

export default App
