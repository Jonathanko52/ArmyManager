import React, {useEffect} from 'react';
import ArmyRow from './ArmyRow'
// 
function DatabaseRight({databaseArmies,deleteArmy})
  //{faction:string, units: object, enhancements:object, pointcost: num, modelcount: num, id: number}

    useEffect(()=>{
      console.log(databaseArmies)
    },[])
    let armies = []
    if(databaseArmies){
      databaseArmies.forEach((cur)=>{
        let parsedArmy = JSON.parse(cur.armyString.S)
        console.log("FETCHED",parsedArmy)
        let armyName = parsedArmy.armyName
        let armyFaction = parsedArmy.faction
        let armyPoints = parsedArmy.armyPoints
        armies.push(<ArmyRow 
         armyName={armyName}
         armyfaction={armyFaction}
         armyPoints={armyPoints}
         buttonOne={deleteArmy}
         buttonOneText={"Delete Army"}
         buttonTwo={"Save To Database"}
         buttonTwoText={"Delete from Database"}


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