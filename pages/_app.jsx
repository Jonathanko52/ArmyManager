
import '../styles/global.css';
import {ArmyProvider} from '../context/ArmyContext.js'
import  {useState} from 'react';





export default function App({ Component, pageProps }) {

  const [armyReady, setArmyReady] = useState({
    armyReady:{units:[]}, 
    armyStandby:{units:[]}, 
    armyUnpainted:{units:[]}
  });

  return (
    <ArmyProvider value={{value:armyReady, setValue:setArmyReady}}>
      <Component {...pageProps} />
    </ ArmyProvider>
  )}