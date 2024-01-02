import React from 'react';

function UnitRow({
  unitName, 
  modelCount, 
  pointCost, 
  unitId, 
  buttonOne,
  buttonOneText,
  buttonTwo,
  buttonTwoText,
  buttonThree,
  buttonThreeText,
  buttonFour,
  buttonFourText, 
  dragUnit,
  columnName,
}){
    return (
        <div 
          className="border-black border-2 col-span-8 row-span-2p-4 m-4 rounded-md grid grid-cols-4" 
          draggable="true"
          onDrag={(e)=>{dragUnit(e, unitId, columnName)}}
        >
          <div className="col-span-3">
          <label className="m-2 p-4 text-lg font-normal" >Unit Name: <label className="text-slate-50  font-bold">{unitName}</label></label><br></br>
          <label className="m-2 p-4 text-lg font-normal" >Model Count: <label className="text-slate-50 font-bold">{modelCount}</label></label><br></br>
          <label className="m-2 p-4 text-lg font-normal" >Point Cost: <label className="text-slate-50 font-bold">{pointCost}</label></label><br></br>
          </div>
          <div className="col-span-1">
              {buttonThree ? <button className=" rounded-md p-2 m-2 bg-slate-50 hover:bg-slate-200 text-black font-bold w-half" type="submit" value="Add Unit" 
              onClick={()=>{buttonThree(unitId)}}>{buttonThreeText}</button> : null}
              {buttonFour ? <button className=" rounded-md p-2 m-2 bg-slate-50 hover:bg-slate-200 text-black font-bold w-half" type="submit" value="Add Unit" 
              onClick={()=>{buttonFour(unitId)}}>{buttonFourText}</button> : null}
          </div>
          <div className="col-span-4">
              {buttonOne ? <button className=" rounded-md p-2 pl-4 pr-4 m-2 bg-slate-50 hover:bg-slate-200 text-black font-bold w-half" type="submit" value="Add Unit" 
              onClick={()=>{buttonOne(unitId)}}>{buttonOneText}</button> : null}
              {buttonTwo ? <button className=" rounded-md p-2 pl-4 pr-4 m-2 bg-slate-50 hover:bg-slate-200 text-black font-bold w-half" type="submit" value="Add Unit" 
              onClick={()=>{buttonTwo(unitId)}}>{buttonTwoText}</button> : null}
            </div>
        </div>
      )
}

export default UnitRow;
