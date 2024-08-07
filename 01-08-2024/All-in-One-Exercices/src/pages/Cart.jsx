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
      <div className="flex flex-col sm:flex-row p-4 items-center text-center justify-center gap-4 mt-4 mb-4 bg-white shadow-md rounded-lg">
        <h1 className="text-3xl font-extrabold text-gray-800">Cart</h1>
        <p className="text-lg text-gray-600">
          Items in cart: {Object.keys(cart).length}
        </p>
        <p className="text-lg text-gray-600">
          Total:{" "}
          {Object.values(cart).reduce((total, quantity) => total + quantity, 0)}
        </p>
        <Link to="/exercise/fakeecommerce">
          <button className="bg-indigo-500 text-white px-6 py-2 rounded-lg hover:bg-indigo-600 transition transform hover:scale-105 shadow-md">
            Back to Shop
          </button>
        </Link>
      </div>
      <div className="flex flex-wrap justify-center">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="flex flex-wrap gap-6 p-4 justify-center">
            {products &&
              products.map((product) => (
                <div key={product.id} className="relative w-full sm:w-60">
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
            <li key={product.id} className="truncate">
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
