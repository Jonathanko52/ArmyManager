import React, {useEffect} from 'react';
import UnitRow from './UnitRow.js'

function MainRight({army}){
  //{faction:string, units: object, enhancements:object, pointcost: num, modelcount: num, id: number}
  console.log(army)
  let units = [];
  let totalArmyCost = 0;
  // useEffect(() =>{
    army.units.forEach(cur=>{
      units.push(<UnitRow unitName={cur.unitName} modelCount={cur.modelCount} pointCost={cur.pointCost} unitSize={cur.unitSize}/>)
    })
    army.units.forEach(cur=>{
      totalArmyCost += cur.pointCost
    })

  // },[army])



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
        </div>
      )
}

export default MainRight;