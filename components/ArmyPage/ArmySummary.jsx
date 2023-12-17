import React from 'react';

function ArmySummary({armyReady}){
    console.log(armyReady)
    let result = []
    let convertedObj = armyReady.units.reduce()
    armyReady.units.forEach((cur,ind)=>{
        console.log(cur.unitName)
        result.push(<li>{cur.unitName}</li>)
    })



    return (
        <div className="border-black col-span-8 row-span-2 border-2 p-4 m-4 rounded-md grid grid-cols-4">
            <ul>
                {result}
            </ul>
        </div>
      )
}

export default ArmySummary;
