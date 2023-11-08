import React, {useEffect} from 'react';
import ArmyRow from './ArmyRow'
// 
function DatabaseRight({databaseArmies,deleteArmy,setDatabaseArmyToAppArmy}){
  //{faction:string, units: object, enhancements:object, pointcost: num, modelcount: num, id: number}

    useEffect(()=>{
      console.log("DATA",databaseArmies)
    },[])
    let armies = []
    if(databaseArmies){
      databaseArmies.forEach((cur,ind)=>{
        let parsedArmy = JSON.parse(cur.armyString.S)
        let armyName = parsedArmy.armyName
        let armyFaction = parsedArmy.faction
        let armyPoints = parsedArmy.armyPoints
        armies.push(<ArmyRow 
         key={ind}
         number={ind}
         armyName={armyName}
         armyfaction={armyFaction}
         armyPoints={armyPoints}
         buttonOne={deleteArmy}
         buttonOneText={"Delete Army"}
         buttonTwo={setDatabaseArmyToAppArmy}
         buttonTwoText={"Load Army"}
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