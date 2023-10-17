import React, {useEffect, useState} from 'react';
import UnitRow from './UnitRow.js'

function ArmyColumn({
  columnName,
  army,
  buttonOne,
  buttonOneText,
  buttonTwo,
  buttonTwoText,
}){
    //{faction:string, units: object, enhancements:object, pointcost: num, modelcount: num, id: number}

  let units = [];
  let totalArmyCost = 0;
  useEffect(()=>{
    army.units.forEach(cur=>{
      units.push(<UnitRow 
        unitName={cur.unitName} 
        modelCount={cur.modelCount} 
        pointCost={cur.pointCost} 
        unitSize={cur.unitSize}
        unitId={cur.unitId}
        removeUnit={removeUnit}
        readyToStandby={readyToStandby}
        />)
    })
    army.units.forEach(cur=>{
      totalArmyCost += cur.pointCost
    })
  },[army])




    return (
        <div className="border-white col-span-1">
          <div className="ARMYCOLUMN">
            <div className="ARMYHEADER">
              <div className="p-4 ">
              <h3>{columnName}</h3><label>Total cost in points:{totalArmyCost}</label>
              </div>
            </div>
            <div className="UNITS CONTAINER">
              {units}
            </div>
            <div className="p-4 ">
              <button className="rounded-md p-2 mt-2 bg-slate-50" type="submit" value="Add Unit" 
              onClick={buttonOne}>{buttonOneText}</button>
              <button className="rounded-md p-2 mt-2 bg-slate-50" type="submit" value="Add Unit" 
              onClick={buttonTwo}>{buttonTwoText}</button>
            </div>
          </div>

        </div>
      )
}




export default ArmyColumn;