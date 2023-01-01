// 1. Import the React and ReactDOM Libraries
import React from "react";
import ReactDOM from "react-dom/client";

// 2. Get a reference to the div with ID root
const el = document.getElementById('root');

// 3. Tell React to take control of that element
const root = ReactDOM.createRoot(el);

// 4. Create a component
function App() {
    let message = 'Bye There !';
    if (Math.random() > 0.5) {
        message = 'Hello There !';
    }

    const date = new Date();
    const time = date.toLocaleTimeString();

    // return <h1> {time} </h1>;
    // return <h1>{ new Date().toLocaleTimeString() }</h1>
    // const name = "Sahil";
    // const age = 25;
    // return (
    //     <h1>
    //         Hi, my name is {name} and my age is {age}!
    //     </h1>
    // );
    // return <input type="number" min={5} max={10}/>
    // const inputType = 'number';
    // const minValue = 5;
    //
    // return <input type={inputType} min={minValue}/>
    // return <input style={{ border: '3px solid red' }} type="number"/>
    return <textarea autoFocus={true} />
}

// 5. Show the component on the screen
root.render(<App />);