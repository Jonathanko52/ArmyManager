
import React, {useState, useContext, useEffect}from 'react';
import ArmyContext from '../../context/ArmyContext'



function MainLeft(){

  const { value, setValue } = useContext(ArmyContext)

  const [] = useState('');


  useEffect(() => {
  }, []);


    return (
      <div className="p-2 m-2 border-black col-span-4 row-span-5 border-1">

      </div>
      )
}

export default MainLeft;