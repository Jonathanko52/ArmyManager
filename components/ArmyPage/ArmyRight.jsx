import React, {useEffect} from 'react';
import ArmyColumns from './ArmyColumns.jsx'

function MainRight({
  unitsReady, 
  unitsStandby,
  unitsUnpainted,
  saveArmyToLocal, 
  loadArmyFromLocal, 
  clearCurrentArmy,
  changeArmyName,
  changeArmyFaction,
  readyToStandby,
  readyToUnpainted,
  standbyToReady,
  standbyToUnpainted,
  unpaintedToReady,
  unpaintedToStandy,
  removeUnitFromUnpainted,
  removeUnitFromStandby,
  removeUnitFromReady,
  duplicateUnitInReady,
  duplicateUnitInStandby,
  duplicateUnitInUnpainted,
  armyName,
  setArmyName,
  faction,
  setFaction,
  setArmyPoints,
  armyId,
  dragUnit,
  dropUnit,
  moveReadyUnitUp,
  moveReadyUnitDown,
  moveStandbyUnitUp,
  moveStandbyUnitDown,
  moveUnpaintedUnitUp,
  moveUnpaintedUnitDown
}){


  let totalArmyCost = 0;
  let totalArmyMoneyCost = 0;
  let totalArmyModelCount = 0;

  // useEffect(()=>{

    unitsReady.forEach((cur)=>{
      totalArmyCost += cur.pointCost
      totalArmyMoneyCost += 
      totalArmyModelCount += cur.modelCount
    })
    unitsStandby.forEach((cur)=>{
      totalArmyCost += cur.pointCost
      totalArmyMoneyCost += 
      totalArmyModelCount += cur.modelCount
    })
    unitsUnpainted.forEach((cur)=>{
      totalArmyCost += cur.pointCost
      totalArmyMoneyCost += 
      totalArmyModelCount += cur.modelCount
    })
    setArmyPoints(totalArmyCost)

  // },[])
    const handleChangeName = (event) =>{
      setArmyName(event.target.value)
      changeArmyName(armyName)       
    }
    const handleChangeFaction = (event) =>{
      setFaction(event.target.value)
      changeArmyFaction(faction)
    }    

    return (
        <div className="border-black col-span-10 border-2 grid grid-cols-3 grid-rows-5">
            <div className="ARMYHEADER grid grid-cols-4 col-span-3 row-span-6">
              <div className="p-4">
                <label className="p-4">Army Name:</label><input type="text" className="text-black m-2 pl-2" onChange={handleChangeName}  value={armyName}></input>
              </div>
              <div className="p-4">
                <label className="p-4">Faction:</label><input type="text" className="text-black m-2 pl-2" onChange={handleChangeFaction} value={faction}></input>
              </div>
              <div className="p-4">
                <label className="p-4">Total cost in points:  {totalArmyCost}</label>
              </div>
              <div className="p-4">
                <label className="p-4">Total cost in money:  {totalArmyMoneyCost}</label>
              </div>
              <div className="p-4">
                <label className="p-4">Army Id:  {armyId}</label>
              </div>


              armyId
            </div>
            <div className="ARMYCOLUMNS p-4 m-4 border-black border-2  grid grid-cols-3 col-span-3 row-span-6">
              <ArmyColumns
                columnName={"Ready"}
                units={unitsReady} 
                buttonOne={readyToStandby} 
                buttonOneText={"Move to Standby"}
                buttonTwo={readyToUnpainted}
                buttonTwoText={"Move to Unpainted"}
                remove={removeUnitFromReady}
                duplicate={duplicateUnitInReady}
                dragUnit={dragUnit}
                dropUnit={dropUnit}
                moveReadyUnitUp={moveReadyUnitUp}
                moveReadyUnitDown={moveReadyUnitDown}
                moveStandbyUnitUp={moveStandbyUnitUp}
                moveStandbyUnitDown={moveStandbyUnitDown}
                moveUnpaintedUnitUp={moveUnpaintedUnitUp}
                moveUnpaintedUnitDown={moveUnpaintedUnitDown}
              />
              <ArmyColumns
                columnName={"Standby"}
                units={unitsStandby} 
                buttonOne={standbyToReady} 
                buttonOneText={"Move to Ready"}
                buttonTwo={standbyToUnpainted}
                buttonTwoText={"Move to Unpainted"}
                remove={removeUnitFromStandby}
                duplicate={duplicateUnitInStandby}
                dragUnit={dragUnit}
                dropUnit={dropUnit}
                moveReadyUnitUp={moveReadyUnitUp}
                moveReadyUnitDown={moveReadyUnitDown}
                moveStandbyUnitUp={moveStandbyUnitUp}
                moveStandbyUnitDown={moveStandbyUnitDown}
                moveUnpaintedUnitUp={moveUnpaintedUnitUp}
                moveUnpaintedUnitDown={moveUnpaintedUnitDown}
              />
              <ArmyColumns
                columnName={"Unpainted/Unassembled"}
                units={unitsUnpainted} 
                buttonOne={unpaintedToReady} 
                buttonOneText={"Move to Ready"}
                buttonTwo={unpaintedToStandy}
                buttonTwoText={"Move to Standby"}
                remove={removeUnitFromUnpainted}
                duplicate={duplicateUnitInUnpainted}
                dragUnit={dragUnit}
                dropUnit={dropUnit}
                moveReadyUnitUp={moveReadyUnitUp}
                moveReadyUnitDown={moveReadyUnitDown}
                moveStandbyUnitUp={moveStandbyUnitUp}
                moveStandbyUnitDown={moveStandbyUnitDown}
                moveUnpaintedUnitUp={moveUnpaintedUnitUp}
                moveUnpaintedUnitDown={moveUnpaintedUnitDown}
              />
            </div>
            <div className="ARMYBUTTONS p-4 m-4 border-black border-2 grid grid-cols-4 col-span-3 row-span-6">
              <button className = "rounded-md p-2 m-2 bg-slate-50 text-black" type="submit" value="Add Unit" onClick={saveArmyToLocal}>Save Army</button>
              <button className = "rounded-md p-2 m-2 bg-slate-50 text-black" type="submit" value="Add Unit" onClick={loadArmyFromLocal}>Load Army</button>
              <button className = "rounded-md p-2 m-2 bg-slate-50 text-black" type="submit" value="Add Unit" onClick={clearCurrentArmy}>Clear Army</button>
            </div>
        </div>
      )
}

export default MainRight;