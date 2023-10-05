import React from 'react';
import MainLeft from './MainLeft.js';
import MainRight from './MainRight.js';



function MainPage(){
    return (
        <div className="text-3xl font-bold underline border-black col-span-10 grid grid-cols-12 border-2 row-span-5">
          <MainLeft/>
          <MainRight/>
        </div>
      )
}

export default MainPage;