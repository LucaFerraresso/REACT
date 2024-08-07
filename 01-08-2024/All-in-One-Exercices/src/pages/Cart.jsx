import React, { useEffect, useState } from "react";
import { useCart } from "../useContext/CartContext";
import { getProducts } from "../API/getData";
import EcommerceCard from "../components/atoms/EcommerceCard";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart } = useCart();
  //console.log(cart);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const getItem = async () => {
    setLoading(true);
    try {
      const response = await getProducts();
      const filteredCart = response.filter((product) =>
        Object.keys(cart).includes(product.id.toString())
      );
      //console.log("filteredCart", filteredCart);
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
      <div className="flex flex-row justify-center gap-6 mt-4 mb-4">
        <h1>Cart</h1>
        <p>Items in cart: {Object.keys(cart).length}</p>
        <Link to="/exercise/fakeecommerce">
          <button>Back to Shop</button>
        </Link>
      </div>
      <div className="flex flex-wrap">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="flex flex-wrap gap-6 p-4">
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
