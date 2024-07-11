import "./App.module.css";
import Button from "./components/button/Buttons";
import ImgCart from "./components/icons/img-Cart";

function App() {
  return (
    <>
      <Button text={"Add to cart"}>
        <ImgCart fill="#000" />
      </Button>
    </>
  );
}

export default App;
