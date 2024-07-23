import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import getProductsList from "../DataClient/DataClient";
import Card from "../components/atoms/Card/";

const ProductPage = () => {
  const { id } = useParams();
  const [isloading, setIsLoading] = useState(true);

  const [product, setProduct] = useState([]);

  const getProducts = async () => {
    try {
      const data = await getProductsList();
      //voglio filtrare l'array per id e visualizzare solo il prodotto cliccato
      const filteredProduct = await data.filter((product) => product.id == id);
      setProduct(filteredProduct);
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
        <Card key={item.id} item={item} />
      ))}
    </>
  );
};

export default ProductPage;
