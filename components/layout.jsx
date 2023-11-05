import NavBar from './NavBar.jsx'
import Header from './Header'
import React, {useState, createContext} from 'react';
import {ArmyProvider} from '../context/ArmyContext'


export default function Layout({ children }) {

    return (
            <div className="App grid grid-cols-8 bg-slate-500 text-gray-300 min-h-screen">
                <Header/>
                <NavBar/>
                {children}
            </div>
    )
  }