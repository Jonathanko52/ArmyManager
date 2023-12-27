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
        result.push(<li className="p-2">{keys} : {convertedObj[keys]} </li>)
        // result.push(<br></br>)
    }

    return (
        <div className="text-lg m-2 rounded font-bold border-black border-2">
            <ul>
                {result}
            </ul>
        </div>
      )
}

export default ArmySummary;
