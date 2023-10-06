import React from 'react';

function UnitRow(){

    return (
        <div className="font-bold underline border-black col-span-8 row-span-5 border-2">
          <label>Unit Name:</label>
          <label>Size:</label>
          <label>Point Cost:</label>
          <label>Enhancements:</label>
          <button>Increase size</button>
          <button>Decrease Size</button>
        </div>
      )
}

export default UnitRow;