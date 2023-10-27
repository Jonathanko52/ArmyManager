import NavBar from './NavBar.jsx'
import Header from './Header'
import React, {useState, useContext, createContext} from 'react';
import {ArmyProvider} from '../context/ArmyContext'

const ArmyContext = createContext(null);

export default function Layout({ children }) {

    const [armyReady, setArmyReady] = useState("TEST");

    const liftState = (test) =>{
        setArmyReady(test)
    }

    const logState = () =>{
        console.log(armyReady)
    }

    return (
        <ArmyProvider value={{value:armyReady, setValue:setArmyReady}}>
            <div className="App grid grid-cols-8 h-screen bg-slate-500 text-gray-300">
                <Header/>
                <NavBar/>
                {children}
            </div>
        </ArmyProvider>
    )
  }