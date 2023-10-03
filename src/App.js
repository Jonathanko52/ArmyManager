import NavigationBar from "./components/navigationBar.js"
import MainPage from './components/MainPage.js'
import Header from './components/Header.js'
import React, {useState, useEffect} from 'react';

function App() {


  const [age, setAge] = useState(28);


  //full army state object
  //{faction:string, units: object, enhancements:object, pointcost: num, modelcount: num, id: number}
  //units object: { unit name: string, model count: num, point cost per size: array, unit sizes: array, unit number of sizes: number, id:number}


  //functions:
  //create new army: Army name
  //delete army: armyId
  //Add unit to army: { unit name: string, model count: num, point cost per size: array, unit sizes: array, unit number of sizes: number, id}
  //delete unit from army:{id:number}
  
  //save army: local storage id
  //load army: local storage id

  //pages:Main page 
  //Show army roster, point cost per unit, increase/decrease unit size
  //show point cost total

  
  return (
    <div className="App grid grid-cols-8 h-screen	">
        <Header/>
        <NavigationBar/>
        <MainPage/>
    </div>
  );
}

export default App;
