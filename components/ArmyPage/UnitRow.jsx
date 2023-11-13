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
          className="border-black col-span-8 row-span-5 border-2 p-4 " 
          draggable="true"
          onDrag={(e)=>{dragUnit(e, unitId, columnName)}}
        >
          <label className="m-4 p-4 text-lg " >Unit Name: <label className="text-slate-50">{unitName}</label></label><br></br>
          <label className="m-4 p-4 text-lg" >Model Count: <label className="text-slate-50">{modelCount}</label></label><br></br>
          <label className="m-4 p-4 text-lg" >Point Cost: <label className="text-slate-50">{pointCost}</label></label><br></br>
          <label className="m-4 p-4 text-lg" >Unit ID: <label className="text-slate-50">{unitId}</label></label><br></br>

          <div className="p-4 ">
              <button className="rounded-md p-2 m-2 bg-slate-50 text-black" type="submit" value="Add Unit" 
              onClick={()=>{buttonOne(unitId)}}>{buttonOneText}</button>
              <button className="rounded-md p-2 m-2 bg-slate-50 text-black" type="submit" value="Add Unit" 
              onClick={()=>{buttonTwo(unitId)}}>{buttonTwoText}</button>
              <button className="rounded-md p-2 m-2 bg-slate-50 text-black" type="submit" value="Add Unit" 
              onClick={()=>{remove(unitId)}}>Remove</button>
              <button className="rounded-md p-2 m-2 bg-slate-50 text-black" type="submit" value="Add Unit" 
              onClick={()=>{duplicate(unitId)}}>Duplicate</button>
              <button className="rounded-md p-1 m-1 bg-slate-50 text-black" 
              onClick={()=>{buttonThree(unitId)}}>Move Up</button>
              <button className="rounded-md p-1 m-1 bg-slate-50 text-black" 
              onClick={()=>{buttonFour(unitId)}}>Move Down</button>
            </div>
        </div>
      )
}

export default UnitRow;
