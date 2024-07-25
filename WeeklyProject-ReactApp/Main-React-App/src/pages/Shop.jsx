import { useContext, useEffect, useState } from "react";
import { ProductContext, setProductContext } from "../providers/ProductContext";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const Shop = () => {
  const [product, setProduct] = useState([]);
  const { products } = useContext(ProductContext);
  const { setProducts } = useContext(setProductContext);
  console.log(products);

  return (
    <>
      <div className="pageTwo">
        <h1>qui renderizzo i prodotti</h1>
        <div className="container">
          {product.length === 0 ? (
            <Skeleton count={1} height={300} width={300} />
          ) : (
            product.map((product) => (
              <div className="card" key={product.id}>
                <img src={product.image} alt={product.title} />
                <h3>{product.title}</h3>
                <p>{product.price}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};
export default Shop;
