import React, {useState,useEffect}from 'react';
import orkArmyPoints from './../../data/orkArmyPoints'
import UnitRow from './UnitRow'

function ArmyLeft({addUnitToArmy}){

    const [selectedUnit, setSelectedUnit] = useState('');
    const [selectedUnitName, setSelectedUnitName] = useState('')
    const [unitSizeIndex, setUnitSizeIndex ] = useState(0)
    const [armyPointFilter, setArmyPointFilter] = useState(1000)
    const [factionSelect, setFactionSelect] = useState('')

    let unitsToPickFrom = []

    const handleUnitSelect = (event) =>{
        setSelectedUnit(orkArmyPoints[event.target.value])
    }    

    const handlePointFilterSelect = (event) =>{
        setArmyPointFilter(event.target.value)
    }    
    
    const handleFactionSelect = (event) =>{
        setFactionSelect(event.target.value)
    }    

    const increaseUnitSize = () =>{
        if(unitSizeIndex < selectedUnit.length-1){
            setUnitSizeIndex(unitSizeIndex+1)
        }
    }

    const decreaseUnitSize  = () =>{
        if(unitSizeIndex > 0){
            setUnitSizeIndex(unitSizeIndex-1)
        }
    }

    const newArmyAddUnitToArmy = () =>{
        let unitId = parseInt(Math.random() * 1000)
        addUnitToArmy({
            unitName: selectedUnitName,
            modelCount: selectedUnit[unitSizeIndex][0], 
            pointCost: selectedUnit[unitSizeIndex][1], 
            unitId:unitId
          })
    }


    let keyId=0;
    for(let keys in orkArmyPoints){
        keyId++
        let splitKey = keys.replace(/([a-z])([A-Z])/g, '$1 $2');
        if(orkArmyPoints[keys][0][1] <= armyPointFilter){
            unitsToPickFrom.push(<option key={keyId} value={keys}>{splitKey}</option>)
        }
    }


    return (
        <div className="p-2 m-2 border-black col-span-2 row-span-5 border-1 ">
            <label>Select Unit to Add to Army</label>
            <select className='text-black' onChange={(e)=>{
                handleUnitSelect(e)
                setUnitSizeIndex(0)
            }}>
                {unitsToPickFrom}
            </select>
            <label>Filters</label><br></br>
            <select className='text-black' onChange={(e)=>{
                handlePointFilterSelect(e)
            }}>
                <option key={4} value={200}>{'< 200'}</option>
                <option key={3} value={150}>{'< 150'}</option>
                <option key={2} value={100}>{'< 100'}</option>
                <option key={1} value={50}>{'< 50'}</option>
            </select><br></br>
            <label>Faction Select</label><br></br>
            <select className='text-black' onChange={(e)=>{
                handleFactionSelect(e)
            }}>
                <option key={1} value={'Ork'}>{'Ork'}</option>
            </select>
               {selectedUnit ? <UnitRow
                    unitName={selectedUnitName}
                    modelCount={selectedUnit[unitSizeIndex][0]}
                    pointCost={selectedUnit[unitSizeIndex][1]}
                    buttonOne={increaseUnitSize}
                    buttonOneText={"Increase Size"}
                    buttonTwo={decreaseUnitSize}
                    buttonTwoText={"Decrease Size"}
                    buttonThree={newArmyAddUnitToArmy}
                    buttonThreeText={"Add Unit To Army"}
            />: null }

        </div>
      )
}


export default ArmyLeft;