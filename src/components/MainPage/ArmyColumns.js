import React, {useEffect, useState} from 'react';
import UnitRow from './UnitRow.js'

function ArmyColumn({
  columnName,
  army,
  buttonOne,
  buttonOneText,
  buttonTwo,
  buttonTwoText,
  remove
}){
    //{faction:string, units: object, enhancements:object, pointcost: num, modelcount: num, id: number}
  let units = [];
  let totalArmyCost = 0;
  // useEffect(()=>{
    army.forEach(cur=>{
      units.push(<UnitRow 
        unitName={cur.unitName} 
        modelCount={cur.modelCount} 
        pointCost={cur.pointCost} 
        unitSize={cur.unitSize}
        unitId={cur.unitId}
        buttonOne={buttonOne}
        buttonOneText={buttonOneText}
        buttonTwo={buttonTwo}
        buttonTwoText={buttonTwoText}
        remove={remove}
        />)
    })
    army.forEach(cur=>{
      totalArmyCost += cur.pointCost
    })
  // },[army])




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

          </div>

        </div>
      )
}




export default ArmyColumn;