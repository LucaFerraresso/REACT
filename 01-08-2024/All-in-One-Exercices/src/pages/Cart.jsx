import React, { useEffect, useState } from "react";
import { useCart } from "../useContext/CartContext";
import { getProducts } from "../API/getData";
import EcommerceCard from "../components/atoms/EcommerceCard";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Cart = () => {
  const { cart, updateCart } = useCart();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const getItem = async () => {
    setLoading(true);
    try {
      const response = await getProducts();
      const filteredCart = response.filter((product) =>
        Object.keys(cart).includes(product.id.toString())
      );
      setProducts(filteredCart);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getItem();
  }, [cart]);

  const handleRemove = (productId) => {
    updateCart(productId, -1);
    toast.error("Item removed from cart", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const totalCost = products.reduce(
    (total, product) => total + product.price * (cart[product.id] || 0),
    0
  );

  return (
    <>
      <div className="flex flex-row justify-center gap-6 mt-4 mb-4">
        <h1>Cart</h1>
        <p>Items in cart: {Object.keys(cart).length}</p>
        <p>
          Total:{" "}
          {Object.values(cart).reduce((total, quantity) => total + quantity, 0)}
        </p>
        <Link to="/exercise/fakeecommerce">
          <button>Back to Shop</button>
        </Link>
      </div>
      <div className="flex flex-wrap justify-center">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="flex flex-wrap gap-6 p-4 justify-center">
            {products &&
              products.map((product) => (
                <div key={product.id} className="relative w-60">
                  <EcommerceCard
                    product={product}
                    quantity={cart[product.id]}
                    onIncrease={() => updateCart(product.id, 1)}
                    onDecrease={() => handleRemove(product.id)}
                    onAddToCart={(product, quantity) =>
                      updateCart(product.id, quantity)
                    }
                  />
                </div>
              ))}
          </div>
        )}
      </div>
      <div className="mt-4 p-4 bg-gray-200 rounded shadow-md w-full max-w-md mx-auto">
        <h2 className="text-xl font-bold">Summary</h2>
        <ul className="list-disc list-inside">
          {products.map((product) => (
            <li key={product.id}>
              {product.title} - {cart[product.id]} x ${product.price.toFixed(2)}{" "}
              = ${(cart[product.id] * product.price).toFixed(2)}
            </li>
          ))}
        </ul>
        <h3 className="text-lg font-bold mt-2">
          Total Cost: ${totalCost.toFixed(2)}
        </h3>
      </div>
      <ToastContainer />
    </>
  );
};

export default Cart;
