import React from 'react';

function UnitRow({unitName, modelCount, pointCost, unitId, buttonOne,
  buttonOneText,
  buttonTwo,
  buttonTwoText,
  remove,
  duplicate
}){
    return (
        <div className="font-bold underline border-black col-span-8 row-span-5 border-2 p-4">
          <label className="m-4 p-4" >Unit Name: {unitName}</label><br></br>
          <label className="m-4 p-4" >Model Count: {modelCount}</label><br></br>
          <label className="m-4 p-4" >Point Cost: {pointCost}</label><br></br>
          <label className="m-4 p-4" >Unit ID: {unitId}</label><br></br>
          {/* <button className="rounded-md p-1 m-1 bg-slate-50 text-black">Increase size</button>
          <button className="rounded-md p-1 m-1 bg-slate-50 text-black">Decrease Size</button> */}
          <div className="p-4 ">
              <button className="rounded-md p-2 m-2 bg-slate-50 text-black" type="submit" value="Add Unit" 
              onClick={()=>{buttonOne(unitId)}}>{buttonOneText}</button>
              <button className="rounded-md p-2 m-2 bg-slate-50 text-black" type="submit" value="Add Unit" 
              onClick={()=>{buttonTwo(unitId)}}>{buttonTwoText}</button>
              <button className="rounded-md p-2 m-2 bg-slate-50 text-black" type="submit" value="Add Unit" 
              onClick={()=>{remove(unitId)}}>Remove</button>
              <button className="rounded-md p-2 m-2 bg-slate-50 text-black" type="submit" value="Add Unit" 
              onClick={()=>{duplicate(unitId)}}>Duplicate</button>
            </div>
        </div>
      )
}

export default UnitRow;
