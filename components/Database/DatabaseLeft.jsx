import React, {useState,}from 'react';

  //pages:Main page 
  //window displaying army
    //Show army roster, point cost per unit, increase/decrease unit size, remove unit, duplicate unit
    //show point cost total
  //window for adding new unit
    //submit button
    //input field for name, model count , point per size, unit sizes,
function DatabaseLeft({
  addArmy,
  createTable,
  deleteArmy,
  retrieveArmy,
  updateArmy,
  logCurrentState
}){


    return (
        <div className="p-2 m-2 border-black col-span-4 row-span-5 border-1">
          <button className = "rounded-md p-2 m-2 bg-slate-50 text-black" type="submit" value="Add Unit" onClick={()=>{addArmy()}}>Add Army</button>
          <button className = "rounded-md p-2 m-2 bg-slate-50 text-black" type="submit" value="Add Unit" onClick={()=>{createTable()}}>Create Table</button>
          <button className = "rounded-md p-2 m-2 bg-slate-50 text-black" type="submit" value="Add Unit" onClick={()=>{deleteArmy()}}>Delete Army</button>
          <button className = "rounded-md p-2 m-2 bg-slate-50 text-black" type="submit" value="Add Unit" onClick={()=>{retrieveArmy()}}>Retrieve Army</button>
          <button className = "rounded-md p-2 m-2 bg-slate-50 text-black" type="submit" value="Add Unit" onClick={()=>{updateArmy()}}>Update Army</button>
          <button className = "rounded-md p-2 m-2 bg-slate-50 text-black" type="submit" value="Add Unit" onClick={()=>{logCurrentState()}}>Log State</button>
        </div>
      )
}

export default DatabaseLeft;