import React from 'react';
import DatabaseLeft from './DatabaseLeft.js';
import DatabaseRight from './DatabaseRight.js';



function Database({ army}){
    return (
        <div className="font-bold underline border-black col-span-10 grid grid-cols-12 border-2">
          <DatabaseLeft/>
          <DatabaseRight/>
        </div>
      )
}

export default Database;