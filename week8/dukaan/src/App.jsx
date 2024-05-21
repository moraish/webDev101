import './App.css'
import { Button } from './components/Buttons.jsx'
import { RevenueCard } from './components/RevenueCard.jsx'

function App() {
  return (
    <>
      <div className='grid grid-cols-4'>
        <RevenueCard title={"Amount Pending"} amount={"Rs 2312.23"} orderCount={"13"}/>
        
      </div>
      <Button buttonText={"Payouts (22)"} variant={"custom"} />
      <Button buttonText={"Refunds (6)"} />

    </>
  )
}

export default App
