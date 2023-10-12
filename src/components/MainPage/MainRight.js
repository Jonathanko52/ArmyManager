import React, {useEffect} from 'react';
import UnitRow from './UnitRow.js'

function MainRight({army, saveArmyToLocal, loadArmyFromLocal}){
  //{faction:string, units: object, enhancements:object, pointcost: num, modelcount: num, id: number}
  let units = [];
  let totalArmyCost = 0;
  // useEffect(() =>{
    army.units.forEach(cur=>{
      units.push(<UnitRow unitName={cur.unitName} modelCount={cur.modelCount} pointCost={cur.pointCost} unitSize={cur.unitSize}/>)
    })
    army.units.forEach(cur=>{
      console.log("ARMY COST",cur.pointCost, typeof cur.pointCost)
      totalArmyCost += cur.pointCost
    })

  // },[army])saveArmyToLocal, loadArmyFromLocal



    return (
        <div className="font-bold underline border-black col-span-8 row-span-5 border-2">
          <div className = "row-span-5 grid grid grid-cols-9">
            <div className="p-4 col-span-3 row-span-5 border-black border-2">
              <label>Army Name:</label>
            </div>
            <div className="p-4 col-span-3 row-span-5 border-black border-2">
              <label>Faction:</label>
            </div>
            <div className="p-4 col-span-3 row-span-5 border-black border-2">
              <label>Total cost:{totalArmyCost}</label>
            </div>
          </div>
          {units}
          <div>
          <button className = "rounded-md p-2 mt-2 bg-slate-50" type="submit" value="Add Unit" onClick={saveArmyToLocal}>Save Army</button>
          <button className = "rounded-md p-2 mt-2 bg-slate-50" type="submit" value="Add Unit" onClick={loadArmyFromLocal}>Load Army</button>
            </div>
        </div>
      )
}

export default MainRight;