import React from 'react';
import UnitRow from './UnitRow.js'

function MainRight(){
  //{faction:string, units: object, enhancements:object, pointcost: num, modelcount: num, id: number}

    return (
        <div className="font-bold underline border-black col-span-8 row-span-5 border-2">
          <div className = "m-8 p-4">
            <label>Army Name:</label>
            <label>Faction:</label>
            <label>Total cost:</label>
          </div>
          <UnitRow/>
          <UnitRow/>
          <UnitRow/>
          <UnitRow/>
        </div>
      )
}

export default MainRight;