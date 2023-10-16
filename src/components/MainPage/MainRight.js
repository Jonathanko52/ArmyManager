import React, {useEffect, useState} from 'react';
import UnitRow from './UnitRow.js'
import ArmyColumns from './ArmyColumns.js'

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
        <div className="border-black col-span-10 border-2 grid grid-cols-3 grid-rows-5">
            <div className="ARMYHEADER grid grid-cols-4 col-span-3 row-span-6">
              <div className="p-4">
                <label>Army Name:</label><input type="text" onChange={handleChangeName}  value={armyName}></input>
              </div>
              <div className="p-4">
                <label>Faction:</label><input type="text"  onChange={handleChangeFaction} value={faction}></input>
              </div>
              <div className="p-4">
                <label>Total cost in points:{totalArmyCost}</label>
              </div>
              <div className="p-4">
                <label>Total cost in money:{totalArmyMoneyCost}</label>
              </div>
            </div>
            <div className="Army Columns grid grid-cols-3">
              <ArmyColumns army={army}/>
              <ArmyColumns army={army}/>
              <ArmyColumns army={army}/>
            </div>
            <div className="p-4 m-4 border-black border-2  grid grid-cols-4 col-span-3 row-span-6">
              <button className = "rounded-md p-2 m-2 bg-slate-50" type="submit" value="Add Unit" onClick={saveArmyToLocal}>Save Army</button>
              <button className = "rounded-md p-2 m-2 bg-slate-50" type="submit" value="Add Unit" onClick={loadArmyFromLocal}>Load Army</button>
              <button className = "rounded-md p-2 m-2 bg-slate-50" type="submit" value="Add Unit" onClick={()=>{
                clearCurrentArmy()
                setArmyName('')
                setFaction('')
              }}>Clear Army</button>
            </div>

        </div>
      )
}

export default MainRight;