import React, {useState}from 'react';
import orkArmyPoints from './../../data/orkArmyPoints'
import UnitRow from './UnitRow'

function ArmyLeft(){

    const [selectedUnit, setSelectedUnit] = useState('');
    const [selectedUnitName, setSelectedUnitName] = useState('')


    let unitsToPickFrom = []

    const handleChangePointCost = (event) =>{
        setSelectedUnit(orkArmyPoints[event.target.value])
        setSelectedUnitName(event.target.value)
    }    


    for(let keys in orkArmyPoints){
        unitsToPickFrom.push(<option value={keys}>{keys}</option>)
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