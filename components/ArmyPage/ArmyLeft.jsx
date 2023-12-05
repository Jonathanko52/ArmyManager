import React, {useState,useEffect}from 'react';
import orkArmyPoints from './../../data/orkArmyPoints'
import spacemarineArmyPoints from './../../data/spacemarinePoints'
// import blacktemplarArmyPoints from './../../data/blackTemplayPoints'
import UnitRow from './UnitRow'

function ArmyLeft({addUnitToArmy}){

    const [selectedUnit, setSelectedUnit] = useState('');
    const [selectedUnitName, setSelectedUnitName] = useState('')
    const [unitSizeIndex, setUnitSizeIndex ] = useState(0)
    const [armyPointFilter, setArmyPointFilter] = useState(1000)
    const [factionSelect, setFactionSelect] = useState('Space Marine')

    let unitsToPickFrom = []

    const handleUnitSelect = (event) =>{
        if(factionSelect === 'Ork'){
            factionChosen = orkArmyPoints
        } else if(factionSelect === 'Space Marine'){
            factionChosen = spacemarineArmyPoints 
        }
        setSelectedUnitName(event.target.value)
        setSelectedUnit(factionChosen[event.target.value])
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
            modelCount: selectedUnit['models'][unitSizeIndex][0], 
            pointCost: selectedUnit['models'][unitSizeIndex][1], 
            unitId:unitId
          })
    }

    useEffect(()=>{
    },[factionSelect])

    let keyId=0;
    let factionChosen
    if(factionSelect === 'Ork'){
        factionChosen = orkArmyPoints
    } else if(factionSelect === 'Space Marine'){
        factionChosen = spacemarineArmyPoints 
    } else if(factionSelect === 'Black Templar'){
        factionChosen = blacktemplarArmyPoints
    }

    for(let keys in factionChosen){
        keyId++
        let splitKey = keys.replace(/([a-z])([A-Z])/g, '$1 $2');
            if(factionChosen[keys]['models'][0][1] <= armyPointFilter){
                unitsToPickFrom.push(<option key={keyId} value={keys}>{splitKey}</option>)
            }
    }

    return (
        <div className="p-2 m-2 border-black col-span-2 row-span-5 border-1 ">
            <label>Select Unit to Add to Army</label>
            <select className='text-black w-3/4' onChange={(e)=>{
                handleUnitSelect(e)
                setUnitSizeIndex(0)
            }}>
                {unitsToPickFrom}
            </select><br></br>
            <label>Filters</label><br></br>
            <select className='text-black w-1/2' onChange={(e)=>{
                handlePointFilterSelect(e)
            }}>
                <option key={4} value={200}>{'< 200'}</option>
                <option key={3} value={150}>{'< 150'}</option>
                <option key={2} value={100}>{'< 100'}</option>
                <option key={1} value={50}>{'< 50'}</option>
            </select><br></br>
            <label>Faction Select</label><br></br>
            <select className='text-black  w-1/2' onChange={(e)=>{
                handleFactionSelect(e)
            }}>
                <option key={1} value={'Ork'}>{'Ork'}</option>
                <option key={2} value={'Black Templar'}>{'Black Templar'}</option>
                <option key={3} value={'Space Marine'}>{'Space Marine'}</option>

            </select>
               {selectedUnit ? <UnitRow
                    unitName={selectedUnitName}
                    modelCount={selectedUnit['models'][unitSizeIndex][0]}
                    pointCost={selectedUnit['models'][unitSizeIndex][1]}
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