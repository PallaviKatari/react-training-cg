import React from "react";

function SampleComponent(props) {
    const name="Sam";
  return (
    <div>
      <h1>Sample Component</h1>
      <Counter/>
      <h2>Welcome !! {props.name} to our {props.designation} team</h2>
      <SampleComponent1 name={name}></SampleComponent1>
    </div>
  );
}

function SampleComponent1({name}) {
  return (
    <React.Fragment>
      <h1>Sample Component 1 : {name}</h1>
      <SampleComponent2 name={name}></SampleComponent2>
    </React.Fragment>
  );
}
function SampleComponent2(props) {
  return <h1>Sample Component 2 : {props.name}</h1>;
}

function Counter() {
    const [count, setCount] = React.useState(0);
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => 
                setCount(count + 1)}>Increment</button>
        </div>
    );
}

export default SampleComponent;
