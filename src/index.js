import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css";

//Components
import BootstrapExample from './Components/BootstrapExample';
import SampleComponent from './Components/FunctionalComponent';
import ClassComponent from './Components/ClassComponent';
import UsingFetch from './Components/Map';
import LifeCycle from './Components/LifeCycle';
import ArrayObjects from './Components/Objects';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <BootstrapExample/>
    <SampleComponent name="John" designation="Developer"/>
    <ClassComponent/> */}

    {/* <UsingFetch/> */}

    <LifeCycle/>

    {/* <ArrayObjects/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
