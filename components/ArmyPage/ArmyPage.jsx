import ArmyLeft from './ArmyLeft';
import ArmyRight from './ArmyRight';
import React, {useState, useContext, useEffect} from 'react';
import ArmyContext from '../../context/ArmyContext'
import orkArmyPoints from './../../data/orkArmyPoints'


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
  const [factionPoint, setFactionPoints] = useState(orkArmyPoints)
  const [overLimit, setOverlimit] = useState(false)


  useEffect(() => {
    let contextData = value
      setArmyReady(contextData.armyReady)
      setArmyStandby(contextData.armyStandby)
      setArmyUnpainted(contextData.armyUnpainted)
      setArmyName(contextData.armyName)
      setFaction(contextData.faction)
      setArmyId(contextData.armyId)
      window.addEventListener('beforeunload',saveOnClose);

    return ()=>{
      // logState()
      window.removeEventListener('beforeunload', saveOnClose);
    }
  }, [isLoading]);

  const addUnitToArmy = (newUnit) =>{
    let id = duplicateIdCheck(newUnit.unitId)
    newUnit.unitId= id 
    setArmyReady({...armyReady, units:[newUnit,...armyReady.units]})
    checkUnitLimit()
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
    checkUnitLimit()
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

  const moveReadyUnitUp = (unitId) =>{
    let index
    armyReady.units.forEach((cur,ind)=>{
      if(cur.unitId === unitId){
        index = ind
      }
    })
    if(index > 0 && armyReady.units.length > 1){
      let newArmyReady = armyReady.units.slice()
      let placeHolder = newArmyReady[index]
      newArmyReady[index] = newArmyReady[index-1]
      newArmyReady[index-1] = placeHolder
      setArmyReady({...armyReady, units:newArmyReady})
    }
  }

  const moveReadyUnitDown = (unitId) =>{
    let index
    armyReady.units.forEach((cur,ind)=>{
      if(cur.unitId === unitId){
        index = ind
      }
    })
    if(index < armyReady.units.length-1 && armyReady.units.length > 1){
      let newArmyReady = armyReady.units.slice()
      let placeHolder = newArmyReady[index]
      newArmyReady[index] = newArmyReady[index+1]
      newArmyReady[index+1] = placeHolder
      setArmyReady({...armyReady, units:newArmyReady})
    }
  }

  const moveStandbyUnitUp = (unitId) =>{
    let index
    armyStandby.units.forEach((cur,ind)=>{
      if(cur.unitId === unitId){
        index = ind
      }
    })
    if(index > 0 && armyStandby.units.length > 1){
      let newArmyStandby = armyStandby.units.slice()
      let placeHolder = newArmyStandby[index]
      newArmyStandby[index] = newArmyStandby[index-1]
      newArmyStandby[index-1] = placeHolder
      setArmyStandby({...armyStandby, units:newArmyStandby})
    }
  }

  const moveStandbyUnitDown = (unitId) =>{
    let index
    armyStandby.units.forEach((cur,ind)=>{
      if(cur.unitId === unitId){
        index = ind
      }
    })
    if(index < armyStandby.units.length-1 && armyStandby.units.length > 1){
      let newArmyStandby = armyStandby.units.slice()
      let placeHolder = newArmyStandby[index]
      newArmyStandby[index] = newArmyStandby[index+1]
      newArmyStandby[index+1] = placeHolder
      setArmyStandby({...armyStandby, units:newArmyStandby})
    }
  }

  const moveUnpaintedUnitUp = (unitId) =>{
    let index
    armyUnpainted.units.forEach((cur,ind)=>{
      if(cur.unitId === unitId){
        index = ind
      }
    })
    if(index > 0 && armyUnpainted.units.length > 1){
      let newArmyUnpainted = armyUnpainted.units.slice()
      let placeHolder = newArmyUnpainted[index]
      newArmyUnpainted[index] = newArmyUnpainted[index-1]
      newArmyUnpainted[index-1] = placeHolder
      setArmyUnpainted({...armyUnpainted, units:newArmyUnpainted})
    }
  }

  const moveUnpaintedUnitDown = (unitId) =>{
    let index
    armyUnpainted.units.forEach((cur,ind)=>{
      if(cur.unitId === unitId){
        index = ind
      }
    })
    if(index < armyUnpainted.units.length-1 && armyUnpainted.units.length > 1){
      let newArmyUnpainted = armyUnpainted.units.slice()
      let placeHolder = newArmyUnpainted[index]
      newArmyUnpainted[index] = newArmyUnpainted[index+1]
      newArmyUnpainted[index+1] = placeHolder
      setArmyUnpainted({...armyUnpainted, units:newArmyUnpainted})
    }
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
        saveToMainPage()
    }
    console.log("SAVED")
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



    checkUnitLimit()
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


    checkUnitLimit()
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
    console.log("READY",armyReady.units)  
    console.log("STANDBY",armyStandby.units)  
    console.log("UNPAINTED",armyUnpainted.units)  
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
    setUnitBeingDragged([unitId, columnName])
  }

  const dropUnit = (event, column) =>{
    event.preventDefault();

    if(column === "Ready"){
      if(unitBeingDragged[1] === "Standby"){
        standbyToReady(unitBeingDragged[0])
      } else if(unitBeingDragged[1] === "Unpainted/Unassembled"){
        unpaintedToReady(unitBeingDragged[0])
      }
    } else if(column === "Standby"){
      if(unitBeingDragged[1] === "Ready"){
        readyToStandby(unitBeingDragged[0])
      } else if(unitBeingDragged[1] === "Unpainted/Unassembled"){
        unpaintedToStandy(unitBeingDragged[0])
      }
    } else if(column === "Unpainted/Unassembled"){
      if(unitBeingDragged[1] === "Ready"){
        readyToUnpainted(unitBeingDragged[0])
      } else if(unitBeingDragged[1] === "Standby"){
        standbyToUnpainted(unitBeingDragged[0])
      }
    }
  }

  const saveOnClose = (event)=>{
    saveArmyToLocal()

    const e = event || window.event;
    // Cancel the event

    e.preventDefault();
    if (e) {
      e.returnValue = ''; // Legacy method for cross browser support
    }

    return ''; // Legacy method for cross browser support
  }

  const checkUnitLimit = () =>{
    let noOver = true;
    armyReady.units.reduce((acc,cur)=>{
    if(acc[cur.unitName]){
      acc[cur.unitName]++
    } else {
      acc[cur.unitName]=1
    }
    if(acc[cur.unitName] >= 3){
      // let camelString = cur.unitName.replace(/(\w)(\w*)/g,
      // function(g0,g1,g2){return g1.toUpperCase() + g2.toLowerCase();}).replace(/\s+/g, '');
      noOver = false
      setOverlimit(cur.unitName)
    }
    return acc
  },{})
    if(noOver){
      setOverlimit('')
    }
}


  return (
        <div className="border-black col-span-10 grid grid-cols-12 border-2 row-span-6">
          <ArmyLeft addUnitToArmy={addUnitToArmy}/>
          <ArmyRight 
            overLimit={overLimit}
            unitsReady={armyReady.units}
            unitsStandby={armyStandby.units}
            unitsUnpainted={armyUnpainted.units}
            armyName={armyName}
            setArmyName={setArmyName}
            setArmyPoints={setArmyPoints}
            armyPoints={armyPoints}
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
            dropUnit={dropUnit}
            moveReadyUnitUp={moveReadyUnitUp}
            moveReadyUnitDown={moveReadyUnitDown}
            moveStandbyUnitUp={moveStandbyUnitUp}
            moveStandbyUnitDown={moveStandbyUnitDown}
            moveUnpaintedUnitUp={moveUnpaintedUnitUp}
            moveUnpaintedUnitDown={moveUnpaintedUnitDown}
            logState={logState}
          />
        </div>
      )
}

export default ArmyPage;
