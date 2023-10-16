import React, {useEffect, useState} from 'react';
import UnitRow from './UnitRow.js'

function ArmyColumn({army, removeUnit}){
    //{faction:string, units: object, enhancements:object, pointcost: num, modelcount: num, id: number}

  let units = [];
  let totalArmyCost = 0;
    army.units.forEach(cur=>{
      units.push(<UnitRow 
        unitName={cur.unitName} 
        modelCount={cur.modelCount} 
        pointCost={cur.pointCost} 
        unitSize={cur.unitSize}
        unitId={cur.unitId}
        removeUnit={removeUnit}
        />)
    })
    army.units.forEach(cur=>{
      totalArmyCost += cur.pointCost
    })




    return (
        <div className="border-black col-span-10 row-span-6 border-2 grid grid-cols-3">
          <div className="ARMYCOLUMN col-span-1 border-black border-2">
            <div className="ARMYHEADER">
              <div className="p-4  border-black border-2">
                <label>Total cost in points:{totalArmyCost}</label>
              </div>
            </div>
            <div className="UNITS CONTAINER">
              {units}
            </div>
            <div className="p-4 col-span-2 row-span-5 border-black border-2">
              <button className = "rounded-md p-2 mt-2 bg-slate-50" type="submit" value="Add Unit" onClick={()=>{

              }}>Clear Army</button>
            </div>
          </div>

        </div>
      )
}

export default ArmyColumn;