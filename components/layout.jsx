import NavBar from './navBar'
import Header from './Header'
import React, {useState, useContext} from 'react';


export default function Layout({ children }) {

    const [armyReady, setArmyReady] = useState("TEST");

    const liftState = (test) =>{
        setArmyReady(test)
    }

    const logState = () =>{
        console.log(armyReady)
    }

    return (
    <div className="App grid grid-cols-8 h-screen bg-slate-500 text-gray-300">
        <Header/>
        <NavBar/>
        {children}
    </div>
    )
  }