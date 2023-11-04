
import '../styles/global.css';
import {ArmyProvider} from '../context/ArmyContext.js'
import  {useState, useEffect} from 'react';

export default function App({ Component, pageProps }) {


  // Wraps around all components

  const [armyReady, setArmyReady] = useState({
    armyReady:{units:[]}, 
    armyStandby:{units:[]}, 
    armyUnpainted:{units:[]}
  });
  const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      console.log("APP BOOTING",pageProps)
      if(localStorage.getItem("warHammerArmy")){
        console.log("APP OPENING LOCAL STORAGE")
        let contextData = JSON.parse(localStorage.getItem("warHammerArmy"))
        setArmyReady(contextData)
      }
      return ()=>{
        console.log("Closeapp cleanup")
      }
  }, []);

  return (
    <ArmyProvider value={{value:armyReady, setValue:setArmyReady, isLoading}}>
      <Component {...pageProps} />
    </ ArmyProvider>
  )}
