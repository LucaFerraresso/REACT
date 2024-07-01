import Button from "../../Atoms/Button";
import { useState } from "react";
import "./Main.css";

function Main() {
  const [counter, setCounter] = useState(0);
  const handleClick = (event) => {
    //console.log(event.target);
    if (event.target.textContent === "Minus (-)") {
      setCounter(counter - 1);
    } else {
      setCounter(counter + 1);
    }
  };

  return (
    <div className="main">
      <h1>Counter da 0 a 10</h1>
      <button disabled={counter == 0} onClick={handleClick}>
        Minus (-)
      </button>{" "}
      <span id="counter">Counter: [ " {counter} " ] </span>
      <button disabled={counter == 10} onClick={handleClick}>
        Plus (+)
      </button>
    </div>
  );
}

export default Main;
