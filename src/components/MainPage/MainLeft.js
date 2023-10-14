import React, {useState, useEffect}from 'react';

  //pages:Main page 
  //window displaying army
    //Show army roster, point cost per unit, increase/decrease unit size, remove unit, duplicate unit
    //show point cost total
  //window for adding new unit
    //submit button
    //input field for name, model count , point per size, unit sizes,
function MainLeft({addUnitToArmy}){

    const [unitName, setName] = useState('');
    const [modelCount, setCount] = useState(0);
    const [pointCost, setpointCost] = useState(0);
    const [unitSize, setUnitSize] = useState(0);
    

    const handleChangeName = (event) =>{
      setName(event.target.value)
    }
    const handleChangeModelCount = (event) =>{
      setCount(Number(event.target.value))
    }    
    const handleChangePointCost = (event) =>{
      setpointCost(parseInt(event.target.value))
    }    
    const handleChangeUnitSizes = (event) =>{
      setUnitSize(+event.target.value)
    }
    const handleSubmit = (event) =>{
      event.preventDefault()
      let unitId = Math.floor(Math.random() * max)
      addUnitToArmy({unitName: unitName,modelCount: modelCount, pointCost: pointCost, unitSize:unitSize, unitId:unitId})
      setName('')
      setCount(0)
      setpointCost(0)
      setUnitSize(0)
    }

    return (
        <div className="p-2 m-2 border-black col-span-4 row-span-5 border-1">
          <h3>Add unit</h3>
          <form onSubmit={handleSubmit}>
              <label>Name</label><br/><input id="MainLeftName" type="text" value={unitName} onChange={handleChangeName}></input><br/>
              <label>Model Count</label><br/><input id="MainLeftModel" type="number" value={modelCount} onChange={handleChangeModelCount}></input><br/>
              <label>Point Cost</label><br/><input id="MainLeftPoint" type="number" value={pointCost} onChange={handleChangePointCost}></input><br/>
              <label>Unit sizes</label><br/><input id="MainLeftSizes" type="number" value={unitSize} onChange={handleChangeUnitSizes}></input><br/>
              <input className = "rounded-md p-2 mt-2 bg-slate-50" type="submit" value="Add Unit"></input>
          </form>
        </div>
      )
}


export default MainLeft;