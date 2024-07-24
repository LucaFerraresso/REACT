import { useEffect, useState } from "react";
import MiniCard from "../components/atoms/miniCard";
import Card3 from "../components/atoms/Card3";

export const PageThree = () => {
  const [input, setInput] = useState("");
  const [data, setData] = useState([]);
  const getData = async () => {
    try {
      const products = await fetch("https://fakestoreapi.com/products");
      const json = await products.json();
      setData(json);
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

      <div className="flex flex-col gap-4">
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
