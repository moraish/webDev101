import { useState } from 'react'
import { memo } from 'react'
import './App.css'

function App() {
  const [title, setTitle] = useState("moraish!")

  function btnClick() {
    setTitle(Math.random())
  }


  return (
    <>
    <button onClick={btnClick}>Update name</button>
      <Header title = 'Hello'></Header>
      <Header title = 'Hello'></Header>
      <Header title = 'Hello'></Header>
      <Header title = 'Is there anybody in there?'></Header>
      <Header title = {title}></Header>
    </>
  )
}

const Header = memo(function Header({title}) {
  console.log("Header called~!")
  return (
    <div>
      {title}
    </div>
  )
})

export default App
