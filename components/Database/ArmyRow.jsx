import React from 'react';

function ArmyRow({armyName,armyfaction,armyPoints,
    buttonOne,
    buttonOneText,
    buttonOneParam,
    buttonTwo,
    buttonTwoText,
    buttonTwoParam,
    number,
    key
}){
    console.log(key, number, armyName)
    return (
        <div className="border-black col-span-8 row-span-5 border-2 p-4">
          <label className="m-4 p-4" >Army Name: {armyName}</label><br></br>
          <label className="m-4 p-4" >Faction: {armyfaction}</label><br></br>
          <label className="m-4 p-4" >Points: {armyPoints}</label><br></br>

          <div className="p-4 ">
              {buttonOne? <button className="rounded-md p-2 m-2 bg-slate-50 text-black" type="submit" value="Add Unit" 
              onClick={()=>{buttonOne(buttonOneParam)}}>{buttonOneText}</button>: null}
              {buttonTwo ?  <button className="rounded-md p-2 m-2 bg-slate-50 text-black" type="submit" value="Add Unit" 
              onClick={()=>{buttonTwo(buttonTwoParam)}}>{buttonTwoText}</button> : null}

          </div>
        </div>
      )
}

export default ArmyRow;