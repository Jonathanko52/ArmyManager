import React from 'react';
import UnitRow from './UnitRow.js'

function MainRight(){

    return (
        <div className="font-bold underline border-black col-span-8 row-span-5 border-2">
        <div>
          <label>Army Name:</label>
          <label>Faction:</label>
          <label>Total cost:</label>


        </div>
          MainRight
          <UnitRow/>
          <UnitRow/>
          <UnitRow/>
          <UnitRow/>
        </div>
      )
}

export default MainRight;