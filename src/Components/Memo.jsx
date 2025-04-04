import React, { useState, useMemo } from "react";

//Performance is an important aspect in programming, especially in large scale application.
//The useMemo hook is one tool that can be used to improve the performance of react app.

// useMemo is one of the additional hooks that react provides.
// What useMemo does is it memoize the return value of a function.
// This means that it executes the function that is passed to it and remembers its return value.
// When the application initially renders all the functions executes and on every re-render all the functions again executes.
// useMemo helps you to avoid the execution of functions on every render.
// useMemo only executes the function passed to it when certain condition is met.
// When specified conditions are not met useMemo return the previous value of that function and avoids executing the function.
// This can help you optimize your react application by avoiding expensive calculation every time component re-renders.

function Memo() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  //const thousendNumber = expensiveFunction(count)

  //without the useMemo(), count and name values will be memoized

  // with useMemo include the below 3 lines which will memoize only the count value
  const thousendNumber = useMemo(() => {
    return expensiveFunction(count);
  }, [count]);

  return (
    <div style={{ marginTop: 100 }}>
      <hr />
      <h3>useMemo Demo</h3>
      <input
        type="number"
        value={count}
        onChange={({ target: { value } }) => setCount(parseInt(value))}
        style={{ width: 200, marginLeft: 100 }}
      />
      <input
        type="text"
        value={name}
        onChange={({ target: { value } }) => setName(value)}
        style={{ width: 200, marginLeft: 100 }}
      />
      <div style={{ width: 200, marginLeft: 100 }}>{thousendNumber}</div>
      <hr />
    </div>
  );
}

function expensiveFunction(num) {
  console.log("Expensive Function");
  for (let i = 0; i < 1000000000; i++) {} // Expensive function
  return num * 2;
}

export default Memo;

// The React useMemo hook can be useful when you look
// for ways to improve performance of your React app.
// It can help you optimize expensive computations by memoizing
// output of these computations and avoiding needless executions.
