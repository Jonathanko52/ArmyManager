import React, {useState}from 'react';

function MainLeft({addUnitToArmy}){

    const [unitName, setName] = useState('');
    const [modelCount, setCount] = useState(0);
    const [pointCost, setpointCost] = useState(0);
    const [unitSize, setUnitSize] = useState(0);
    const [moneyCost, setMoneyCost] = useState(0);


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
    const handleChangeMoneyCost = (event) =>{
      setMoneyCost(+event.target.value)
    }
    const handleSubmit = (event) =>{
      event.preventDefault()
      let unitId = parseInt(Math.random() * 1000)
      addUnitToArmy({
        unitName: unitName,
        modelCount: modelCount, 
        pointCost: pointCost, 
        unitSize:unitSize, 
        moneyCost: moneyCost,
        unitId:unitId
      })
      setName('')
      setCount(0)
      setpointCost(0)
      setUnitSize(0)
    }

    return (
        <div className="p-2 m-2 border-black col-span-2 row-span-5 border-1">
          <h3>Add unit</h3>
          <form onSubmit={handleSubmit}>
              <label className="m-2">Name</label><br/><input className="text-black m-2" id="MainLeftName" type="text" value={unitName} onChange={handleChangeName}></input><br/>
              <label className="m-2">Model Count</label><br/><input className="text-black m-2 pl-2"id="MainLeftModel" type="number" value={modelCount} onChange={handleChangeModelCount}></input><br/>
              <label className="m-2">Point Cost</label><br/><input className="text-black m-2 pl-2"id="MainLeftPoint" type="number" value={pointCost} onChange={handleChangePointCost}></input><br/>
              <input className = "rounded-md p-2 mt-2 bg-slate-50 text-black" type="submit" value="Add Unit"></input>
          </form>
        </div>
      )
}


export default MainLeft;