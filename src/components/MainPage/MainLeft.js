import React from 'react';
  //pages:Main page 
  //window displaying army
    //Show army roster, point cost per unit, increase/decrease unit size, remove unit, duplicate unit
    //show point cost total
  //window for adding new unit
    //submit button
    //input field for name, model count , point per size, unit sizes,
function MainLeft(){

    return (
        <div className="p-2 m-2 border-black col-span-4 row-span-5 border-1">
        <h3>MainLeft</h3>
        <form>
            <label>Name</label><br/><input id="MainLeftName"></input><br/>
            <label>Model Count</label><br/><input id="MainLeftModel"></input><br/>
            <label>Point Cost</label><br/><input id="MainLeftPoint"></input><br/>
            <label>Unit sizes</label><br/><input id="MainLeftSizes"></input><br/>
            <input className = "rounded-md p-2 mt-2 bg-slate-50" type="submit" value="Add Unit"></input>
        </form>
        </div>
      )
}

export default MainLeft;