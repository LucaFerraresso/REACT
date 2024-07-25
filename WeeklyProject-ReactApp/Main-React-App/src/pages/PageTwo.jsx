//qui filtro i risultati facendo fetch di natura diversa.

import { useEffect, useState } from "react";
import CardTW from "../components/atoms/CardTW";
const favoriteProduct = [];

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
  const handleFavorite = (e) => {
    console.log(e.currentTarget);
    console.log(e.currentTarget.id);
    //qui devo aggiungere il prodotto ai preferiti

    //e se l'array ontiene gia' elementi
    if (favoriteProduct.length > 0) {
      //voglio pushare il restoperator. ...favoriteproduct
      favoriteProduct.push(...favoriteProduct, e.currentTarget.id);
      console.log(favoriteProduct);
    } else {
      favoriteProduct.push(e.currentTarget.id);
    }
    console.log("finale", favoriteProduct);
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
            <CardTW
              key={item.id}
              item={item}
              description={" click read more"}
              handleFavorite={handleFavorite}
            />
          ))}
      </div>
    </>
  );
};

export default PageTwo;
