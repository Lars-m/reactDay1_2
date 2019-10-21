import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Ex1';
import App2 from './Ex2'
import App3 from './Ex3';
import Hooks from './Hooks';
import StopWatch from "./StopWatch";
import Crud from "./crud/App";
import List1 from "./list/List1";
import List2 from "./list/List2";
import Form1 from "./forms/Form1";
import Form2 from "./forms/Form2";
import FormVideo from "./forms/FormVideo";

let app = <FormVideo/>

const DontUseMeForReal = () => {
    return (
        <div className="App">
         <a href="/" onClick={handleSelect} id="app1">ex1</a> &nbsp;
         <a href="/" onClick={handleSelect} id="app2">ex2</a> &nbsp;
         <a href="/" onClick={handleSelect} id="app3">ex3</a> &nbsp;
         <a href="/" onClick={handleSelect} id="hooks">Hooks</a> &nbsp;
         <a href="/" onClick={handleSelect} id="crud">Crud</a> &nbsp;
         <a href="/" onClick={handleSelect} id="list1">List-1</a> &nbsp;
         <a href="/" onClick={handleSelect} id="list2">List-2</a> &nbsp;
         <a href="/" onClick={handleSelect} id="list2">List-2</a> &nbsp;
         <a href="/" onClick={handleSelect} id="form1">Form-1</a> &nbsp;
         <a href="/" onClick={handleSelect} id="form2">Form-2</a> &nbsp;
         <a href="/" onClick={handleSelect} id="formVideo">FormVideo</a> &nbsp;
         {app}
        </div>
    )
}

function handleSelect(event) {
    event.preventDefault();
    const id = event.target.id;
    switch (id) {
        case "app2": app = <App2 />; break;
        case "app3": app = <App3/>; break;
        case "hooks": app = <Hooks/>; break;
        case "tilt": app = <StopWatch/>; break;
        case "crud": app = <Crud/>; break;
        case "list1": app = <List1/>; break;
        case "list2": app = <List2/>; break;
        case "form1": app = <Form1/>; break;
        case "form2": app = <Form2/>; break;
        case "formVideo": app = <FormVideo/>; break;

        default : app = <App/>
    }
    ReactDOM.render(<DontUseMeForReal />, document.getElementById('root'));
}

ReactDOM.render(<DontUseMeForReal />, document.getElementById('root'));