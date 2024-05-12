import { useEffect, useState, useMemo } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  console.log("App rendered!")
  const [exchange1, setExchange1] = useState({});
  const [exchange2, setExchange2] = useState({});
  const [bank, setBank] = useState({});

  useEffect(() => {
    setExchange1({
      income: 500
    });
  }, []);

  useEffect(() => {
    setExchange2({
      income: 100
    });
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setBank({income: 1200})
    }, 2000);
  }, []);

  const cryptoReturns = useMemo(() => {
    return exchange1.income + exchange2.income;
  }, [exchange1, exchange2]);
  console.log(cryptoReturns);
  const incomeTax = (cryptoReturns + bank.income) * 0.3;
  return (
    <>
    <p>Your income tax return is {incomeTax}</p>    
    </>
  )
}

export default App
