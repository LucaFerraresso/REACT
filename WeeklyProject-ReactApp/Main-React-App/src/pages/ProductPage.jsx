import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import getProductsList from "../DataClient/DataClient";
import Card from "../components/atoms/Card/";
import CardTW from "../components/atoms/CardTW";

const ProductPage = () => {
  const { id } = useParams();
  const [isloading, setIsLoading] = useState(true);

  const [product, setProduct] = useState([]);

  const getProducts = async () => {
    try {
      //const data = await getProductsList();
      const data = await fetch("https://fakestoreapi.com/products");
      const json = await data.json();
      //voglio filtrare l'array per id e visualizzare solo il prodotto cliccato
      const filteredData = await json.filter((product) => product.id == id);
      setProduct(filteredData);
      console.log(filteredData);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getProducts();
  }, []);

  if (isloading) {
    return <h1>loading...</h1>;
  }

  return (
    <>
      <h1>ProductPage: product id cliccato :{id} </h1>
      {product.map((item) => (
        <CardTW key={item.id} item={item} />
      ))}
    </>
  );
};

export default ProductPage;
