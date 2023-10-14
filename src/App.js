import NavigationBar from "./components/navigationBar.js"
import MainPage from './components/MainPage/MainPage.js'
import Database from './components/Database/DatabasePage.js'
import Header from './components/Header.js'
import React, {useState} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  const [army, setArmy] = useState({units:[]});
  const [] = useState();


  //full army state object
  //{armyName: string, faction:string, units: object, enhancements:object, pointcost: num, modelcount: num, id: number}
  //units object: { unit name: string, model count: array, point cost per size: array, unit sizes: array, enchancements:object, id:number}


  //functions:
  //create new army: Army name
  //delete army: armyId
  //Add unit to army: { unit name: string, model count: array, point cost per size: array, unit sizes: array, id}
  //delete unit from army:{id:number}

  const createArmy = (armyName) =>{
    let newArmy = {}
    newArmy.armyName = 
    newArmy.faction = 
    setArmy(newArmy)
  }

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

  const loadFromDatabase = () =>{

  }
  
  const saveToDatabase = () => {

  }

  const logState = () =>{
    console.log("STATE", army)

  }

  //save army: local storage id
  //load army: local storage id

  //pages:Main page 
  //window displaying army
    //Show army roster, point cost per unit, increase/decrease unit size, remove unit, duplicate unit
    //show point cost total
  //window for adding new unit
    //submit button
    //input field for name, model count , point per size, unit sizes,
  
  return (
    <BrowserRouter>
      <div className="App grid grid-cols-8 h-screen	bg-slate-500 text-gray-300">
        <Header/>
        <NavigationBar logState={logState}/>
        <Routes>
          <Route path="/" element={
            <MainPage 
              addUnitToArmy={addUnitToArmy} 
              army={army} 
              saveArmyToLocal={saveArmyToLocal} 
              loadArmyFromLocal={loadArmyFromLocal}
              clearCurrentArmy={clearCurrentArmy}
              changeArmyName={changeArmyName}         
              changeArmyFaction={changeArmyFaction}
            />
          }/>
          <Route path="/database" element={
            <Database 
              saveToDatabase = {saveToDatabase}
              loadFromDatabase = {loadFromDatabase}
            />} />
        </ Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
