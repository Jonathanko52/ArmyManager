import React from 'react';

      //   {
      //     armyString: {
      //       S: `{"armyName":"Black Templars","faction":"Black Templars","armyReady":{"units":[],"armyName":"Black Templar","faction":"Black Templar"},"armyStandby":{"units":[{"unitName":"Crusader Squad","modelCount":10,"pointCost":140,"unitSize":0,"moneyCost":0,"unitId":942},{"unitName":"Castellan","modelCount":1,"pointCost":65,"unitSize":0,"moneyCost":0,"unitId":467},{"unitName":"Emperor's Champion","modelCount":1,"pointCost":75,"unitSize":0,"moneyCost":0,"unitId":386}]},"armyUnpainted":{"units":[{"unitName":"Crusader Squad","modelCount":10,"pointCost":140,"unitSize":0,"moneyCost":0,"unitId":982}]}}`
      //     },
      //     armyName: { S: 'Black Templars' },
      //     armyFaction: { S: 'Black Templars' }
      //   }



function ArmyRow({armyName,armyfaction,armyPoints,
    buttonOne,
    buttonOneText,
    buttonTwo,
    buttonTwoText,
    number,
    key
}){
    console.log(key, number, armyName)
    return (
        <div className="font-bold underline border-black col-span-8 row-span-5 border-2 p-4">
          <label className="m-4 p-4" >Army Name: {armyName}</label><br></br>
          <label className="m-4 p-4" >Faction: {armyfaction}</label><br></br>
          <label className="m-4 p-4" >Points: {armyPoints}</label><br></br>

          <div className="p-4 ">
              {buttonOne? <button className="rounded-md p-2 m-2 bg-slate-50 text-black" type="submit" value="Add Unit" 
              onClick={()=>{buttonOne}}>{buttonOneText}</button>: null}
              {buttonTwo ?  <button className="rounded-md p-2 m-2 bg-slate-50 text-black" type="submit" value="Add Unit" 
              onClick={()=>{buttonTwo(number)}}>{buttonTwoText}</button> : null}

          </div>
        </div>
      )
}

export default ArmyRow;