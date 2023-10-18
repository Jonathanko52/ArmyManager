import MainLeft from './MainLeft.js';
import MainRight from './MainRight.js';
import React, {useState} from 'react';




function MainPage(){
    
  const [armyReady, setArmyReady] = useState({units:[]});
  const [armyStandby, setArmyStandby] = useState({units:[]});
  const [armyUnpainted, setArmyUnpainted] = useState({units:[]});
  
  const addUnitToArmy = (newUnit) =>{
    setArmyReady({...armyReady, units:[...armyReady.units, newUnit]})
  }

  const removeUnit = (unitId)=>{
    let newUnits = armyReady.units.slice()
    newUnits = newUnits.filter(cur=>cur.unitId !== unitId)
    setArmyReady({...armyReady, units:newUnits})
  }

  const changeArmyName = (armyName) => {
    setArmyReady({...armyReady,armyName:armyName})
  }

  const changeArmyFaction = (armyFaction) =>{
    setArmyReady({...armyReady,faction:armyFaction})
  }

  const saveArmyToLocal = () =>{
    let confirmed = window.confirm("Are you sure you want to save your army?")
    if(confirmed){
      localStorage.setItem("warHammerArmy", JSON.stringify(armyReady));
    }
  }

  const loadArmyFromLocal = () =>{
    let confirmed = window.confirm("Are you sure you want to load your army?")
    if(confirmed){
      let testArmy = localStorage.getItem("warHammerArmy");
      setArmyReady(JSON.parse(testArmy))
    }
  }

  const clearCurrentArmy = () => {
    let confirmed = window.confirm("Are you sure you want to delete the current army?")
    if(confirmed){
      setArmyReady({units:[]})
    }
  }
  
  // const addUnitToArmy = (newUnit) =>{
  //   setArmy({...army, units:[...army.units, newUnit]})
  // }

  // const removeUnit = (unitId)=>{
  //   let newUnits = army.units.slice()
  //   console.log("ID", unitId)
  //   newUnits = newUnits.filter(cur=>cur.unitId !== unitId)
  //   setArmy({...army, units:newUnits})
  // }

  const readyToStandby = (unitId) => {
    let newReadyUnits = armyReady.units.slice()
    let unitToBeMoved 

    newReadyUnits = newReadyUnits.filter((cur)=>{
      if(cur.unitId === unitId){
        unitToBeMoved = cur
      }
      return cur.unitId !== unitId
    })

    setArmyReady({...armyReady, units:[...newReadyUnits]})
    setArmyStandby({...armyStandby, units:[...armyStandby.units, unitToBeMoved]})
  }



  const readyToUnpainted = () => {

    let newReadyUnits = armyReady.units.slice()
    let unitToBeMoved 

    newReadyUnits = newReadyUnits.filter((cur)=>{
      if(cur.unitId === unitId){
        unitToBeMoved = cur
      }
      return cur.unitId !== unitId
    })

    setArmyReady({...armyReady, units:[...newReadyUnits]})
    setArmyUnpainted({...armyUnpainted, units:[...armyStandby.units, unitToBeMoved]})

  }

  // const standbyToReady = () => {
  //   setArmyStandby
  //   setArmyReady
  // }

  // const standbyToUnpainted = () => {
  //   setArmyStandby
  //   setArmyUnpainted
  // }

  // const unpaintedToReady = () => {
  //   setArmyUnpainted
  //   setArmyReady
  // }

  // const unpaintedToStandy = () => {
  //   setArmyUnpainted
  //   setArmyStandby
  // }




  const logState =()=>{
    console.log("ARMY", armyReady)
    console.log("ARMY", armyStandby)
    console.log("ARMY", armyUnpainted)

  }
  
  
  return (
        <div className="font-bold underline border-black col-span-10 grid grid-cols-12 border-2 row-span-6">
          <MainLeft addUnitToArmy={addUnitToArmy}/>
          <MainRight 
            armyReady={armyReady}
            armyStandby={armyStandby}
            armyUnpainted={armyUnpainted}
            saveArmyToLocal={saveArmyToLocal} 
            loadArmyFromLocal={loadArmyFromLocal} 
            clearCurrentArmy={clearCurrentArmy}
            changeArmyName={changeArmyName}         
            changeArmyFaction={changeArmyFaction}
            readyToStandby={readyToStandby}
            removeUnit={removeUnit}
          />
          <button onClick={logState}>LOG STATE</button>
        </div>
      )
}

export default MainPage;