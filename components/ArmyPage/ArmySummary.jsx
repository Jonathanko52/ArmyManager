import React from 'react';

function ArmySummary({armyReady}){
    let result = []
    let convertedObj = armyReady.units.reduce((acc,cur)=>{
        if(!acc[cur.unitName]){
            acc[cur.unitName] = 1
        } else {
            acc[cur.unitName]++
        }
        return acc
    },{})

    for(let keys in convertedObj){
        result.push(<li>{keys} : {convertedObj[keys]} </li>)
        result.push(<br></br>)
    }

    return (
        <div className="border-black col-span-8 row-span-2 border-2 p-2 m-2 rounded-md grid grid-cols-4">
            <ul>
                {result}
            </ul>
        </div>
      )
}

export default ArmySummary;
