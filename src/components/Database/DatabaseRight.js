import React from 'react';
// 
function DatabaseRight({army}){
  //{faction:string, units: object, enhancements:object, pointcost: num, modelcount: num, id: number}




    return (
        <div className="font-bold underline border-black col-span-8 row-span-5 border-2">
        <div className = "row-span-5 grid grid grid-cols-9">
          <div className="p-4 col-span-3 row-span-5 border-black border-2">
            <label>Army Name:</label>
          </div>
          <div className="p-4 col-span-3 row-span-5 border-black border-2">
            <label>Faction:</label>
          </div>
          <div className="p-4 col-span-3 row-span-5 border-black border-2">
            <label>Total cost:</label>
          </div>
        </div>
        </div>
      )
}

export default DatabaseRight;