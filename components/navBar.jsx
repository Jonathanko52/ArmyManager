import Link from 'next/link';
import React, { useContext } from 'react';
import ArmyContext from './../context/ArmyContext'
import params from '../pages/api/config/tableSchema'

function NavBar(){


    const { value, setValue } = useContext(ArmyContext)
    return (
      <div className="font-bold col-span-1 row-span-6 border-black border-2">
        <nav>
          <ul>
          <li>
            <Link className="m-4" href="/">Index</Link><br></br>
            </li>
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
          <button onClick={(e)=>{
            e.preventDefault();
            const postData = async () => {
              console.log("DYNAMO")
        
              const response = await fetch("/api/retrieveArmy", {
                method: "GET",
                // body: JSON.stringify(data),
              });
              return response.json();
            };
            postData().then((data) => {
              console.log("DATA ON FRONTPAGE", data)
            });

          }}>DYNAMOTEST</button>
          <br></br>
          <button onClick={()=>{
            const postData = async () => {
              console.log("DYNAMO2")
        
              const response = await fetch("/api/createTable", {
                method: "GET",
                // body: JSON.stringify(data),
              });
              return response.json();
            };
            postData().then((data) => {
              console.log("CREATE TABLE ON FRONTPAGE", data)
            });
          }}>DYNAMOTEST2</button>
        </nav>        
      </div>
      )
}

export default NavBar;