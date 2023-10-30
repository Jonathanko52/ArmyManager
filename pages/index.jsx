import { useState, useEffect } from 'react';
import Layout from '../components/layout'
// import styles from '../styles/global.css';


  
  export default function HomePage() {

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
      <Layout>
        <div className="container mx-auto border-black border-2">
        INDEX
         </div>
      </Layout>
    );
  }