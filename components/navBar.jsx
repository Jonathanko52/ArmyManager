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
            <Link className="m-4 text-xl hover:text-2xl" href="/">Index</Link><br></br>
            </li>
            <br></br>
            <li>
            <Link className="m-4 text-xl hover:text-2xl" href="/Army">Army</Link><br></br>
            </li>
            <br></br>
            <li>
            <Link className="m-4 text-xl hover:text-2xl" href="/Database">Database</Link>
            </li>
            <br></br>
          </ul>
          <button className = "rounded-md p-2 pl-4 pr-4 m-2 bg-slate-50 hover:bg-slate-200 text-black font-bold"
          onClick={()=>{
            console.log(value)
          }}>CONTEXT STATE</button>
          <br></br>
        </nav>        
      </div>
      )
}

export default NavBar;