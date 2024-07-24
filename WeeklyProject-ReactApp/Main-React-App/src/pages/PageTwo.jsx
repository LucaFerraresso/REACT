//qui filtro i risultati facendo fetch di natura diversa.

import { useEffect, useState } from "react";
import MiniCard from "../components/atoms/miniCard";

export const PageTwo = () => {
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

      <div className="grid grid-cols-2">
        {data
          .filter((item) => item.title.toLowerCase().includes(input))
          .map((item) => (
            <MiniCard key={item.id} item={item} />
          ))}
      </div>
    </>
  );
};

export default PageTwo;
