// 1) Import React and ReactDom Libraries
import React from 'react';
import ReactDom from 'react-dom/client';
import './index.css';


// 2) Get a refernce to the div with root

const el = document.getElementById('root');

// 3) Tell react to take control of that element

const root = ReactDom.createRoot(el);

// 4) Create a component

function App(){
    return (
        <h1 className="text-3xl font-bold underline">
          Hello world!
        </h1>
      )
}

// 5) Show the component on the screen

root.render(<App/>)