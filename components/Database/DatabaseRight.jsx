import React, {useEffect} from 'react';
import ArmyRow from './ArmyRow'
// 
function DatabaseRight({databaseArmies,deleteArmy,setDatabaseArmyToAppArmy}){

    useEffect(()=>{
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
         armyName={armyName}
         armyfaction={armyFaction}
         armyPoints={armyPoints}
         buttonOne={deleteArmy}
         buttonOneText={"Delete Army"}
         buttonOneParam={armyName}
         buttonTwo={setDatabaseArmyToAppArmy}
         buttonTwoText={"Load Army"}
         buttonTwoParam={ind}
        />)
      })
    }

    return (
        <div className="font-bold border-black border-l-2 col-span-8 row-span-5">
          {armies}
        </div>
      )
}

export default DatabaseRight;