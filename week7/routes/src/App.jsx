import React, { useState, Suspense, lazy } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom'

const Dashboard = lazy(() => import('./components/Dashboard'))
const Landing = lazy(() => import('./components/Landing'))

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <>
        <AppBar />
        <Routes>
          <Route path="/dashboard" element={<Suspense fallback={"loading..."}><Dashboard /></Suspense>} />
          <Route path="/" element={<Suspense fallback={"loading..."}><Landing /></Suspense>} />
        </Routes>
      </>
    </BrowserRouter>
  );
}

function AppBar() {
  const navigate = useNavigate();
  return (
    <>
      <button onClick={() => {
        navigate('/');
      }}>Landing Page!</button>
      <button onClick={() => {
        navigate('/dashboard');
      }}>Dashboard Page!</button>
    
    </>
  )
}


export default App;
