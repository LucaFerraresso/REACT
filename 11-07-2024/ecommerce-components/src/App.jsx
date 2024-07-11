import "./App.module.css";
import Button from "./components/button/Buttons";
import Counter from "./components/counter/Counter";
import ImgCart from "./components/icons/Img-Cart";
import LightBox from "./components/lightbox/LightBox";

function App() {
  return (
    <>
      <Button text={"Add to cart"}>
        <ImgCart fill="#000" />
      </Button>
      <Counter />
      <LightBox />
    </>
  );
}

export default App;
