import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";

//Components
// import BootstrapExample from './Components/BootstrapExample';
// import SampleComponent from './Components/FunctionalComponent';
// import ClassComponent from './Components/ClassComponent';
import UsingFetch from "./Components/Map";
// import LifeCycle from './Components/LifeCycle';
import ArrayObjects from "./Components/Objects";
//import List from "./Components/List";
import Events from "./Components/Events";
import ArrayFunctions from "./Components/ArrayFunctions";
import UserToggle from "./Components/MapJson";
//import Timer from './Components/SideEffects';
//import User from './Components/SideEffects';
import PersonList from "./Components/Axios";
import AxiosCRUD from "./Components/AxiosCrud";
import AwaitAsync from "./Components/AxiosAwaitAsync";
import AxiosDemo from "./Components/useAxios";
import ReactHooks from "./Components/ReactHooks";
import RenderProps from "./Components/RenderProps";
import AxiosHookCRUD from "./Components/useAxiosCrud";
import Rooks from "./Components/Rooks";
import SignDemo from "./Components/SignaturePad";
import Theme from "./Components/Theme";
import Sort from "./Components/Sort";
import TodosItems from "./Components/TodoHOC";
import RegistrationForm from "./Components/Registration";
import Callback from "./Components/Callback";
import Memo from "./Components/Memo";
import HookForm from "./Components/ReactHookForm";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* COMPONENTS */}

    {/* <BootstrapExample/>
    <SampleComponent name="John" designation="Developer"/>
    <ClassComponent/> */}
    {/* <LifeCycle/> */}

    {/* MAP FUNCTION */}

    {/* <UsingFetch/> */}
    {/* <ArrayObjects/> */}
    {/* <List/> */}
    {/* <ArrayFunctions/> */}
    {/* <Sort /> */}

    {/* useEffect Hook */}

    {/* <Timer/> */}
    {/* <User name="Side Effects"/> */}
    {/* MAP JSON */}

    {/* AXIOS  */}

    {/* <UserToggle /> */}
    {/* <PersonList/> */}
    {/* <AxiosCRUD /> */}
    {/* <AwaitAsync /> */}
    {/* <AxiosDemo />
    <AxiosHookCRUD/> */}

    {/* REACT HOOKS */}
    {/* <ReactHooks/> */}
    {/* <Theme />
    <Rooks /> */}
    {/* <Callback/> */}
    {/* <Memo/> */}

    {/* HIGHER ORDER COMPONENTS */}
    {/* <TodosItems/> */}

    {/* RENDER PROPS */}
    {/* <RenderProps/> */}

    {/* < SignDemo/> */}

    {/* FORMS */}
    <RegistrationForm/>
    <HookForm/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
