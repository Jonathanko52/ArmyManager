import NavigationBar from "./components/navigationBar.js"
import MainPage from './components/MainPage/MainPage.js'
import Database from './components/Database/DatabasePage.js'
import Header from './components/Header.js'
import React, {useState, useEffect} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {


  const [army, setArmy] = useState({units:[]});
  const [addedUnit, setAddedUnit] = useState({});
  const [] = useState();


  //full army state object
  //{faction:string, units: object, enhancements:object, pointcost: num, modelcount: num, id: number}
  //units object: { unit name: string, model count: array, point cost per size: array, unit sizes: array, enchancements:object, id:number}


  //functions:
  //create new army: Army name
  //delete army: armyId
  //Add unit to army: { unit name: string, model count: array, point cost per size: array, unit sizes: array, id}
  //delete unit from army:{id:number}

  const addUnitToArmy = (newUnit) =>{
    let newArmy = Object.assign(army)
    // newArmy.units.assign(newArmy.units, newUnit)
    setArmy({...army, units:[...army.units, newUnit]})
  }

  const saveArmyToLocal = () =>{
    localStorage.setItem("warHammerArmy", JSON.stringify(army));
  }

  const loadArmyFromLocal = () =>{
    let testArmy = localStorage.getItem("warHammerArmy");
    console.log(JSON.parse(testArmy))
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
        <NavigationBar/>
        <Routes>
          <Route path="/" element={
            <MainPage 
              addUnitToArmy={addUnitToArmy} 
              army={army} 
              saveArmyToLocal={saveArmyToLocal} 
              loadArmyFromLocal={loadArmyFromLocal}
            />}/>
          <Route path="/database" element={<Database />} />
        </ Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
