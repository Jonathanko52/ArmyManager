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

  const deleteArmyFromDatabase = (armyName) => {
    console.log("DELETE", armyName)
    //WORKING ON AWS DYNAMODB
    let confirmed = window.confirm("Are you sure you want to delete this army?")
      if(confirmed){
      const postData = async () => {

        const response = await fetch("/api/deleteArmy", {
          method: "DELETE",
          body: armyName,
        });
        return response.json();
      };
      postData().then((data) => {
        console.log("DELETING", data)
      });
    }
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



  const logCurrentState = () =>{
    console.log("CONTEXT VALUE", value)
    console.log("DATABASE VALUE", databaseArmies, typeof databaseArmies)
  }

    return (
        <div className="font-bold border-black col-span-10 grid grid-cols-12 border-2">
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