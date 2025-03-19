import { useState, useEffect } from "react";

//1. Use setTimeout() to count 1 second after initial render:

//2. Only run the effect on the initial render: add []
// function Timer() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     setTimeout(() => {
//         console.log(count);
//       setCount((count) => count + 1);
//       console.log(count);
//     }, 1000);
//   },[]);

//   return <h1>I've rendered {count} times!</h1>;
// }

// function User({ name }) {
//     useEffect(() => {
//       document.title = name;
//     }, [name]);
  
//     return <h1>{name}</h1>;   
//   }
  

//3. Here is an example of a useEffect Hook that is dependent on a variable. 
// If the count variable updates, the effect will run again:
// function Timer() {
//     const [count, setCount] = useState(0);
//     const [calculation, setCalculation] = useState(0);
  
//     useEffect(() => {
//       setCalculation(() => count * 2);
//     }, [count]); // <- add the count variable here // 1
  
//     return (
//       <>
//         <p>Count: {count}</p>
//         <button onClick={() => setCount((c) => c + 1)}>+</button>
//         <p>Calculation: {calculation}</p>
//       </>
//     );
//   }

// 4. Effect Cleanup
// Some effects require cleanup to reduce memory leaks.

// Timeouts, subscriptions, event listeners, and other effects that are no longer needed should be disposed.

// We do this by including a return function at the end of the useEffect Hook.
function Timer() {
    const [count, setCount] = useState(0);
  
    useEffect(() => {
      let timer = setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  
    return () => clearTimeout(timer)
    },[]);
  
    return <h1>I've rendered {count} times!</h1>;
  
}
export default Timer;