import React from 'react';
import MainLeft from '../components/MainLeft.js';
import MainRight from '../components/MainRight'



function MainPage(){

  






    return (
        <div className="text-3xl font-bold underline border-black col-span-10 grid grid-cols-12 border-2 row-span-5">
          <MainLeft/>
            <MainRight/>
        </div>
      )
}

export default MainPage;