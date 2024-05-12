import { useState, memo, useCallback} from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);


  const btnClick = useCallback(() => {
    setCount(count + 1);
  }, [])

  return (
    <>
      <ButtonComponent inputFunction={btnClick} />
      <br />
      <button onClick={() => {setCount(count+1)}}>Counter {count}</button>
      
    </>
  )
}

const ButtonComponent = memo(({inputFunction}) => {
  console.log("Child rerendered");

  return (
    <>
      <button>Button Clicked</button>
    </>
  )
})


// function ButtonComponent( {inputFunction} ) {

//   console.log("Child rerender");

//   return (
//     <>
//       <button onClick={inputFunction}>Button Clicked</button>
//     </>
//   )
// }

export default App
