import React, {useEffect} from 'react';
import UnitRow from './UnitRow.js'

function MainRight({army}){
  //{faction:string, units: object, enhancements:object, pointcost: num, modelcount: num, id: number}
  let units = [];
  // useEffect(() =>{
    army.units.forEach(cur=>{
      units.push(<UnitRow unitName={cur.unitName} modelCount={cur.modelCount} pointCost={cur.pointCost} unitSize={cur.unitSize}/>)
    })

  // },[])



    return (
        <div className="font-bold underline border-black col-span-8 row-span-5 border-2">
          <div className = "m-8 p-4">
            <label>Army Name:</label>
            <label>Faction:</label>
            <label>Total cost:</label>
          </div>
          {units}
        </div>
      )
}

export default MainRight;