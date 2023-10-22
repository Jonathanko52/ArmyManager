import React from 'react';
import DatabaseLeft from './DatabaseLeft.js';
import DatabaseRight from './DatabaseRight.js';
import React, {useState}from 'react';



function Database({army}){

  //STATE
  //state for current selected army app is using
  //state for armies we pull from database
  

  //Function for pulling data on armies from database, showing it on screen
    //window for army name, faction, point cost.(Component)
  //Function for downloading one of the armies form the database to be part of the armymaker(read)
  //Function for saving(updating) the current army to the database
    //Armies altered in app will not be updating database in realtime
  //Function for deleting an army from database

  


  //function 






    return (
        <div className="font-bold underline border-black col-span-10 grid grid-cols-12 border-2">

          {/* <DatabaseLeft/>
          <DatabaseRight/> */}
        </div>
      )
}

export default Database;