import React from "react";
//npm install --save rooks
import { useOnline, usePreviousImmediate ,useToggle} from "rooks";
//import { useFocus } from "rooks";
import { useState, useEffect } from "react"

export default function Rooks() {
  const online = useOnline();
  console.log("I'm online");

  return (
    <div>
      <h4 style={{marginTop:"100px"}}>Rooks: useOnline example</h4>
      <hr></hr>
      <div style={{ backgroundColor: "lightblue" }}>
        Status:You are {online ? "Online" : "Offline"}
      </div>
      <hr>
      </hr>
      <Example />
      <Example1 />
      <Example2 />
    </div>
  );
}

function Example() {
  const [value, setValue] = useState(0);
  const lastValue = usePreviousImmediate(value);

  return (
    <div className="App">
      <h4>Rooks : usePrevious Example</h4>
      <p>
        Current: {value} - Previous: {lastValue}
      </p>
      <button onClick={() => setValue(value + 1)}>Increment</button>
    </div>
  );
}

function Example1() {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

function Example2() {
  const [state, setState] = useToggle();
  function toggle() {
    setState(!state);
  }
  return (
    <div className="App">
      <br></br>
      <h2 onClick={toggle}>
        <p style={{color:'azure'}}>Do you feel good today?</p>
        <div style={{ cursor: "pointer" }}>
          {state ? <span style={{color:'azure'}}>Yes! 👍</span> : <span style={{color:'azure'}}>No! 👎</span>}
        </div>
      </h2>
    </div>
  );
}