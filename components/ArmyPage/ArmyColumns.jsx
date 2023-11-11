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
  moveReadyUnitUp,
  moveReadyUnitDown,
  moveStandbyUnitUp,
  moveStandbyUnitDown,
  moveUnpaintedUnitUp,
  moveUnpaintedUnitDown
}){
  let unitsComponents = [];
  let totalArmyCost = 0;
  // useEffect(()=>{
    if(Array.isArray(units)){
      let buttonThreeFunction
      let buttonFourFunction
      if(columnName === "Ready"){
        buttonThreeFunction = moveReadyUnitUp
        buttonFourFunction = moveReadyUnitDown
      } else if(columnName === "Standby"){
        buttonThreeFunction = moveStandbyUnitUp
        buttonFourFunction = moveStandbyUnitDown
      } if(columnName === "Unpainted/Unassembled"){
        buttonThreeFunction = moveUnpaintedUnitUp
        buttonFourFunction = moveUnpaintedUnitDown
      }

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
        buttonThree={buttonThreeFunction}
        buttonFour={buttonFourFunction}
        remove={remove}
        duplicate={duplicate}
        dragUnit={dragUnit}
        dropUnit={dropUnit}
        columnName={columnName}
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