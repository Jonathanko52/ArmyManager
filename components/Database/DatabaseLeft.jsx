import React, { useContext }from 'react';
import ArmyRow from './ArmyRow'
import ArmyContext from '../../context/ArmyContext'

function DatabaseLeft({
  addArmy,
  createTable,
  retrieveArmy,
  updateArmy,
  logCurrentState
}){

  const { value, setValue } = useContext(ArmyContext)

  let armyName = value.armyName
  let armyFaction = value.faction
  let armyPoints = value.armyPoints

    return (
        <div className="p-2 m-2 border-black col-span-4 row-span-5 border-1">
        <h1>Current Army</h1>
        <ArmyRow
          armyName={armyName}
          armyfaction={armyFaction}
          armyPoints={armyPoints}
          buttonOne={addArmy}
          buttonOneText={"Save To Database"}
        />
          <button className = "rounded-md p-2 m-2 bg-slate-50 text-black" type="submit" value="Add Unit" onClick={()=>{addArmy()}}>Add Army to Database</button>
          <button className = "rounded-md p-2 m-2 bg-slate-50 text-black" type="submit" value="Add Unit" onClick={()=>{createTable()}}>Create Table</button>
          <button className = "rounded-md p-2 m-2 bg-slate-50 text-black" type="submit" value="Add Unit" onClick={()=>{retrieveArmy()}}>Retrieve Army</button>
          <button className = "rounded-md p-2 m-2 bg-slate-50 text-black" type="submit" value="Add Unit" onClick={()=>{updateArmy()}}>Update Army</button>
          <button className = "rounded-md p-2 m-2 bg-slate-50 text-black" type="submit" value="Add Unit" onClick={()=>{logCurrentState()}}>Log State</button>
        </div>
      )
}

export default DatabaseLeft;