import DatabaseLeft from './DatabaseLeft.jsx';
import DatabaseRight from './DatabaseRight.jsx';
import React, {useState, useContext, useEffect}from 'react';
import ArmyContext from '../../context/ArmyContext'



function Database(){

  const { value, setValue } = useContext(ArmyContext)

  const [databaseArmies, setDatabaseArmies] = useState('');


  useEffect(() => {
    console.log("Database Mount. should only print once.", value)
  }, []);

  const fetchFromDatabase = () => {
    //Pulls from Dynamo to be presented on the database page, in the state
    let confirmed = window.confirm("Are you sure you want to retrieve your data from the database?")
    if(confirmed){
      const postData = async () => {
        const response = await fetch("/api/retrieveArmy", {
          method: "GET",
        });
        return response.json();
      };
      postData().then((data) => {
        let newDatabaseArmies = data
        setDatabaseArmies(newDatabaseArmies)
      });
    }
  };

  const setDatabaseArmyToAppArmy = (ind) => {
    //Pulls from the state in here and pshes it into context, so no API
    let confirmed = window.confirm("Do you want to load this army into the app?")
    if(confirmed){
      let armyToBeSet
      console.log("DATABASE ARMY TO LOAD", databaseArmies[ind])
      let armyParsed = JSON.parse(databaseArmies[ind].armyString.S)

      console.log("ARMYPARSED",armyParsed)
      let armyName = armyParsed.armyName
      let armyPoints = armyParsed.armyPoints
      let armyReady = armyParsed.armyReady
      let armyStandby = armyParsed.armyStandby
      let armyUnpainted = armyParsed.armyUnpainted
      let faction = armyParsed.faction

      armyToBeSet = {
        armyName,
        armyPoints,
        armyReady,
        armyStandby,
        armyUnpainted,
        faction
      }
      localStorage.setItem("warHammerArmy", JSON.stringify(armyToBeSet));


      setValue(armyToBeSet)
    }
  };

  const saveAppArmyToDatabase = () => {
    //WORKING ON AWS DYNAMODB
    let confirmed = window.confirm("Are you sure you want to save your army to the database?")
      if(confirmed){
      const postData = async () => {

        let data = JSON.stringify(value)
        const response = await fetch("/api/addArmy", {
          method: "POST",
          body: data,
        });
        return response.json();
      };
      postData().then((data) => {
        console.log("ARMY SAVED TO DATABASE", data)
      });
    }
  };

  const updateAppArmyToDatabase = () => {
    //WORKING ON AWS DYNAMODB
    let confirmed = window.confirm("Are you sure you want to save over your army in the database?")
      if(confirmed){
      const postData = async () => {
        let data = JSON.stringify(value)
        const response = await fetch("/api/updateArmy", {
          method: "POST",
          body: data,
        });
        return response.json();
      };
      postData().then((data) => {
        console.log("ARMY IN DATABASE UPDATED", data)
      });
    }
  };

  const deleteArmyFromDatabase = () => {
    //NOT SETUP YET
    let confirmed = window.confirm("Are you sure you want to delete this army?")
      if(confirmed){
      const postData = async () => {

        const response = await fetch("/api/deleteArmy", {
          method: "GET",
        });
        return response.json();
      };
      postData().then((data) => {
        console.log("CREATE TABLE ON FRONTPAGE", data)
      });
    }
  };

  const deleteArmyFromApp = () => {
    //deletes army from local
  };

  const createTable = () => {
    //WORKING ON AWS DYNAMODB
    let confirmed = window.confirm("Are you want to add a table to the database?")
      if(confirmed){
      const postData = async () => {

        const response = await fetch("/api/createTable", {
          method: "GET",
        });
        return response.json();
      };
      postData().then((data) => {
        console.log("CREATE TABLE ON FRONTPAGE", data)
      });
    }
  };

  const setArmyToContext = () =>{
   setValue()


  }

  const logCurrentState = () =>{
    console.log("CONTEXT VALUE", value)
    console.log("DATABASE VALUE", databaseArmies, typeof databaseArmies)
  }

  //Database Left
    //component displaying current army being edited in the app
    //save button for said component
    //delete from local button

  //Database Right
      //component for displaying all armies in database.
      //ability to click on an army to select if(checkbox-like. needs state)
      //ability to click on multiple?
      //button to delete said database item
      //button to load said database item(set to app state)
      //button to copy said database item(create a copy of it in database)
      //ability to rearrage. drag and drop is ideal      

  // DYNAMOD TABLES TO BE PASED
      // [
      //   {
      //     armyString: {
      //       S: `{"armyName":"Black Templars","faction":"Black Templars","armyReady":{"units":[],"armyName":"Black Templar","faction":"Black Templar"},"armyStandby":{"units":[{"unitName":"Crusader Squad","modelCount":10,"pointCost":140,"unitSize":0,"moneyCost":0,"unitId":942},{"unitName":"Castellan","modelCount":1,"pointCost":65,"unitSize":0,"moneyCost":0,"unitId":467},{"unitName":"Emperor's Champion","modelCount":1,"pointCost":75,"unitSize":0,"moneyCost":0,"unitId":386}]},"armyUnpainted":{"units":[{"unitName":"Crusader Squad","modelCount":10,"pointCost":140,"unitSize":0,"moneyCost":0,"unitId":982}]}}`
      //     },
      //     armyName: { S: 'Black Templars' },
      //     armyFaction: { S: 'Black Templars' }
      //   }
      // ]


    return (
        <div className="font-bold underline border-black col-span-10 grid grid-cols-12 border-2">
          <DatabaseLeft
            addArmy={saveAppArmyToDatabase}
            createTable={createTable}
            deleteArmy={deleteArmyFromDatabase}
            retrieveArmy={fetchFromDatabase}
            updateArmy={updateAppArmyToDatabase} 
            logCurrentState={logCurrentState}
          />
          <DatabaseRight 
            databaseArmies={databaseArmies}
            deleteArmy={deleteArmyFromDatabase}
            setDatabaseArmyToAppArmy={setDatabaseArmyToAppArmy}
          />
        </div>
      )
}

export default Database;