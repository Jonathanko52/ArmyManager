import MainLeft from './MainLeft.js';
import MainRight from './MainRight.js';
import React, {useState} from 'react';


function MainPage({armyApp,setArmyApp}){
    
  const [armyReady, setArmyReady] = useState({units:[]});
  const [armyStandby, setArmyStandby] = useState({units:[]});
  const [armyUnpainted, setArmyUnpainted] = useState({units:[]});
  const [armyName, setArmyName] = useState('');
  const [faction, setFaction] = useState('');
  
  const addUnitToArmy = (newUnit) =>{
    setArmyReady({...armyReady, units:[...armyReady.units, newUnit]})
  }

  const removeUnitFromReady = (unitId)=>{
    let newUnits = armyReady.units.slice()
    newUnits = newUnits.filter(cur=>cur.unitId !== unitId)
    setArmyReady({...armyReady, units:newUnits})
  }

  const removeUnitFromStandby = (unitId)=>{
    let newUnits = armyStandby.units.slice()
    newUnits = newUnits.filter(cur=>cur.unitId !== unitId)
    setArmyStandby({...armyStandby, units:newUnits})
  }

  const removeUnitFromUnpainted = (unitId)=>{
    let newUnits = armyUnpainted.units.slice()
    newUnits = newUnits.filter(cur=>cur.unitId !== unitId)
    setArmyUnpainted({...armyUnpainted, units:newUnits})
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
      localStorage.setItem("warHammerArmy", JSON.stringify({armyReady:armyReady, armyStandby:armyStandby, armyUnpainted:armyUnpainted }));
    }
  }

  const loadArmyFromLocal = () =>{
    let confirmed = window.confirm("Are you sure you want to load your army?")
    if(confirmed){
      let testArmy = localStorage.getItem("warHammerArmy");
      testArmy = JSON.parse(testArmy)
      setArmyReady(testArmy.armyReady)
      setArmyStandby(testArmy.armyStandby)
      setArmyUnpainted(testArmy.armyUnpainted)
    }
  }

  const saveToMainPage = () =>{
    setArmyApp({armyReady:armyReady, armyStandby:armyStandby, armyUnpainted:armyUnpainted })

  }

  const clearCurrentArmy = () => {
    let confirmed = window.confirm("Are you sure you want to delete the current army?")
    if(confirmed){
      setArmyReady({units:[]})
      setArmyStandby({units:[]})
      setArmyUnpainted({units:[]})
    }
  }
  

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



  const readyToUnpainted = (unitId) => {

    let newReadyUnits = armyReady.units.slice()
    let unitToBeMoved 

    newReadyUnits = newReadyUnits.filter((cur)=>{
      if(cur.unitId === unitId){
        unitToBeMoved = cur
      }
      return cur.unitId !== unitId
    })

    setArmyReady({...armyReady, units:[...newReadyUnits]})
    setArmyUnpainted({...armyUnpainted, units:[...armyUnpainted.units, unitToBeMoved]})

  }

  const standbyToReady = (unitId) => {

    let newStandbyUnits = armyStandby.units.slice()
    let unitToBeMoved 

    newStandbyUnits = newStandbyUnits.filter((cur)=>{
      if(cur.unitId === unitId){
        unitToBeMoved = cur
      }
      return cur.unitId !== unitId
    })

    setArmyStandby({...armyStandby, units:[...newStandbyUnits]})
    setArmyReady({...armyReady, units:[...armyReady.units, unitToBeMoved]})

  }

  const standbyToUnpainted = (unitId) => {

    let newStandbyUnits = armyStandby.units.slice()
    let unitToBeMoved 

    newStandbyUnits = newStandbyUnits.filter((cur)=>{
      if(cur.unitId === unitId){
        unitToBeMoved = cur
      }
      return cur.unitId !== unitId
    })

    setArmyStandby({...armyStandby, units:[...newStandbyUnits]})
    setArmyUnpainted({...armyUnpainted, units:[...armyUnpainted.units, unitToBeMoved]})

  }

  const unpaintedToReady = (unitId) => {

    let newUnpaintedUnits = armyUnpainted.units.slice()
    let unitToBeMoved 

    newUnpaintedUnits = newUnpaintedUnits.filter((cur)=>{
      if(cur.unitId === unitId){
        unitToBeMoved = cur
      }
      return cur.unitId !== unitId
    })

    setArmyUnpainted({...armyUnpainted, units:[...newUnpaintedUnits]})
    setArmyReady({...armyReady, units:[...armyReady.units, unitToBeMoved]})
  }

  const unpaintedToStandy = (unitId) => {

    let newUnpaintedUnits = armyUnpainted.units.slice()
    let unitToBeMoved 

    newUnpaintedUnits = newUnpaintedUnits.filter((cur)=>{
      if(cur.unitId === unitId){
        unitToBeMoved = cur
      }
      return cur.unitId !== unitId
    })

    setArmyUnpainted({...armyUnpainted, units:[...newUnpaintedUnits]})
    setArmyStandby({...armyStandby, units:[...armyStandby.units, unitToBeMoved]})
  }




  const logState =()=>{
    // console.log("NAMES",armyName,faction)
    // console.log("READY", armyReady)
    // console.log("STANDBY", armyStandby)
    // console.log("UNPAINTED", armyUnpainted)
    console.log("ENV TEST",  process.env.REACT_APP_TITLE)
  }
  
  
  return (
        <div className="font-bold underline border-black col-span-10 grid grid-cols-12 border-2 row-span-6 ">
          <MainLeft addUnitToArmy={addUnitToArmy}/>
          <MainRight 
            armyReady={armyReady.units}
            armyStandby={armyStandby.units}
            armyUnpainted={armyUnpainted.units}
            armyName={armyName}
            setArmyName={setArmyName}
            faction={faction}
            setFaction={setFaction}
            saveArmyToLocal={saveArmyToLocal} 
            loadArmyFromLocal={loadArmyFromLocal} 
            clearCurrentArmy={clearCurrentArmy}
            changeArmyName={changeArmyName}         
            changeArmyFaction={changeArmyFaction}
            readyToStandby={readyToStandby}
            readyToUnpainted={readyToUnpainted}
            standbyToReady={standbyToReady}
            standbyToUnpainted={standbyToUnpainted}
            unpaintedToReady={unpaintedToReady}
            unpaintedToStandy={unpaintedToStandy}
            removeUnitFromUnpainted={removeUnitFromUnpainted}
            removeUnitFromStandby={removeUnitFromStandby}
            removeUnitFromReady={removeUnitFromReady}
          />
          <button onClick={logState}>LOG STATE</button>
          <button onClick={saveToMainPage}>Save Army To Main Page</button>
        </div>
      )
}

export default MainPage;
