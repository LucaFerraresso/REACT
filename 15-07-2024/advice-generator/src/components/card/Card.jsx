import styles from "./Card.module.css";
import { useState } from "react";
import divider_desktop from "../../../public/pattern-divider-desktop.svg";
import dice_img from "../../../public/icon-dice.svg";

const Card = () => {
  const getAdvice = async () => {
    const adviceId = Math.floor(Math.random() * 229 + 1);
    //console.log(adviceId);
    const res = await fetch(`https://api.adviceslip.com/advice/${adviceId}`);
    const data = await res.json();
    const message = data.slip.advice;

    //console.log("chiamata fetch", "id:", adviceId, "message:", message);
    setAdvice(message);
    setId(adviceId);
  };

  const [advice, setAdvice] = useState("clicca sul pulsante qui sotto");
  const [id, setId] = useState("000");

  return (
    <div className={styles.card}>
      <h1>ADVICE #{id}</h1>
      {advice && <h2>{advice}</h2>}
      <img src={divider_desktop} alt="divider-desktop" />

      <button className={styles.button} onClick={getAdvice}>
        <img src={dice_img} alt="dice-img" />
      </button>
    </div>
  );
};

export default Card;
