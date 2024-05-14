import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RecoilRoot, useRecoilValue, useSetRecoilState } from 'recoil'
import { todoAtom, toDoTitleAtom, toDoDescAtom, todoFilterState } from './store/atoms/todos'

function App() {
  
  return (
    <>
      <RecoilRoot>
        <AddTodo />
        <DisplayTodos />
        <Filter />
      </RecoilRoot>

    </>
  )
}


function AddTodo() {

  const setToDo = useSetRecoilState(toDoTitleAtom);
  const setToDoDesc = useSetRecoilState(toDoDescAtom);
  const setTodos = useSetRecoilState(todoAtom);

  const getTitle = useRecoilValue(toDoTitleAtom);
  const getDesc = useRecoilValue(toDoDescAtom);

  function addToDoTitle(event) {
    setToDo(event.target.value);
  }

  function addToDoDesc(event) {
    setToDoDesc(event.target.value);
  }

  function adding() {
    
    console.log("Adding Todo");

    setTodos((prev) => 
      [...prev, {
        'title': getTitle,
        'desc': getDesc
      }
      ]
    )

  }

  return (
    <>
      <input type='text' placeholder='Enter Todo' onChange={addToDoTitle}/> <br />
      <input type='text' placeholder='Enter Description' onChange={addToDoDesc}/> <br />
      <button onClick={adding}>Add ToDo</button>
    </>
  )
}

function DisplayTodos() {
  console.log('Display Render!')
  const todos = useRecoilValue(todoAtom);

  return (
    <>
      {todos.map((todo, index) => (
        <div key={index}>
          <h1>{todo.title}</h1>
          <h2>{todo.desc}</h2>
        </div>
      ))}
    </>
  )
}


function Filter() {

  const setFilter = useSetRecoilState(todoFilterState);
  const getFilterValue = useRecoilValue(todoFilterState);
  const filteredTodos = useRecoilValue(filterSelector);

  function setFilter(event) {
    
    setFilter(event.target.value);
    console.log(getFilterValue);
  }

  function displayFilter() {
    
    console.log(filteredTodos);

  }

  return (
    <>
      <input type='text' placeholder='Filter condition' onChange={setFilter} />
      <button onClick={displayFilter}>Filter ToDos</button>

    </>
  )
}


export default App
