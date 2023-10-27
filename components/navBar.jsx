import Link from 'next/link';
import React, { useContext } from 'react';
import ArmyContext from './../context/ArmyContext'

function NavBar(){


    const { value, setValue } = useContext(ArmyContext)
    return (
      <div className="font-bold col-span-1 row-span-6 border-black border-2">
        <nav>
          <ul>
            <li>
            <Link className="m-4" href="/Army">Army</Link><br></br>
            </li>
            <li>
            <Link className="m-4" href="/Database">Database</Link>
            </li>
          </ul>
          <button onClick={()=>{
            console.log(value)
          }}>LOG STATE</button>
          <br></br>
          <button onClick={()=>{
            setValue("DYNAMO1")
          }}>DYNAMOTEST</button>
          <br></br>
          <button onClick={()=>{
            setValue("DYNAMO2")
          }}>DYNAMOTEST2</button>
        </nav>        
      </div>
      )
}

export default NavBar;