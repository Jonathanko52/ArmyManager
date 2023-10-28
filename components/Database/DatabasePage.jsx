import DatabaseLeft from './DatabaseLeft.jsx';
import DatabaseRight from './DatabaseRight.jsx';
import React, {useState, useContext, useEffect}from 'react';
import ArmyContext from '../../context/ArmyContext'



function Database(){

  const { value, setValue } = useContext(ArmyContext)

  const [appArmy, setAppArmy] = useState('');
  const [databaseArmies, setDatabaseArmies] = useState('');


  useEffect(() => {
    console.log("First Mount. should only print once.")
  }, []);

  const fetchFromDatabase = () => {

  };

  const setDatabaseArmyToAppArmy = () => {

  };

  const saveAppArmyToDatabase = () => {
    //adds completely new army to database

  };

  const updateAppArmyToDatabase = () => {
    //rewrites army in database with local army
  };

  const deleteArmyFromDatabase = () => {
    //deletes army from the database
  };

  const deleteArmyFromApp = () => {
    //deletes army from local
  };

  //needs a delete form local button passed down from the APP
  //The fuck does this mean?



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

          {/* <DatabaseLeft/>
          <DatabaseRight/> */}
        </div>
      )
}

export default Database;