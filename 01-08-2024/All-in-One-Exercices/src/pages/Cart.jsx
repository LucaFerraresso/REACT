import React, { useEffect, useState } from "react";
import { useCart } from "../useContext/CartContext";
import { getProducts } from "../API/getData";
import EcommerceCard from "../components/atoms/EcommerceCard";

const Cart = () => {
  const { cart } = useCart();
  console.log(cart);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const getItem = async () => {
    setLoading(true);
    try {
      const response = await getProducts();
      const filteredCart = response.filter((product) =>
        Object.keys(cart).includes(product.id.toString())
      );
      console.log("filteredCart", filteredCart);
      setProducts(filteredCart);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getItem();
  }, []);

  return (
    <>
      <div className="ml-[400px]">
        <h1>Cart</h1>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div>
            {products &&
              products.map((product) => (
                <EcommerceCard key={product.id} product={product} />
              ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
