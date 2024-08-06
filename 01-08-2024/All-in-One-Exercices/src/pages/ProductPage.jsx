import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../API/getData";
import EcommerceCard from "../components/atoms/EcommerceCard";

const ProductPage = () => {
  const { id } = useParams();

  const getProduct = async () => {
    const response = await getProducts();
    const product = response[id];
    console.log(product.image.thumbnail);
    const productWithImage = { ...product, image: product.image.thumbnail };
    setProduct(productWithImage);
  };
  const [product, setProduct] = useState([]);
  useEffect(() => {
    getProduct();
  }, []);
  //da rivedere lo style della card

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col gap-2 w-[300px]">
          <h1>{product.name}</h1>
          <p>{product.price}</p>
          <img src={product.image} alt={product.name} />
          <p>{product.description}</p>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
