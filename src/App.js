import NavigationBar from "./components/navigationBar.js"
import MainPage from './components/MainPage.js'
import Header from './components/Header.js'
import React, {useState, useEffect} from 'react';

function App() {


  const [age, setAge] = useState(28);


  //full army state object
  //{faction:string, units: object, pointcost: num, modelcount: num}
  //units object: { unit name: string, model count: num, point cost per size: array, unit sizes: array, unit number of sizes: number}


  //functions:
  //create new army: Army name
  //Add unit to army: { unit name: string, model count: num, point cost per size: array, unit sizes: array, unit number of sizes: number}


  
  return (
    <div className="App grid grid-cols-8 h-screen	">
        <Header/>
        <NavigationBar/>
        <MainPage/>
    </div>
  );
}

export default App;
