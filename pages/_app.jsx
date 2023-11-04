
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
      console.log("APP BOOTING, CONTEXT LOADING", isLoading)
      if(localStorage.getItem("warHammerArmy")){
        console.log("APP OPENING LOCAL STORAGE")


        setTimeout(() => {
          let contextData = JSON.parse(localStorage.getItem("warHammerArmy"))
          setArmyReady(contextData)
          setIsLoading(false)
          console.log("APP BOOTING, CONTEXT UPDATED", isLoading, armyReady)

        }, "1000");
      }
      return ()=>{
        console.log("Closeapp cleanup")
      }
  }, []);

  return (
    <ArmyProvider value={{value:armyReady, setValue:setArmyReady, isLoading:isLoading}}>
      <Component {...pageProps} />
    </ ArmyProvider>
  )}
