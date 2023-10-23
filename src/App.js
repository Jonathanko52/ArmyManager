import NavigationBar from "./components/navigationBar.js"
import MainPage from './components/MainPage/MainPage.js'
import Database from './components/Database/DatabasePage.js'
import Header from './components/Header.js'
import React, {useState} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";




//AWS test
const AWS = require("aws-sdk");
AWS.config.update({ region: 'us-east-1' });
const dynamodb = new AWS.DynamoDB();


function App() {

  const [armyApp, setArmyApp] = useState({units:[]});
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
    console.log(armyApp)
    console.log("ENV FILE", process.env)
    console.log("ENV FILE", process.env.REACT_APP_ACCESS_KEY_ID)
    console.log("ENV FILE", process.env.REACT_APP_SECRET_ACCESS_KEY)
  }
  const dynamoTest = (req, res) => {
      dynamodb.listTables({}, (err, data)=>{
        if(err) {
            console.log(err);
        } else {
            console.log(data);
        }
    })
  }

  const dynamoTest2 = (req, res) => {
      dynamodb.createTable({
        TableName: "demo_sdk",
        AttributeDefinitions: [
            {
                AttributeName: "id",
                AttributeType: "S" //string
            },
            {
                AttributeName: "timestamp",
                AttributeType: "N" //number
            }
        ],
        KeySchema: [
            {
                AttributeName: "id",
                KeyType: "HASH"
            },
            {
                AttributeName: "timestamp",
                KeyType: "RANGE"
            }
        ],
        ProvisionedThroughput: {
            ReadCapacityUnits: 1,
            WriteCapacityUnits: 1
        }
    }, (err, data)=>{
        if(err) {
            console.log(err);
        } else {
            console.log(JSON.stringify(data, null, 2));
        }
    });
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
        <NavigationBar 
          logState={logState} 
          dynamoTest={dynamoTest}
          dynamoTest2={dynamoTest2}
        />
        <Routes>
          <Route path="/" element={
            <MainPage 
              armyApp={armyApp}
              setArmyApp={setArmyApp}
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
