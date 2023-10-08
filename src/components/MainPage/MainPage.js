import React from 'react';
import MainLeft from './MainLeft.js';
import MainRight from './MainRight.js';



function MainPage({addUnitToArmy, army}){
    return (
        <div className="font-bold underline border-black col-span-10 grid grid-cols-12 border-2 row-span-5">
          <MainLeft addUnitToArmy={addUnitToArmy}/>
          <MainRight army={army}/>
        </div>
      )
}

export default MainPage;