import styles from "./AdviceUI.module.css";
import patternDesktop from "./pattern-divider-desktop.svg";
import icon_dice from "./icon-dice.svg";
import { useState, useEffect } from "react";
const AdviceUI = () => {
  const [AdviceMsg, setAdviceMsg] = useState({});
  const [isLoading, setIsLoading] = useState(true)
  const AdviceApiFun = async () => {
    setIsLoading(true)
    const respones = await fetch("https://api.adviceslip.com/advice");
    const data = await respones.json();
    setAdviceMsg(data.slip);
    setIsLoading(false)
    console.log(document.body.clientWidth)
  };
  useEffect(() => {
    AdviceApiFun();
  }, []);

  return (
    <div className={styles.main}>
      <p>ADVICE #{AdviceMsg.id}</p>
      <h2>
        <q>{isLoading ? 'Loading...' : AdviceMsg.advice}</q>
      </h2>
      <img src={patternDesktop} alt="Desktop-pattern" />
      <button onClick={AdviceApiFun} className={styles.iconDice}>
        <img src={icon_dice} alt="icon-dice" />
      </button>
    </div>
  );
};

export default AdviceUI;
