
import React, {useState, useContext, useEffect}from 'react';
import ArmyContext from '../../context/ArmyContext'



function MainRight(){

  const { value, setValue } = useContext(ArmyContext)

  const [] = useState('');

  useEffect(() => {
  }, []);


    return (
      <div className="font-bold border-black border-l-2 col-span-8 row-span-5">
      </div>
      )
}

export default MainRight;