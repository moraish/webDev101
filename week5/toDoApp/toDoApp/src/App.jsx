import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'





function App() {

  const [toDo, setToDo] = useState([{
    title: "go to the gym",
    desc: "time 5-7PM",
    completed: true
  }, {
    title: "solve dsa problems",
    desc: "time 9-11PM",
    completed: false
  }])

  function addTo() {
    setToDo([...toDo, {
      title: "new ToDo",
      desc: "new desc",
      completed: false
    }])
  }

  return (
  <div>
    <button onClick={addTo}>Add ToDo</button>
    
    {toDo.map(function(todo) {
      return (<ToDo title={todo.title} desc={todo.desc}></ToDo>)
    })}
  </div>
  )

  // return (
  //   <div>
  //     <button onClick={addTo}>Add ToDo</button>
      
  //     {
  //       (function() {
  //         const toDoElements = [];
  //         for (let i = 0; i < toDo.length; i++) {
  //           const todo = toDo[i];
  //           toDoElements.push(<ToDo key={i} title={todo.title} desc={todo.desc}></ToDo>);
  //         }
  //         return toDoElements;
  //       })()
  //     }
  //   </div>
  // )
}



function ToDo(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.desc}</h2>
    </div>
  )
}


export default App
