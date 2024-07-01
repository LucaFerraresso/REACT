import "./Footer.css";
import { useState } from "react";

const Footer = () => {
  const [counter, setCounter] = useState(0);
  const handleClick = () => {
    //console.log("click");
    //al click deve estrarre un numero random da 0 a 40
    setCounter(Math.floor(Math.random() * 40));
    //console.log("numero estratto:", setCounter);
  };

  return (
    <div className="footer">
      <h1>Genera un numero random da 0 a 40: [" {counter} "]</h1>
      <button onClick={handleClick}>Generate</button>
    </div>
  );
};

export default Footer;
