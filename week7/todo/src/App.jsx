import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RecoilRoot, useRecoilValue, useSetRecoilState } from 'recoil'
import { todoAtom } from './store/atoms/todos'

function App() {

  return (
    <>
      <RecoilRoot>
        <input type='text' placeholder='Enter Todo'/> <br />
        <input type='text' placeholder='Enter Description'/> <br />
        <AddTodo />
        <DisplayTodos />
      </RecoilRoot>

    </>
  )
}


function AddTodo() {

  const setTodos = useSetRecoilState(todoAtom);
  function adding() {
    console.log("Adding Todo");

    setTodos((prev) => 
      [...prev, {
        'title': 'new todo',
        'desc': 'new desc'
      }
      ]
    )

  }

  return (
    <button onClick={adding}>Add ToDo</button>
  )
}

function DisplayTodos() {
  console.log('Display Render!')
  const todos = useRecoilValue(todoAtom);
  console.log(todos)

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



export default App
