import Link from 'next/link';
import React, { useContext } from 'react';
import ArmyContext from './../context/ArmyContext'

function NavBar(){


    const { value, setValue } = useContext(ArmyContext)
    return (
      <div className="font-bold col-span-1 row-span-6 border-black border-2">
        <nav>
          <ul>
            <br></br>
            <li>
            <Link className="m-4" href="/">Index</Link><br></br>
            </li>
            <br></br>
            <li>
            <Link className="m-4" href="/Army">Army</Link><br></br>
            </li>
            <br></br>
            <li>
            <Link className="m-4" href="/Database">Database</Link>
            </li>
            <br></br>
          </ul>
          <button onClick={()=>{
            console.log(value)
          }}>LOG STATE</button>
          <br></br>
        </nav>        
      </div>
      )
}

export default NavBar;