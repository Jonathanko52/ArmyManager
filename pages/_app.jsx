import "../styles/global.css";
import { ArmyProvider } from "../context/ArmyContext.js";
import { useState, useEffect } from "react";
import AWSConfig from "./api/config/aws-config";

const AWS = require("aws-sdk");
AWS.config.update(AWSConfig);

export default function App({ Component, pageProps }) {
  // Wraps around all components

  const [army, setArmy] = useState({
    armyReady: { units: [] },
    armyStandby: { units: [] },
    armyUnpainted: { units: [] },
    armyId: 0,
    armyName: "",
    faction: "",
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let contextData;
    let newArmyId;
    console.log(localStorage.getItem("warHammerArmy"));
    if (localStorage.getItem("warHammerArmy")) {
      contextData = JSON.parse(localStorage.getItem("warHammerArmy"));
    } else {
      newArmyId = parseInt(Math.random() * 1000);
      localStorage.setItem(
        "warHammerArmy",
        JSON.stringify({
          armyName: "",
          faction: "",
          armyReady: [],
          armyStandby: [],
          armyUnpainted: [],
          armyPoints: 0,
          armyId: newArmyId,
        })
      );
    }
    if (!contextData) {
      newArmyId = parseInt(Math.random() * 1000);
      localStorage.setItem(
        "warHammerArmy",
        JSON.stringify({
          armyName: "",
          faction: "",
          armyReady: [],
          armyStandby: [],
          armyUnpainted: [],
          armyPoints: 0,
          armyId: newArmyId,
        })
      );
    }

    if (contextData) {
      setArmy(contextData);
      setIsLoading(false);
    }

    return () => {
      console.log("Closeapp cleanup");
    };
  }, []);

  return (
    <ArmyProvider
      value={{ value: army, setValue: setArmy, isLoading: isLoading }}>
      <Component {...pageProps} />
    </ArmyProvider>
  );
}
