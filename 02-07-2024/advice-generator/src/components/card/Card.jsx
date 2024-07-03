import styles from "./Card.module.css";
import DATA from "../../DATA.json";
import { useState } from "react";
import divider_desktop from "../../../public/pattern-divider-desktop.svg";
import dice_img from "../../../public/icon-dice.svg";

const Card = (props) => {
  //console.log(DATA);
  const changeAdvice = () => {
    const index = Math.floor(Math.random() * DATA.length);
    setIndex(index);
    //console.log(index, DATA[index].advice);
  };

  const [index, setIndex] = useState(0);

  return (
    <div className={styles.card}>
      <h1>ADVICE #{DATA[index].id}</h1>
      <h2>"{DATA[index].advice}"</h2>
      <img src={divider_desktop} alt="divider-desktop" />

      <button className={styles.button} onClick={changeAdvice}>
        <img src={dice_img} alt="dice-img" />
      </button>
    </div>
  );
};

export default Card;
