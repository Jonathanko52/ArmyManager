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
