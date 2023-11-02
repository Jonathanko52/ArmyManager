import DatabaseLeft from './DatabaseLeft.jsx';
import DatabaseRight from './DatabaseRight.jsx';
import React, {useState, useContext, useEffect}from 'react';
import ArmyContext from '../../context/ArmyContext'



function Database(){

  const { value, setValue } = useContext(ArmyContext)

  const [appArmy, setAppArmy] = useState('');
  const [databaseArmies, setDatabaseArmies] = useState('');


  useEffect(() => {
    console.log("Database Mount. should only print once.", value)
  }, []);

  const fetchFromDatabase = () => {
      const postData = async () => {
        console.log("Read Table")
  
        const response = await fetch("/api/retrieveArmy", {
          method: "GET",
          // body: JSON.stringify(data),
        });
        return response.json();
      };
      postData().then((data) => {
        console.log("CREATE TABLE ON FRONTPAGE", data)
      });
  };

  const setDatabaseArmyToAppArmy = () => {

  };

  const saveAppArmyToDatabase = () => {
    //adds completely new army to database
    const postData = async () => {
      console.log("ADDING ARMY",value)
      let data = value
      const response = await fetch("/api/addArmy", {
        method: "POST",
        body: JSON.stringify(data),
      });
      return response.json();
    };
    postData().then((data) => {
      console.log("CREATE TABLE ON FRONTPAGE", data)
    });
  };

  const updateAppArmyToDatabase = () => {
    //rewrites army in database with local army
    const postData = async () => {
      console.log("ADDING ARMY",value)
      let data = value
      const response = await fetch("/api/updateArmy", {
        method: "POST",
        body: JSON.stringify(data),
      });
      return response.json();
    };
    postData().then((data) => {
      console.log("CREATE TABLE ON FRONTPAGE", data)
    });
  };

  const deleteArmyFromDatabase = () => {
    //deletes army from the database
    const postData = async () => {
      console.log("Read Table")

      const response = await fetch("/api/deleteArmy", {
        method: "GET",
        // body: JSON.stringify(data),
      });
      return response.json();
    };
    postData().then((data) => {
      console.log("CREATE TABLE ON FRONTPAGE", data)
    });
  };

  const deleteArmyFromApp = () => {
    //deletes army from local
  };

  const createTable = () => {
    //deletes army from local
    const postData = async () => {
      console.log("Read Table")

      const response = await fetch("/api/createTable", {
        method: "GET",
        // body: JSON.stringify(data),
      });
      return response.json();
    };
    postData().then((data) => {
      console.log("CREATE TABLE ON FRONTPAGE", data)
    });
  };

  const logCurrentState = () =>{
    console.log("CONTEXT VALUE",value)


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
          <DatabaseRight/>
        </div>
      )
}

export default Database;