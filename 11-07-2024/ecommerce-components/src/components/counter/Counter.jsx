import ImgPlus from "../icons/Img-Plus";
import ImgMinus from "../icons/Img-Minus";
import styles from "./Counter.module.css";
import { useState } from "react";
import classNames from "classnames";

const Counter = () => {
  const [count, setCount] = useState(0);
  const handleClick = (e) => {
    if (e.currentTarget.id === "minus") {
      setCount(count - 1);
      if (count === 0) {
        setCount(0);
      }
    } else {
      setCount(count + 1);
    }
  };
  return (
    <div className={classNames(styles.counter)}>
      <button id="minus" onClick={handleClick}>
        <ImgMinus />
      </button>
      <div>{count}</div>
      <button id="plus" onClick={handleClick}>
        <ImgPlus />
      </button>
    </div>
  );
};

export default Counter;
