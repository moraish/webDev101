import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [bankReturns, setBankReturns] = useState({});
  const [marketReturns, setMarketReturns] = useState({});

  useEffect(() => {
    setTimeout(() => {
      console.log("Bank");
      setBankReturns({income: 100});
    }, 3000)
  }, [])


  useEffect(() => {
    setTimeout(() => {
      console.log("Market");
      setMarketReturns({returns: 200});
    }, 1000)
  }, []);

  const incomeTax = (bankReturns.income + marketReturns.returns) * 0.3;
  console.log("Income tax calculated!")

  return (
    <>
      Your income tax is : {incomeTax};
    </>
  )
}

export default App
