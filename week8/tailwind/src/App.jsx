function App() {
  return (
    <>
      {/* <Flex />
      <Grid />
      <Responsive /> */}
      <Problem />
    </>
  )
}


function Flex() {
  return (
// css
    <>
      <div style={{display : 'flex', justifyContent: 'space-between'}}>
        <div style={{backgroundColor: 'red'}}>1</div>
        <div style={{backgroundColor: 'yellow'}}>2</div>
        <div style={{backgroundColor: 'blue'}}>3</div>
      </div>
{/* tailwind */}
      <div className='flex justify-around'>
        <div className="bg-red-500">1</div>
        <div className="bg-yellow-500">2</div>
        <div className="bg-blue-500">3</div>
      </div>

    </>
  )
}


function Grid() {
  return (
    // tailwind
    <>
      <div className='grid grid-cols-12 gap-10 p-10 m-20'>
        <div className="bg-red-500 col-span-5">1</div>
        <div className="bg-yellow-500 col-span-2">2</div>
        <div className="bg-blue-500 col-span-5">3</div>
      </div>
    </>
  )
}


// Mobile first means - whatever your write without prefix is for mobile, if you want it for something else, use a prefix.

function Responsive() {
  return (
    <>
      <div className="bg-red-500 md:bg-blue-500">
        Hi There!
      </div>
    
    </>
  )
}


function Problem() {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-3">
        <div className="bg-red-500">1</div>
        <div className="bg-blue-500">2</div>
        <div className="bg-green-500">3</div>
      </div>
    </>
  )
}


export default App
