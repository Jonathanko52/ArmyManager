import React, {useEffect, useState} from 'react';
import UnitRow from './UnitRow.js'

function MainRight({
  army, 
  saveArmyToLocal, 
  loadArmyFromLocal, 
  clearCurrentArmy,
  changeArmyName,
  changeArmyFaction,
  removeUnit,
}){
    //{faction:string, units: object, enhancements:object, pointcost: num, modelcount: num, id: number}

    const [armyName, setArmyName] = useState('');
    const [faction, setFaction] = useState('');

    const handleChangeName = (event) =>{
      setArmyName(event.target.value)
      changeArmyName(armyName)       
    }
    const handleChangeFaction = (event) =>{
      setFaction(event.target.value)
      changeArmyFaction(faction)
    }    

  let units = [];
  let totalArmyCost = 0;
  let totalArmyMoneyCost = 0;
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
      totalArmyMoneyCost += cur.moneyCost
    })




    return (
        <div className="border-black col-span-10 row-span-6 border-2 grid grid-cols-3	">
          <div className="ARMY HEADER">
            <div className="p-4 col-span-2 row-span-6 border-black border-2">
              <label>Army Name:</label><input type="text" onChange={handleChangeName}  value={armyName}></input>
            </div>
            <div className="p-4 col-span-2 row-span-6 border-black border-2">
              <label>Faction:</label><input type="text"  onChange={handleChangeFaction} value={faction}></input>
            </div>
            <div className="p-4 col-span-2 row-span-6 border-black border-2">
              <label>Total cost in points:{totalArmyCost}</label>
            </div>
            <div className="p-4 col-span-2 row-span-6 border-black border-2">
              <label>Total cost in money:{totalArmyMoneyCost}</label>
            </div>
          </div>

          {units}
          <div className="p-4 col-span-2 row-span-5 border-black border-2">
            <button className = "rounded-md p-2 mt-2 bg-slate-50" type="submit" value="Add Unit" onClick={saveArmyToLocal}>Save Army</button>
            <button className = "rounded-md p-2 mt-2 bg-slate-50" type="submit" value="Add Unit" onClick={loadArmyFromLocal}>Load Army</button>
            <button className = "rounded-md p-2 mt-2 bg-slate-50" type="submit" value="Add Unit" onClick={()=>{
              clearCurrentArmy()
              setArmyName('')
              setFaction('')
            }}>Clear Army</button>
          </div>
        </div>
      )
}

export default MainRight;