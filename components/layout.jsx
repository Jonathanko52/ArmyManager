import NavBar from './NavBar.jsx'
import Header from './Header'
import React, {useState, createContext} from 'react';


export default function Layout({ children }) {

    return (
            <div className="LAYOUT grid grid-cols-8 bg-slate-500 text-slate-200">
                <Header/>
                <NavBar/>
                {children}
            </div>
    )
  }