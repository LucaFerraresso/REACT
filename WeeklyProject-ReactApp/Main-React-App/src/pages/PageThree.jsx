import { useEffect, useState } from "react";
import MiniCard from "../components/atoms/miniCard";
import Card3 from "../components/atoms/Card3";

export const PageThree = () => {
  const [input, setInput] = useState("");
  const [data, setData] = useState([]);
  const getData = async () => {
    try {
      //voglio fare una chiamata fetch e visualizzare la risposta
      const products = await fetch("https://fakestoreapi.com/products");
      //const products = await fetch("https://api.storerestapi.com/products");
      const json = await products.json();

      setData(json);
      console.log(json);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  const handleChange = (e) => {
    setInput(e.target.value.toLowerCase());
  };
  return (
    <>
      <h1>all Products API 2 , MiniCard components</h1>

      <div className="flex gap-10">
        <h2>Filter products by title:</h2>
        <input
          type="text"
          placeholder="Filter products by title"
          onChange={handleChange}
        />
      </div>

      <div>
        {data
          .filter((item) => item.title.toLowerCase().includes(input))
          .map((item) => (
            <Card3 key={item.id} item={item} />
          ))}
      </div>
    </>
  );
};

export default PageThree;
