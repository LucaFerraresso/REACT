import styles from "./Card.module.css";
import DATA from "../../DATA.json";
import { useState } from "react";

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
      <h1 className={styles.h1}>ADVICE #{DATA[index].id}</h1>
      <p className={styles.p}>"{DATA[index].advice}"</p>
      <div className={styles.svg}>
        <svg
          className={styles.svg}
          width="375"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g className={styles.g} fill="none" fillRule="evenodd">
            <path fill="#4F5D74" d="M0 8h196v1H0zM248 8h196v1H248z" />
            <g className={styles.g} transform="translate(212)" fill="#CEE3E9">
              <rect width="6" height="16" rx="3" />
              <rect x="14" width="6" height="16" rx="3" />
            </g>
          </g>
        </svg>
      </div>

      <button className={styles.button} onClick={changeAdvice}>
        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"
            fill="#202733"
          />
        </svg>
      </button>
    </div>
  );
};

export default Card;
