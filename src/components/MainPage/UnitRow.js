import React from 'react';

function UnitRow({unitName, modelCount, pointCost, unitSize}){
    return (
        <div className="font-bold underline border-black col-span-8 row-span-5 border-2 p-4">
          <label className="m-8 p-4" >Unit Name:{unitName}</label>
          <label className="m-8 p-4" >Size:{modelCount}</label>
          <label className="m-8 p-4" >Point Cost:{pointCost}</label>
          <label className="m-8 p-4" >Enhancements:{unitSize}</label>
          <button className="rounded-md p-1 m-1 bg-slate-50">Increase size</button>
          <button className="rounded-md p-1 m-1 bg-slate-50">Decrease Size</button>
        </div>
      )
}

export default UnitRow;