import React, {useEffect, useState} from 'react';
import UnitRow from './UnitRow.js'

function MainRight({army, saveArmyToLocal, loadArmyFromLocal, clearCurrentArmy}){
    //{faction:string, units: object, enhancements:object, pointcost: num, modelcount: num, id: number}
    const [armyName, setArmyName] = useState('');
    const [faction, setFaction] = useState('');

    const handleChangeName = (event) =>{
      setArmyName(event.target.value)
    }
    const handleChangeFaction = (event) =>{
      setFaction(event.target.value)
    }    


  let units = [];
  let totalArmyCost = 0;
    army.units.forEach(cur=>{
      units.push(<UnitRow unitName={cur.unitName} modelCount={cur.modelCount} pointCost={cur.pointCost} unitSize={cur.unitSize}/>)
    })
    army.units.forEach(cur=>{
      totalArmyCost += cur.pointCost
    })




    return (
        <div className="font-bold underline border-black col-span-8 row-span-5 border-2">
          <div className = "row-span-5 grid grid grid-cols-9">
            <div className="p-4 col-span-3 row-span-5 border-black border-2">
              <label>Army Name:</label><input type="text" onChange={handleChangeName}  value={armyName}></input>
            </div>
            <div className="p-4 col-span-3 row-span-5 border-black border-2">
              <label>Faction:</label><input type="text"  onChange={handleChangeFaction} value={faction}></input>
            </div>
            <div className="p-4 col-span-3 row-span-5 border-black border-2">
              <label>Total cost:{totalArmyCost}</label>
            </div>
          </div>
          {units}
          <div>
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