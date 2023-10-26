import NavBar from './navBar'
import Header from './Header'
import React, {useState} from 'react';


export default function Layout({ children }) {

    const [armyReady, setArmyReady] = useState("TEST");
    console.log(armyReady, children)

    return (
    <div className="App grid grid-cols-8 h-screen bg-slate-500 text-gray-300">
        <Header/>
        <NavBar/>
        {children}
    </div>
    )
  }