import React from 'react';

function UnitRow({unitName, modelCount, pointCost, unitId, 
  buttonOne,
  buttonOneText,
  buttonTwo,
  buttonTwoText,
  buttonThree,
  buttonThreeText,
  buttonFour,
  buttonFourText,
  remove,
  duplicate,            
  dragUnit,
  dropUnit,
  columnName,
}){
    return (
        <div 
          className="border-black col-span-8 row-span-5 border-2 p-4 m-4 rounded-md" 
          draggable="true"
          onDrag={(e)=>{dragUnit(e, unitId, columnName)}}
        >
          <label className="m-4 p-4 text-lg font-bold" >Unit Name: <label className="text-slate-50 font-normal">{unitName}</label></label><br></br>
          <label className="m-4 p-4 text-lg font-bold" >Model Count: <label className="text-slate-50 font-normal">{modelCount}</label></label><br></br>
          <label className="m-4 p-4 text-lg font-bold" >Point Cost: <label className="text-slate-50 font-normal">{pointCost}</label></label><br></br>
          <label className="m-4 p-4 text-lg font-bold" >Unit ID: <label className="text-slate-50 font-normal">{unitId}</label></label><br></br>

          <div className="p-4 ">
              {buttonOne ? <button className="rounded-md p-2 pl-4 pr-4 m-2 bg-slate-50 text-black font-bold" type="submit" value="Add Unit" 
              onClick={()=>{buttonOne(unitId)}}>{buttonOneText}</button> : null}
              {buttonTwo ? <button className="rounded-md p-2 pl-4 pr-4 m-2 bg-slate-50 text-black font-bold" type="submit" value="Add Unit" 
              onClick={()=>{buttonTwo(unitId)}}>{buttonTwoText}</button> : null}
              {buttonThree ? <button className="rounded-md p-2 pl-4 pr-4 m-2 bg-slate-50 text-black font-bold" type="submit" value="Add Unit" 
              onClick={()=>{buttonThree(unitId)}}>{buttonThreeText}</button> : null}
              {buttonFour ? <button className="rounded-md p-2 pl-4 pr-4 m-2 bg-slate-50 text-black font-bold" type="submit" value="Add Unit" 
              onClick={()=>{buttonFour(unitId)}}>{buttonFourText}</button> : null}
            </div>
        </div>
      )
}

export default UnitRow;
