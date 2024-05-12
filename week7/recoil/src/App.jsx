import './App.css'
import { useRecoilValue, useRecoilState, RecoilRoot, atom, useSetRecoilState, selector } from 'recoil'
import { countAtom, evenSelector } from './store/atoms/count'


// ** Topics in recoil
// RecoilRoot
// atom
// useRecoilState
// useRecoilValue
// useSetRecoilState
// selector



function App() {

  return (
    <>
    <RecoilRoot>
      <Count /> <br />
      <Buttons />
      <Printer />
    </RecoilRoot>
    </>
  )
}

function Count() {
  console.log("Rerender!!")
  return (
    <>
        <CountRenderer />
    </>
  )
}


function CountRenderer() {
  const count = useRecoilValue(countAtom);
  return (
    <>
      {count}
    </>
  ) 
}


function Buttons() {
  // const [count, setCount] = useRecoilState(countAtom);
  console.log("Button Rerender");
  const setCount = useSetRecoilState(countAtom);
  return (
    <>
      <button onClick={() => {
        setCount((prevCount) => prevCount+1);
      }}>Increase</button>

      <button onClick={() => {
        setCount((prevCount) => prevCount-1);
      }}>Decrease</button>
    </>
    )
  }


  function Printer() {
    const even = useRecoilValue(evenSelector);
    return (
      <>
        <br />
        {even ? "ODD!" : "EVEN!"}
        
      </>
    )    
  }



export default App
