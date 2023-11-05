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
        // <ArmyRow 
        //   armyName={cur.armyName.S}
        //   armyfaction={cur.armyFaction.S}
        //  armyPoints=={cur.armyPoints.S}
        // />
      })
    }
      //   {
      //     armyString: {
      //       S: `{"armyName":"Black Templars","faction":"Black Templars","armyReady":{"units":[],"armyName":"Black Templar","faction":"Black Templar"},"armyStandby":{"units":[{"unitName":"Crusader Squad","modelCount":10,"pointCost":140,"unitSize":0,"moneyCost":0,"unitId":942},{"unitName":"Castellan","modelCount":1,"pointCost":65,"unitSize":0,"moneyCost":0,"unitId":467},{"unitName":"Emperor's Champion","modelCount":1,"pointCost":75,"unitSize":0,"moneyCost":0,"unitId":386}]},"armyUnpainted":{"units":[{"unitName":"Crusader Squad","modelCount":10,"pointCost":140,"unitSize":0,"moneyCost":0,"unitId":982}]}}`
      //     },
      //     armyName: { S: 'Black Templars' },
      //     armyFaction: { S: 'Black Templars' }
      //   }

    return (
        <div className="font-bold underline border-black col-span-8 row-span-5 border-2">
          {/* {armies} */}
        </div>
      )
}

export default DatabaseRight;