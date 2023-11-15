import React, {useState}from 'react';
import orkArmyPoints from './../../data/orkArmyPoints'
import UnitRow from './UnitRow'

function ArmyLeft({addUnitToArmy}){

    const [unitName, setName] = useState('');
    const [modelCount, setCount] = useState(0);
    const [pointCost, setpointCost] = useState(0);
    const [unitSize, setUnitSize] = useState(0);
    const [moneyCost, setMoneyCost] = useState(0);


    let unitsToPickFrom = []
    console.log(orkArmyPoints,"ORK")

    return (
        <div className="p-2 m-2 border-black col-span-2 row-span-5 border-1">
            {unitsToPickFrom}
        </div>
      )
}


export default ArmyLeft;