import styles from "./App.module.css";
import Button from "./components/button/Buttons";
import Counter from "./components/counter/Counter";
import Header from "./components/header/Header";
import ImgCart from "./components/icons/Img-Cart";
import LightBox from "./components/lightbox/LightBox";

function App() {
  return (
    <>
      <div className={styles.app}>
        <Header />
        <div className={styles.container}>
          <div className={styles.product}>
            {" "}
            <LightBox />
          </div>
          <div className={styles.shop}>
            <div className={styles.counterButton}>
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
