import React, {useEffect} from 'react';
import ArmyRow from './ArmyRow'
// 
function DatabaseRight({databaseArmies}){
  //{faction:string, units: object, enhancements:object, pointcost: num, modelcount: num, id: number}

    useEffect(()=>{
      console.log(databaseArmies)
    },[])
    let armies = []
    if(databaseArmies){
      databaseArmies.forEach((cur)=>{
        console.log("DATABASE CURRENt", JSON.parse(cur.armyString.S))
        let parsedArmy = JSON.parse(cur.armyString.S)
        let armyName = parsedArmy.armyName
        let armyFaction = parsedArmy.faction
        let armyPoints = parsedArmy.armyPoints
        armies.push(<ArmyRow 
          armyName={armyName}
          armyfaction={armyFaction}
         armyPoints={armyPoints}
        />)
      })
    }

    return (
        <div className="font-bold underline border-black col-span-8 row-span-5 border-2">
          {armies}
        </div>
      )
}

export default DatabaseRight;