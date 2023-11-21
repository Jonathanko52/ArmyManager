import React from 'react';

function ArmyRow({armyName,armyfaction,armyPoints,
    buttonOne,
    buttonOneText,
    buttonOneParam,
    buttonTwo,
    buttonTwoText,
    buttonTwoParam,
}){
    return (
        <div className="border-black col-span-8 row-span-5 border-2 m-4 p-2">
          <label className="m-4 p-4 text-lg font-bold" >Army Name: <label className="text-slate-50 font-normal">{armyName}</label></label><br></br>
          <label className="m-4 p-4 text-lg font-bold" >Faction: <label className="text-slate-50 font-normal">{armyfaction}</label></label><br></br>
          <label className="m-4 p-4 text-lg font-bold" >Points: <label className="text-slate-50 font-normal">{armyPoints}</label></label><br></br>
          <div className="p-4 ">
              {buttonOne? <button className="rounded-md p-2 pl-4 pr-4 m-2 bg-slate-50 hover:bg-slate-200 text-black font-bold" type="submit" value="Add Unit" 
              onClick={()=>{buttonOne(buttonOneParam)}}>{buttonOneText}</button>: null}
              {buttonTwo ?  <button className="rounded-md p-2 pl-4 pr-4 m-2 bg-slate-50 hover:bg-slate-200 text-black font-bold" type="submit" value="Add Unit" 
              onClick={()=>{buttonTwo(buttonTwoParam)}}>{buttonTwoText}</button> : null}
          </div>
        </div>
      )
}

export default ArmyRow;