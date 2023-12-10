
import React, {useState, useContext, useEffect}from 'react';
import ArmyContext from '../../context/ArmyContext'



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