import { useState, useEffect } from 'react';
import Layout from '../components/layout'
// import styles from '../styles/global.css';
import Army from './../components/ArmyPage/ArmyPage'


  
  export default function HomePage() {

    return (
      <Layout>
        {/* <div className="container mx-auto border-black border-2"> */}
          <Army/>
         {/* </div> */}
      </Layout>
    );
  }