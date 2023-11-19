import React, {useState,useEffect}from 'react';
import orkArmyPoints from './../../data/orkArmyPoints'
import UnitRow from './UnitRow'

function ArmyLeft({addUnitToArmy}){

    const [selectedUnit, setSelectedUnit] = useState('');
    const [selectedUnitName, setSelectedUnitName] = useState('')
    const [unitSizeIndex, setUnitSizeIndex ] = useState(0)
    const [armyPointFilter, setArmyPointFilter] = useState(0)
    const [factionSelect, setFactionSelect] = useState('')

    let unitsToPickFrom = []

    const handleChangePointCost = (event) =>{
        let splitKey = event.target.value.replace(/([a-z])([A-Z])/g, '$1 $2');
        setSelectedUnit(orkArmyPoints[event.target.value])
        setSelectedUnitName(splitKey)
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
        unitsToPickFrom.push(<option key={keyId} value={keys}>{splitKey}</option>)
    }

    useEffect(() => {
        let keyId=0;
        for(let keys in orkArmyPoints){
            keyId++
            let splitKey = keys.replace(/([a-z])([A-Z])/g, '$1 $2');
            unitsToPickFrom.push(<option key={keyId} value={keys}>{splitKey}</option>)
        }
    
        return ()=>{
          // logState()
          window.removeEventListener('beforeunload', saveOnClose);
        }
      }, []);





    return (
        <div className="p-2 m-2 border-black col-span-2 row-span-5 border-1 ">
            <label>Select Unit to Add to Army</label>
            <select className='text-black' onChange={(e)=>{
                handleChangePointCost(e)
                setUnitSizeIndex(0)
                }}>
                {unitsToPickFrom}
            </select>
            {/* <select className='text-black' onChange={()=>{}}>
                
            </select> */}
            {selectedUnit ? 
                <UnitRow
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