// 1) Import React and ReactDom Libraries
import React from 'react';


// 2) Get a refernce to the div with root


// 3) Tell react to take control of that element


// 4) Create a component

function navBar(){
    console.log("TEST")
    return (
        <div className="text-3xl font-bold underline border-black col-span-2">
          Navigations
        </div>
      )
}

export default navBar;