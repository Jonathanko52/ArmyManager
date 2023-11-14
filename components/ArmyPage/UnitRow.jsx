import React from 'react';

function UnitRow({unitName, modelCount, pointCost, unitId, buttonOne,
  buttonOneText,
  buttonTwo,
  buttonTwoText,
  remove,
  duplicate,            
  dragUnit,
  dropUnit,
  columnName,
  buttonThree,
  buttonFour
}){
    return (
        <div 
          className="border-black col-span-8 row-span-5 border-2 p-4 m-4" 
          draggable="true"
          onDrag={(e)=>{dragUnit(e, unitId, columnName)}}
        >
          <label className="m-4 p-4 text-lg font-bold" >Unit Name: <label className="text-slate-50 font-normal">{unitName}</label></label><br></br>
          <label className="m-4 p-4 text-lg font-bold" >Model Count: <label className="text-slate-50 font-normal">{modelCount}</label></label><br></br>
          <label className="m-4 p-4 text-lg font-bold" >Point Cost: <label className="text-slate-50 font-normal">{pointCost}</label></label><br></br>
          <label className="m-4 p-4 text-lg font-bold" >Unit ID: <label className="text-slate-50 font-normal">{unitId}</label></label><br></br>

          <div className="p-4 ">
              <button className="rounded-md p-2 pl-4 pr-4 m-2 bg-slate-50 text-black font-bold" type="submit" value="Add Unit" 
              onClick={()=>{buttonOne(unitId)}}>{buttonOneText}</button>
              <button className="rounded-md p-2 pl-4 pr-4 m-2 bg-slate-50 text-black font-bold" type="submit" value="Add Unit" 
              onClick={()=>{buttonTwo(unitId)}}>{buttonTwoText}</button>
              <button className="rounded-md p-2 pl-4 pr-4 m-2 bg-slate-50 text-black font-bold" type="submit" value="Add Unit" 
              onClick={()=>{remove(unitId)}}>Remove</button>
              <button className="rounded-md p-2 pl-4 pr-4 m-2 bg-slate-50 text-black font-bold" type="submit" value="Add Unit" 
              onClick={()=>{duplicate(unitId)}}>Duplicate</button>
              <button className="rounded-md p-2 pl-4 pr-4 m-2 bg-slate-50 text-black font-bold" 
              onClick={()=>{buttonThree(unitId)}}>Move Up</button>
              <button className="rounded-md p-2 pl-4 pr-4 m-2 bg-slate-50 text-black font-bold" 
              onClick={()=>{buttonFour(unitId)}}>Move Down</button>
            </div>
        </div>
      )
}

export default UnitRow;
