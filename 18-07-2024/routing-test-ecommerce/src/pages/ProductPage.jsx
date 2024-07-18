import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  useEffect(() => {
    console.log(id);
    if (!id) return;
    fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, []);
  const addItem = () => {
    console.log("add to cart");
    localStorage.setItem("product", product);
  };

  return (
    <div>
      <h1>Product: {id}</h1>
      <img src={product.images} alt="" />
      <p>title:{product.title}</p>
      <p>desctiption:{product.description}</p>
      <p>price:"{product.price}€"</p>
      <button onClick={addItem}>ADD TO CART</button>

      <br />
    </div>
  );
};

export default ProductPage;
