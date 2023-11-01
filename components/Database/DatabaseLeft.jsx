import React, {useState,}from 'react';

  //pages:Main page 
  //window displaying army
    //Show army roster, point cost per unit, increase/decrease unit size, remove unit, duplicate unit
    //show point cost total
  //window for adding new unit
    //submit button
    //input field for name, model count , point per size, unit sizes,
function DatabaseLeft(){


    return (
        <div className="p-2 m-2 border-black col-span-4 row-span-5 border-1">
          <button className = "rounded-md p-2 m-2 bg-slate-50 text-black" type="submit" value="Add Unit" onClick={

          }>Add Army</button>
          <button className = "rounded-md p-2 m-2 bg-slate-50 text-black" type="submit" value="Add Unit" onClick={

          }>Create Table</button>
          <button className = "rounded-md p-2 m-2 bg-slate-50 text-black" type="submit" value="Add Unit" onClick={

          }>Delete Army</button>
          <button className = "rounded-md p-2 m-2 bg-slate-50 text-black" type="submit" value="Add Unit" onClick={

          }>Read Table</button>
          <button className = "rounded-md p-2 m-2 bg-slate-50 text-black" type="submit" value="Add Unit" onClick={

          }>Retrieve Army</button>
          <button className = "rounded-md p-2 m-2 bg-slate-50 text-black" type="submit" value="Add Unit" onClick={

          }>Update Army</button>
        </div>
      )
}

export default DatabaseLeft;