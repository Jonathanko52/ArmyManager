import React from 'react';
import React, {useState, useEffect} from 'react';

  //pages:Main page 
  //window displaying army
    //Show army roster, point cost per unit, increase/decrease unit size, remove unit, duplicate unit
    //show point cost total
  //window for adding new unit
    //submit button
    //input field for name, model count , point per size, unit sizes,
function MainLeft(){

    const [unitName, setName] = useState(0);
    const [modelCount, setCount] = useState(0);
    const [pointCost, setpointCost] = useState(0);
    const [unitSize, setUnitSize] = useState(0);

    const handleChangeName = (event) =>{
        console.log(event.target.value)
    }
    const handleChangeModelCount = (event) =>{
      console.log(event.target.value)
    }    
    const handleChangePointCost = (event) =>{
      console.log(event.target.value)
    }    
    const handleChangeUnitSizes = (event) =>{
      console.log(event.target.value)
    }

    return (
        <div className="p-2 m-2 border-black col-span-4 row-span-5 border-1">
          <h3>Add unit</h3>
          <form>
              <label>Name</label><br/><input id="MainLeftName" onChange={handleChangeName}></input><br/>
              <label>Model Count</label><br/><input id="MainLeftModel" onChange={handleChangeModelCount}></input><br/>
              <label>Point Cost</label><br/><input id="MainLeftPoint" onChange={handleChangePointCost}></input><br/>
              <label>Unit sizes</label><br/><input id="MainLeftSizes" onChange={handleChangeUnitSizes}></input><br/>
              <input className = "rounded-md p-2 mt-2 bg-slate-50" type="submit" value="Add Unit"></input>
          </form>
        </div>
      )
}

export default MainLeft;