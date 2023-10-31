import MainLeft from './MainLeft.jsx';
import MainRight from './MainRight.jsx';
import React, {useState, useContext, useEffect} from 'react';
import ArmyContext from '../../context/ArmyContext'


function MainPage(){
    
  const { value, setValue } = useContext(ArmyContext)

  const [armyReady, setArmyReady] = useState({units:[]});
  const [armyStandby, setArmyStandby] = useState({units:[]});
  const [armyUnpainted, setArmyUnpainted] = useState({units:[]});
  const [armyName, setArmyName] = useState('');
  const [faction, setFaction] = useState('');

  useEffect(() => {
    let contextData = value
      setArmyReady(contextData.armyReady)
      setArmyStandby(contextData.armyStandby)
      setArmyUnpainted(contextData.armyUnpainted)
    return ()=>{
      setValue({
        armyName:armyName,
        faction:faction,
        armyReady:armyReady,
        armyStandby:armyStandby,
        armyUnpainted:armyUnpainted
      })
    }
  }, []);

  const addUnitToArmy = (newUnit) =>{
    setArmyReady({...armyReady, units:[...armyReady.units, newUnit]})
  }

  const duplicateUnitInReady = (unitId) =>{
    let duplicatedUnit = {}
    let newUnitId = parseInt(Math.random() * 1000)
    armyReady.units.forEach(cur=>{
      if(cur.unitId === unitId){
        Object.assign(duplicatedUnit,cur)
        duplicatedUnit.unitId = newUnitId
      }
    })
    setArmyReady({...armyReady, units:[...armyReady.units, duplicatedUnit]})
  }

  const duplicateUnitInStandby = (unitId) =>{
    let duplicatedUnit = {}
    let newUnitId = parseInt(Math.random() * 1000)
    armyStandby.units.forEach(cur=>{
      if(cur.unitId === unitId){
        Object.assign(duplicatedUnit,cur)
        duplicatedUnit.unitId = newUnitId
      }
    })
    setArmyStandby({...armyStandby, units:[...armyStandby.units, duplicatedUnit]})
  }

  const duplicateUnitInUnpainted = (unitId) =>{
    let duplicatedUnit = {}
    let newUnitId = parseInt(Math.random() * 1000)
    armyUnpainted.units.forEach(cur=>{
      if(cur.unitId === unitId){
        Object.assign(duplicatedUnit,cur)
        duplicatedUnit.unitId = newUnitId
      }
    })
    setArmyUnpainted({...armyUnpainted, units:[...armyUnpainted.units, duplicatedUnit]})
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
    setValue({
      armyName:armyName,
      faction:faction,
      armyReady:armyReady,
      armyStandby:armyStandby,
      armyUnpainted:armyUnpainted
    })
  }

  const clearCurrentArmy = () => {
    setValue({
      armyReady:{units:[]}, 
      armyStandby:{units:[]}, 
      armyUnpainted:{units:[]}
    })
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

  const logState = () =>{
    console.log(armyReady,armyStandby,armyUnpainted)
  }
  
  return (
        <div className="font-bold underline border-black col-span-10 grid grid-cols-12 border-2 row-span-6 ">
          <MainLeft addUnitToArmy={addUnitToArmy}/>
          <MainRight 
            unitsReady={armyReady.units}
            unitsStandby={armyStandby.units}
            unitsUnpainted={armyUnpainted.units}
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
            duplicateUnitInReady={duplicateUnitInReady}
            duplicateUnitInStandby={duplicateUnitInStandby}
            duplicateUnitInUnpainted={duplicateUnitInUnpainted}
          />
          <button onClick={saveToMainPage}>Save Army To Main Page</button>
          <button onClick={logState}>Log State</button>

        </div>
      )
}

export default MainPage;
