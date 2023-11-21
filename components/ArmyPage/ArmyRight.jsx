import React,{useEffect} from 'react';
import ArmyColumns from './ArmyColumns.jsx'

function ArmyRight({
  unitsReady, 
  unitsStandby,
  unitsUnpainted,
  saveArmyToLocal, 
  loadArmyFromLocal, 
  clearCurrentArmy,
  changeArmyName,
  changeArmyFaction,
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
  moveUnpaintedUnitDown,
  logState,
  armyPoints
}){

  let totalArmyCost = 0;

  useEffect(()=>{

    unitsReady.forEach((cur)=>{
      totalArmyCost += cur.pointCost

    })
    unitsStandby.forEach((cur)=>{
      totalArmyCost += cur.pointCost
    })
    unitsUnpainted.forEach((cur)=>{
      totalArmyCost += cur.pointCost
    })
    setArmyPoints(totalArmyCost)

    return ()=>{
      // saveArmyToLocal()
      //as of right now, data isn't saved. deletes it, actually. theory is that army data is lost, then the save is run. whoops
    }

  },[unitsReady,unitsStandby,unitsUnpainted])

    const handleChangeName = (event) =>{
      setArmyName(event.target.value)
      changeArmyName(armyName)       
    }

    const handleChangeFaction = (event) =>{
      setFaction(event.target.value)
      changeArmyFaction(faction)
    }    

    return (
        <div className="border-black col-span-10 border-l-2 grid grid-cols-3 grid-rows-5">
            <div className="ARMYHEADER grid grid-cols-5 col-span-3 row-span-6">
              <div className="p-4">
                <h1 className="text-xl font-bold p-2">Army Name: </h1><input type="text" className="text-black m-2 pl-2" onChange={handleChangeName}  value={armyName}></input>
              </div>
              <div className="p-4">
                <h1 className="text-xl font-bold p-2">Faction: </h1><input type="text" className="text-black m-2 pl-2" onChange={handleChangeFaction} value={faction}></input>
              </div>
              <div className="p-4">
                <h1 className="text-xl font-bold p-2">Total cost in points:  <label className="text-slate-50 font-normal">{armyPoints}</label></h1>
              </div>
              <div className="p-4">
                <h1 className="text-xl font-bold p-2">Army Id: <label className="text-slate-50 font-normal">{armyId}</label></h1>
              </div>
              <div className="p-4">
                <button className = "rounded-md p-2 m-2 bg-slate-50 hover:bg-slate-200 text-black font-bold" type="submit" value="Add Unit" onClick={logState}>Log State</button>        
              </div>
            </div>
            <div className="ARMYCOLUMNS p-4 m-4 border-black border-2  grid grid-cols-3 col-span-3 row-span-6">
              <ArmyColumns
                columnName={"Ready"}
                units={unitsReady} 
                dragUnit={dragUnit}
                dropUnit={dropUnit}
                buttonOne={removeUnitFromReady}
                buttonOneText={"Remove"}
                buttonTwo={duplicateUnitInReady}
                buttonTwoText={"Duplicate Unit"}
                buttonThree={moveReadyUnitUp}
                buttonThreeText={"Move Up"}
                buttonFour={moveReadyUnitDown}
                buttonFourText={"Move Down"}

              />
              <ArmyColumns
                columnName={"Standby"}
                units={unitsStandby} 
                dragUnit={dragUnit}
                dropUnit={dropUnit}
                buttonOne={removeUnitFromStandby}
                buttonOneText={"Remove"}
                buttonTwo={duplicateUnitInStandby}
                buttonTwoText={"Duplicate Unit"}
                buttonThree={moveStandbyUnitUp}
                buttonThreeText={"Move Up"}
                buttonFour={moveStandbyUnitDown}
                buttonFourText={"Move Down"}
              />
              <ArmyColumns
                columnName={"Unpainted/Unassembled"}
                units={unitsUnpainted} 
                dragUnit={dragUnit}
                dropUnit={dropUnit}
                buttonOne={removeUnitFromUnpainted}
                buttonOneText={"Remove"}
                buttonTwo={duplicateUnitInUnpainted}
                buttonTwoText={"Duplicate Unit"}
                buttonThree={moveUnpaintedUnitUp}
                buttonThreeText={"Move Up"}
                buttonFour={moveUnpaintedUnitDown}
                buttonFourText={"Move Down"}
              />
            </div>
            <div className="ARMYBUTTONS p-4 m-4 border-black border-2 grid grid-cols-4 col-span-3 row-span-6">
              <button className = "rounded-md p-2 m-2 bg-slate-50 hover:bg-slate-200 text-black font-bold" type="submit" value="Add Unit" onClick={saveArmyToLocal}>Save Army</button>
              <button className = "rounded-md p-2 m-2 bg-slate-50 hover:bg-slate-200 text-black font-bold" type="submit" value="Add Unit" onClick={loadArmyFromLocal}>Load Army</button>
              <button className = "rounded-md p-2 m-2 bg-slate-50 hover:bg-slate-200 text-black font-bold" type="submit" value="Add Unit" onClick={clearCurrentArmy}>Clear Army</button>
            </div>
        </div>
      )
}

export default ArmyRight;