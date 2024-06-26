import { useState, useEffect } from 'react'
import React from 'react';
import './App.css'
import { useIsOnline } from './hooks/useIsOnline';
import { useCountdown } from './hooks/useCountdown';

function App() {

  const [render, setRender] = useState(true);

  const isOnline = useIsOnline();
  console.log("User is online -> ", isOnline);

  let countdown = useCountdown(20);

  useEffect(() => {
    setInterval(() => {
      setRender(r => !r);
    }, 5000)
  }, []);


  return (
    <>
      {render ? <MyComponent></MyComponent> : <div> </div>}
      {"Time remaining is -> "}
      {countdown}
    </>
  )
}



function MyComponent() {
  useEffect(() => {
    console.log("Component Mounted");

    return () => {
      console.log("Component UnMounted");
    }
  }, []);

  return (
    <div>
      From inside my component
    </div>
  )
}


/*

// ##### FUNCTIONAL TODO

function MyComponent() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  }

  return (
    <>
      <p>{count}</p>
      <button onClick={incrementCount}>Click Me!</button>
    </>
  )
}

*/


// ## CLASS BASED COMPONENTS

// class MyComponent extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { count : 0 };
//   }

//   componentDidMount() {
//     console.log("Mounted!")
//   }

//   componentWillUnmount() {
//     console.log("Unmounted!!!")
//   }

//   incrementCount = () => {
//     this.setState({ count: this.state.count + 1});
//   }

//   render() {
//     return (
//       <>
//         <p>{this.state.count}</p>
//         <button onClick={this.incrementCount}>Increment</button>
//       </>
//     )
//   }

// }


export default App
