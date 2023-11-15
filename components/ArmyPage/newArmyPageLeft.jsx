import React, {useState}from 'react';
import orkArmyPoints from './../../data/orkArmyPoints'
import UnitRow from './UnitRow'

function ArmyLeft(){

    const [selectedUnit, setSelectedUnit] = useState('');
    const [selectedUnitName, setSelectedUnitName] = useState('')


    let unitsToPickFrom = []

    const handleChangePointCost = (event) =>{
        let splitKey = event.target.value.replace(/([a-z])([A-Z])/g, '$1 $2');
        setSelectedUnit(orkArmyPoints[event.target.value])
        setSelectedUnitName(splitKey)
    }    

    const increaseUnitSize = () =>{

    }

    const decreaseUnitSize  = () =>{

    }


    for(let keys in orkArmyPoints){
        let splitKey = keys.replace(/([a-z])([A-Z])/g, '$1 $2');
        unitsToPickFrom.push(<option value={keys}>{splitKey}</option>)
    }



    return (
        <div className="p-2 m-2 border-black col-span-2 row-span-5 border-1 ">
            {selectedUnit ? 
                <UnitRow
                    unitName={selectedUnitName}
                    modelCount={selectedUnit[0][0]}
                    pointCost={selectedUnit[0][1]}
            
            />: null }
            <select className='text-black' onChange={handleChangePointCost}>
                {unitsToPickFrom}
            </select>
        </div>
      )
}


export default ArmyLeft;