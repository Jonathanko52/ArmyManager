
import React, {useState, useContext, useEffect}from 'react';
import ArmyContext from '../../context/ArmyContext';
import MainLeft from '../../context/MainLeft';
import MainRight from '../../context/MainRight';



function MainPage(){

  const { value, setValue } = useContext(ArmyContext)

  const [] = useState('');


  useEffect(() => {
  }, []);


    return (
        <div className="font-bold border-black col-span-10 grid grid-cols-12 border-2">

        </div>
      )
}

export default MainPage;