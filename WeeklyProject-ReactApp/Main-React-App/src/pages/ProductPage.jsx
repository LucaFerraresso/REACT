import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Item from "../components/atoms/item";
import getProductsList from "../DataClient/DataClient";
const favoriteProduct = [];

const ProductPage = () => {
  const { id } = useParams();
  const [isloading, setIsLoading] = useState(true);

  const [product, setProduct] = useState([]);

  const getProducts = async () => {
    try {
      const data = await getProductsList();
      const filteredData = await data.filter((product) => product.id == id);
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
  const handleFavorite = (e) => {
    favoriteProduct.push(e.currentTarget.id);
    console.log(favoriteProduct);
    return favoriteProduct;
  };

  return (
    <>
      <div className="bg-blue-200  grid grid-cols-2 style-none gap-2 p-4 ">
        {product.map((item) => (
          <Item
            key={item.id}
            item={item}
            description={item.description}
            handleFavorite={handleFavorite}
          />
        ))}
      </div>
    </>
  );
};

export default ProductPage;
