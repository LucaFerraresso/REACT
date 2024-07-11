import "./App.module.css";
import Button from "./components/button/Buttons";
import Counter from "./components/counter/Counter";
import ImgCart from "./components/icons/Img-Cart";

function App() {
  return (
    <>
      <Button text={"Add to cart"}>
        <ImgCart fill="#000" />
      </Button>
      <Counter />
    </>
  );
}

export default App;
