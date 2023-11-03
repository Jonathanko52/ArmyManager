import React from 'react';

      //   {
      //     armyString: {
      //       S: `{"armyName":"Black Templars","faction":"Black Templars","armyReady":{"units":[],"armyName":"Black Templar","faction":"Black Templar"},"armyStandby":{"units":[{"unitName":"Crusader Squad","modelCount":10,"pointCost":140,"unitSize":0,"moneyCost":0,"unitId":942},{"unitName":"Castellan","modelCount":1,"pointCost":65,"unitSize":0,"moneyCost":0,"unitId":467},{"unitName":"Emperor's Champion","modelCount":1,"pointCost":75,"unitSize":0,"moneyCost":0,"unitId":386}]},"armyUnpainted":{"units":[{"unitName":"Crusader Squad","modelCount":10,"pointCost":140,"unitSize":0,"moneyCost":0,"unitId":982}]}}`
      //     },
      //     armyName: { S: 'Black Templars' },
      //     armyFaction: { S: 'Black Templars' }
      //   }



function UnitRow({
    unitName, 
    modelCount, 
    pointCost, 
    unitSize, 
    unitId, 
    buttonOne,
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
          {/* <label className="m-4 p-4" >Enhancements: {unitSize}</label><br></br> */}
          <label className="m-4 p-4" >Unit ID: {unitId}</label><br></br>
          <button className="rounded-md p-1 m-1 bg-slate-50 text-black">Increase size</button>
          <button className="rounded-md p-1 m-1 bg-slate-50 text-black">Decrease Size</button>
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