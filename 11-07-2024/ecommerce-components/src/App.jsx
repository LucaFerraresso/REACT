import { useState } from "react";
import styles from "./App.module.css";
import Button from "./components/button/Buttons";
import Counter from "./components/counter/Counter";
import Header from "./components/header/Header";
import ImgCart from "./components/icons/Img-Cart";
import LightBox from "./components/lightbox/LightBox";
import Menu from "./components/menu/Menu";

function App() {
  const [count, setCount] = useState(0);

  const onClick = (e) => {
    if (e.target.id === "plus") {
      setCount(count + 1);
    } else {
      if (count === 0) return;
      setCount(count - 1);
    }
  };
  return (
    <>
      <div className={styles.app}>
        <Header>
          <h3>counter:" {count} "</h3>
        </Header>

        {/* qui passo il valore del counter */}
        <div className={styles.container}>
          <div className={styles.product}>
            {" "}
            <LightBox />
          </div>
          <div className={styles.shop}>
            <Menu />
            <div className={styles.counterButton} onClick={onClick}>
              <Counter />
              <Button text={"Add to cart"}>
                <ImgCart fill="#000" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
