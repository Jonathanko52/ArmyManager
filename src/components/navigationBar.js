import React from 'react';
import { Link } from "react-router-dom";


function navBar({logState, dynamoTest}){
    return (
      <div className="font-bold underline border-black col-span-1 row-span-6	border-2">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/database">Database</Link>
            </li>
          </ul>
          <button onClick={logState}>LOG STATE</button>
          <button onClick={dynamoTest}>DYNAMOTEST</button>

        </nav>        
      </div>
      )
}

export default navBar;