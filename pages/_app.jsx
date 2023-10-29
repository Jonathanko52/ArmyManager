
import '../styles/global.css';
import {ArmyProvider} from '../context/ArmyContext.js'
import  {useState, useEffect} from 'react';





export default function App({ Component, pageProps }) {

  const [armyReady, setArmyReady] = useState({
    armyReady:{units:[]}, 
    armyStandby:{units:[]}, 
    armyUnpainted:{units:[]}
  });

    useEffect(() => {
      if(localStorage.getItem("warHammerArmy")){
        setArmyReady(localStorage.getItem("warHammerArmy"))
      }
  }, []);

  return (
    <ArmyProvider value={{value:armyReady, setValue:setArmyReady}}>
      <Component {...pageProps} />
    </ ArmyProvider>
  )}