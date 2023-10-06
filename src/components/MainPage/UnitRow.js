import React from 'react';

function UnitRow(){

    return (
        <div className="font-bold underline border-black col-span-8 row-span-5 border-2">
          <label className="m-8 p-4" >Unit Name:</label>
          <label className="m-8 p-4" >Size:</label>
          <label className="m-8 p-4" >Point Cost:</label>
          <label className="m-8 p-4" >Enhancements:</label>
          <button className="rounded-md p-2 m-2 bg-slate-50">Increase size</button>
          <button className="rounded-md p-2 m-2 bg-slate-50">Decrease Size</button>
        </div>
      )
}

export default UnitRow;