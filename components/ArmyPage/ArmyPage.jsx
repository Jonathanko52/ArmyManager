import MainLeft from './ArmyLeft';
import MainRight from './ArmyRight';
import React, {useState, useContext, useEffect} from 'react';
import ArmyContext from '../../context/ArmyContext'


function ArmyPage(){
    
  const { value, setValue, isLoading} = useContext(ArmyContext)

  const [armyReady, setArmyReady] = useState({units:[]});
  const [armyStandby, setArmyStandby] = useState({units:[]});
  const [armyUnpainted, setArmyUnpainted] = useState({units:[]});
  const [armyPoints, setArmyPoints] = useState(0)
  const [armyName, setArmyName] = useState('');
  const [faction, setFaction] = useState('');
  const [armyId, setArmyId] = useState(0);
  const [unitBeingDragged, setUnitBeingDragged] = useState();


  useEffect(() => {
    let contextData = value
      console.log("ARMY PAGE MOUNTING",contextData)
      setArmyReady(contextData.armyReady)
      setArmyStandby(contextData.armyStandby)
      setArmyUnpainted(contextData.armyUnpainted)
      setArmyName(contextData.armyName)
      setFaction(contextData.faction)
      setArmyId(contextData.armyId)
      

    return ()=>{
      // setValue({
      //   armyName:armyName,
      //   faction:faction,
      //   armyReady:armyReady,
      //   armyStandby:armyStandby,
      //   armyUnpainted:armyUnpainted,
      //   armyPoints:armyPoints
      // })
    }
  }, [isLoading]);

  const addUnitToArmy = (newUnit) =>{
    let id = duplicateIdCheck(newUnit.unitId)
    newUnit.unitId= id

    setArmyReady({...armyReady, units:[...armyReady.units, newUnit]})
  }

  const duplicateUnitInReady = (unitId) =>{
    let duplicatedUnit = {}
    let newUnitId = parseInt(Math.random() * 1000)
    let id = duplicateIdCheck(newUnitId)
    newUnitId = id
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
    let id = duplicateIdCheck(newUnitId)
    newUnitId = id
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
    let id = duplicateIdCheck(newUnitId)
    newUnitId = id
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
      localStorage.setItem("warHammerArmy", JSON.stringify({
        armyName:armyName,
        faction:faction,
        armyReady:armyReady, 
        armyStandby:armyStandby, 
        armyUnpainted:armyUnpainted,
        armyPoints:armyPoints,
        armyId:armyId
      }));
    }
    saveToMainPage()
  }

  const loadArmyFromLocal = () =>{
    let confirmed = window.confirm("Are you sure you want to load your army?")
    if(confirmed){
      let testArmy = localStorage.getItem("warHammerArmy");
      testArmy = JSON.parse(testArmy)
      setArmyName(testArmy.armyName)
      setFaction(testArmy.faction)
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
      armyUnpainted:armyUnpainted,
      armyPoints:armyPoints
    })
  }

  const clearCurrentArmy = () => {
    let confirmed = window.confirm("Are you sure you want delete your current army?")
    if(confirmed){
      console.log("TEST CLEAR")
      let newArmyId = parseInt(Math.random() * 1000)
      let id = duplicateIdCheck(newArmyId)
      newArmyId = id
      setValue({
        armyName:'',
        faction:'',
        armyReady:{units:[]}, 
        armyStandby:{units:[]}, 
        armyUnpainted:{units:[]},
        armyPoints:0,
        armyId:newArmyId
      })
      setArmyReady({units:[]})
      setArmyStandby({units:[]})
      setArmyUnpainted({units:[]})
      setArmyName('')
      setFaction('')
      setArmyId(0)
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

  const logState = () =>{
    console.log(armyReady,armyStandby,armyUnpainted)  
    console.log(armyPoints, armyName, faction)
  }

  const duplicateIdCheck = (newUnitId) => {
    armyReady.units.forEach((cur)=>{
      if(cur.unitId === newUnitId){
        while(cur.unitId === newUnitId){
          newUnitId = parseInt(Math.random() * 1000)
        }
      }
    })
    armyStandby.units.forEach((cur)=>{
      if(cur.unitId === newUnitId){
        while(cur.unitId === newUnitId){
          newUnitId = parseInt(Math.random() * 1000)
        }
      }
    })
    armyUnpainted.units.forEach((cur)=>{
      if(cur.unitId === newUnitId){
        while(cur.unitId === newUnitId){
          newUnitId = parseInt(Math.random() * 1000)
        }
      }
    })
    return newUnitId
  }
  
  const dragUnit = (event, unitId, columnName) =>{
    event.preventDefault();
    let unitBeingDragged
    console.log("DRAG",unitId, columnName)
    if(columnName === "Ready"){
      armyReady.units.forEach((cur)=>{
        if(cur.unitId === unitId){
          unitBeingDragged = cur
        }
      })
    } else if (columnName === "Standby"){
      armyStandby.units.forEach((cur)=>{
        if(cur.unitId === unitId){
          unitBeingDragged = cur
        }
      })
    } else if (columnName === "Unpainted/Unassembled"){
      armyUnpainted.units.forEach((cur)=>{
        if(cur.unitId === unitId){
          unitBeingDragged = cur
        }
      })
    }



    setUnitBeingDragged(unitBeingDragged)
  }

  const dragOverUnit = (event) =>{
    event.preventDefault();
  }

  const dropUnit = (event, column) =>{
    event.preventDefault();
    console.log("DROP", column)
    console.log("UNIT BEING DRAGGED", unitBeingDragged)
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
            setArmyPoints={setArmyPoints}
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
            armyId={armyId}
            dragUnit={dragUnit}
            dragOverUnit={dragOverUnit}
            dropUnit={dropUnit}
          />
          <button onClick={logState}>Log State</button>
        </div>
      )
}

export default ArmyPage;
