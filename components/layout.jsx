import NavBar from './NavBar.jsx'
import Header from './Header'
import React, {useState, createContext} from 'react';
import {ArmyProvider} from '../context/ArmyContext'


export default function Layout({ children }) {


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