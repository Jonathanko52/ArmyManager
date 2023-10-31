
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
      console.log("Loading army form local")
      if(localStorage.getItem("warHammerArmy")){
        let contextData = JSON.parse(localStorage.getItem("warHammerArmy"))
        setArmyReady(contextData)
        console.log("context",localStorage.getItem("warHammerArmy"))
      }
      return ()=>{
        console.log("Closeapp cleanup")
      }
  }, []);

  return (
    <ArmyProvider value={{value:armyReady, setValue:setArmyReady}}>
      <Component {...pageProps} />
    </ ArmyProvider>
  )}

  // let confirmed = window.confirm("Are you sure you want to save your army?")
  // if(confirmed){
  //   localStorage.setItem("warHammerArmy", JSON.stringify({armyReady:armyReady, armyStandby:armyStandby, armyUnpainted:armyUnpainted }));
  // }