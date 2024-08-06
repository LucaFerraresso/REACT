import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../API/getData";

const ProductPage = () => {
  const { id } = useParams();

  const getProduct = async () => {
    const response = await getProducts();
    const product = response.find((product) => product.id == id);
    //console.log("response", response);
    const productWithImage = { ...product, image: product.image.thumbnail };
    setProduct(productWithImage);
  };
  const [product, setProduct] = useState([]);
  useEffect(() => {
    getProduct();
  }, []);

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col gap-2 w-[300px]">
          <h1>name:{product.name}</h1>
          <img src={product.image} alt={product.name} />
          <p>price:{product.price}$</p>
          <p>id:{product.id}</p>
          <p>category:{product.category}</p>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
