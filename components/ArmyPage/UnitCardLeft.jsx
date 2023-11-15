import React from 'react';

function UnitCardLeft({

}){
    return (
        <div 
          className="border-black col-span-8 row-span-2 border-2 p-4 m-4 rounded-md grid grid-cols-4" 
        >
          <div className="col-span-3">
            <label className="m-4 p-4 text-lg font-bold" >Unit Name: 
                <label className="text-slate-50 font-normal">{unitName}</label>
            </label>
            <br></br>
          </div>
          <div className="col-span-1">
               <button className="rounded-md p-2 m-2 bg-slate-50 text-black font-bold" type="submit" value="Add Unit" onClick={()=>{buttonThree(unitId)}}>
                
              </button>
               <button className="rounded-md p-2 m-2 bg-slate-50 text-black font-bold" type="submit" value="Add Unit" onClick={()=>{buttonFour(unitId)}}>
                {buttonFourText}
               </button> 
          </div>
          <div className="col-span-4">
              <button className="rounded-md p-2 pl-4 pr-4 m-2 bg-slate-50 text-black font-bold" type="submit" value="Add Unit" 
              onClick={()=>{buttonOne(unitId)}}>{buttonOneText}</button> 
              <button className="rounded-md p-2 pl-4 pr-4 m-2 bg-slate-50 text-black font-bold" type="submit" value="Add Unit" 
              onClick={()=>{buttonTwo(unitId)}}>{buttonTwoText}</button> 
            </div>
        </div>
      )
}

export default UnitCardLeft;