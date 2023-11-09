
import '../styles/global.css';
import {ArmyProvider} from '../context/ArmyContext.js'
import  {useState, useEffect} from 'react';

export default function App({ Component, pageProps }) {


  // Wraps around all components

  const [army, setArmy] = useState({
    armyReady:{units:[]}, 
    armyStandby:{units:[]}, 
    armyUnpainted:{units:[]},
    armyId:0,
    armyName:'',
    faction:''
  });
  const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      let contextData
      let newArmyId
      if(localStorage.getItem("warHammerArmy")){
          contextData = JSON.parse(localStorage.getItem("warHammerArmy"))
      }
      if(!contextData.armyId){
        newArmyId = parseInt(Math.random() * 1000)
        contextData.armyId = newArmyId
      }

      if(contextData.armyId){
        setArmy(contextData)
        setIsLoading(false)
      }

      return ()=>{
        console.log("Closeapp cleanup")
      }
  }, []);

  return (
    <ArmyProvider value={{value:army, setValue:setArmy, isLoading:isLoading}}>
      <Component {...pageProps} />
    </ ArmyProvider>
  )}
