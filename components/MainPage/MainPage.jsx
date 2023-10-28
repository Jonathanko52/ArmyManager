import MainLeft from './MainLeft.jsx';
import MainRight from './MainRight.jsx';
import React, {useState, useContext, useEffect} from 'react';
import ArmyContext from '../../context/ArmyContext'


function MainPage({setArmyApp}){
    
  const { value, setValue } = useContext(ArmyContext)

  const [armyReady, setArmyReady] = useState({units:[]});
  const [armyStandby, setArmyStandby] = useState({units:[]});
  const [armyUnpainted, setArmyUnpainted] = useState({units:[]});
  const [armyName, setArmyName] = useState('');
  const [faction, setFaction] = useState('');
  


  useEffect(() => {
    setArmyReady(value.armyReady)
    setArmyStandby(value.armyStandby)
    setArmyUnpainted(value.armyUnpainted)
  }, []);


  const addUnitToArmy = (newUnit) =>{
  }

  const removeUnitFromReady = (unitId)=>{

  }

  const removeUnitFromStandby = (unitId)=>{

  }

  const removeUnitFromUnpainted = (unitId)=>{

  }

  const changeArmyName = (armyName) => {

  }

  const changeArmyFaction = (armyFaction) =>{

  }

  const saveArmyToLocal = () =>{

  }

  const loadArmyFromLocal = () =>{

  }

  const saveToMainPage = () =>{
  }

  const clearCurrentArmy = () => {

  }
  

  const readyToStandby = (unitId) => {

  }



  const readyToUnpainted = (unitId) => {

  }

  const standbyToReady = (unitId) => {

  }

  const standbyToUnpainted = (unitId) => {


  }

  const unpaintedToReady = (unitId) => {

  }

  const unpaintedToStandy = (unitId) => {

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
          <button onClick={saveToMainPage}>Save Army To Main Page</button>
        </div>
      )
}

export default MainPage;
