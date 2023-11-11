import UnitRow from './UnitRow.jsx'
import React, {useEffect} from 'react';

function ArmyColumn({
  columnName,
  units,
  buttonOne,
  buttonOneText,
  buttonTwo,
  buttonTwoText,
  remove,
  duplicate,
  dragUnit,
  dropUnit,
  moveReadyUnitDown
}){
  let unitsComponents = [];
  let totalArmyCost = 0;
  // useEffect(()=>{
    if(Array.isArray(units)){
    units.forEach(cur=>{
      unitsComponents.push(<UnitRow 
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
        duplicate={duplicate}
        dragUnit={dragUnit}
        dropUnit={dropUnit}
        columnName={columnName}
        moveReadyUnitDown={moveReadyUnitDown}
        />)
    })
    units.forEach(cur=>{
      totalArmyCost += cur.pointCost
    })
    }
  // },[army])

    return (
        <div className="border-white col-span-1"
          onDrop={(e)=>{dropUnit(e,columnName)}}
        >
          <div className="ARMYCOLUMN" >

            <div className="ARMYHEADER text-xl">
              <div className="p-4 ">
              <h1>{columnName}</h1><label>Total cost in points: {totalArmyCost}</label>
              </div>
            </div>
            <div className="UNITS CONTAINER">
              {unitsComponents}
            </div>
          </div>
        </div>
      )
}




export default ArmyColumn;