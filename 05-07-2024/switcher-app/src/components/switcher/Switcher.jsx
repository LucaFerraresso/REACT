import { useState } from "react";
import styles from "./Switcher.module.css";

const Switcher = () => {
  //lo stato iniziale
  const [input, setInput] = useState({
    slider: 50,
  });
  const [result, setResult] = useState(0);

  // funzione handle price, per gestire "l'onChange" dell'input nell'elemento input
  const handlePrice = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  //calcolo il valore. converto il valore dell'input nel valore desiderato
  //il valore dell'input lo decido io attraverso gli attributi
  //in questo caso devido che l'input va da 0 a 100

  //converto il valore dell'e.target.value in un valore espresso in euro
  const calcolatedPrice = () => {
    //barra nel valore minimo
    const min_price = 8.0;
    //barra nel valore massimo
    const max_price = 24.0;
    const price = min_price + ((max_price - min_price) * input.slider) / 100;
    //adesso lo voglio mettere a DOM
    return price;
  };

  const risultato = (price) => {
    setResult(calcolatedPrice(price));
    console.log(typeof calcolatedPrice(price), calcolatedPrice(price));
  };

  const reset = () => {
    window.location.reload();
  };

  return (
    <>
      {/* start switcher */}
      <div className={styles.switcher}>
        {/* title and price div*/}
        <div className={styles.title_price}>
          <h2>100k PAGEVIEWS</h2>
          <h1>{calcolatedPrice()}€</h1>
          <h2>/month</h2>
        </div>
        {/* fine title and price div */}
        {/* start range and button div */}
        <div className={styles.range}>
          <input
            type="range"
            name="slider"
            min="0"
            max="100"
            onChange={handlePrice}
          />
          <button>Monthly Billing</button>
        </div>
        {/* fine startbrange and button div*/}
        {/* start list and button */}
        <div className={styles.list_button}>
          {/* start list */}
          <div className={styles.list}>
            <ul>
              <li>Unlimited websites</li>
              <li>100% data ownership</li>
              <li>Email reports</li>
            </ul>
          </div>
          {/* fine list */}
          {/* start button  div*/}
          <div className={styles.button}>
            <button onClick={risultato}>Start my trial</button>
            <h1>{result}</h1>
            <button onClick={reset}>Clear all</button>
          </div>
          {/* fine button div */}
        </div>
        {/* fine start and button div */}
      </div>
      {/* fine switcher */}
    </>
  );
};

export default Switcher;
