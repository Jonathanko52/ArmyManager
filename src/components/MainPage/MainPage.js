import React from 'react';
import MainLeft from './MainLeft.js';
import MainRight from './MainRight.js';



function MainPage({addUnitToArmy, army, saveArmyToLocal, loadArmyFromLocal, clearCurrentArmy, changeArmyName, changeArmyFaction }){
    return (
        <div className="font-bold underline border-black col-span-10 grid grid-cols-12 border-2">
          <MainLeft addUnitToArmy={addUnitToArmy}/>
          <MainRight 
            army={army} 
            saveArmyToLocal={saveArmyToLocal} 
            loadArmyFromLocal={loadArmyFromLocal} 
            clearCurrentArmy={clearCurrentArmy}
            changeArmyName={changeArmyName}         
            changeArmyFaction={changeArmyFaction}
          />
        </div>
      )
}

export default MainPage;