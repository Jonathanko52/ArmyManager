import React from 'react';

function UnitRow({unitName, modelCount, pointCost, unitSize, unitId, buttonOne,
  buttonOneText,
  buttonTwo,
  buttonTwoText,
  remove
}){
    return (
        <div className="font-bold underline border-black col-span-8 row-span-5 border-2 p-4">
          <label className="m-8 p-4" >Unit Name:{unitName}</label>
          <label className="m-8 p-4" >Size:{modelCount}</label>
          <label className="m-8 p-4" >Point Cost:{pointCost}</label>
          <label className="m-8 p-4" >Enhancements:{unitSize}</label>
          <label className="m-8 p-4" >Unit ID:{unitId}</label>
          <button className="rounded-md p-1 m-1 bg-slate-50">Increase size</button>
          <button className="rounded-md p-1 m-1 bg-slate-50">Decrease Size</button>
          <div className="p-4 ">
              <button className="rounded-md p-2 mt-2 bg-slate-50" type="submit" value="Add Unit" 
              onClick={()=>{buttonOne(unitId)}}>{buttonOneText}</button>
              <button className="rounded-md p-2 mt-2 bg-slate-50" type="submit" value="Add Unit" 
              onClick={()=>{buttonTwo(unitId)}}>{buttonTwoText}</button>
              <button className="rounded-md p-2 mt-2 bg-slate-50" type="submit" value="Add Unit" 
              onClick={()=>{remove(unitId)}}>Remove</button>
            </div>
        </div>
      )
}

export default UnitRow;
