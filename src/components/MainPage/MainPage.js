import MainLeft from './MainLeft.js';
import MainRight from './MainRight.js';
import React, {useState} from 'react';




function MainPage(){
    
  const [army, setArmy] = useState({units:[]});
  
  const addUnitToArmy = (newUnit) =>{
    setArmy({...army, units:[...army.units, newUnit]})
  }

  const changeArmyName = (armyName) => {
    setArmy({...army,armyName:armyName})
  }

  const changeArmyFaction = (armyFaction) =>{
    setArmy({...army,faction:armyFaction})
  }

  const saveArmyToLocal = () =>{
    let confirmed = window.confirm("Are you sure you want to save your army?")
    if(confirmed){
      localStorage.setItem("warHammerArmy", JSON.stringify(army));
    }
  }

  const loadArmyFromLocal = () =>{
    let confirmed = window.confirm("Are you sure you want to load your army?")
    if(confirmed){
      let testArmy = localStorage.getItem("warHammerArmy");
      setArmy(JSON.parse(testArmy))
    }
  }

  const clearCurrentArmy = () => {
    let confirmed = window.confirm("Are you sure you want to delete the current army?")
    if(confirmed){
      setArmy({units:[]})
    }
  }
  
  
  
  return (
        <div className="font-bold underline border-black col-span-10 grid grid-cols-12 border-2">
          <MainLeft addUnitToArmy={addUnitToArmy}/>
          <MainRight 
            army={army} 
            saveArmyToLocal={saveArmyToLocal} 
            loadArmyFromLocal={loadArmyFromLocal} 
            clearCurrentArmy={clearCurrentArmy}
            changeArmyName={changeArmyName}         
            changeArmyFaction={changeArmyFaction}
          />
        </div>
      )
}

export default MainPage;