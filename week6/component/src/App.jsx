import { useState } from "react";
import { memo } from "react";

function App() {

  const [header, setHeader] = useState("Helloo ");
  
  function changeHeader() {
    setHeader(Math.random());
  }


  return (
  <>
    <button onClick={changeHeader}>Click Here to change header</button>
    <Header title={header}></Header>
    <br></br>
  <Header title="There!"></Header>
  <Header title="There!"></Header>
  <Header title="There!"></Header>
  <Header title="There!"></Header>
  </>
  )

}


const Header = memo(function ({title}) {
  return (
    <div>
      <h2>{title}</h2>
    </div>
  )
})


export default App



// function CardWrapper({children}) {
//   return <div style={{border: "2px solid black", padding: 20 }}>
//     {children}
//     </div>

// }