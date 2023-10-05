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
        <div className=" border-black col-span-6 row-span-5 border-1">
        <h3>MainLeft</h3>
        <form>
            <label>Name</label><input id="MainLeftName"></input><br/>
            <label>Model Count</label><input id="MainLeftModel"></input><br/>
            <label>Point Cost</label><input id="MainLeftPoint"></input><br/>
            <label>Unit sizes</label><input id="MainLeftSizes"></input><br/>
            <input type="submit" value="Add Unit"></input>
        </form>
        </div>
      )
}

export default MainLeft;