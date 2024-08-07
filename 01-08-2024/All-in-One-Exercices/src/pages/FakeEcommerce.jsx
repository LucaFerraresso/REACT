import React, { useEffect, useState } from "react";
import { getProducts } from "../API/getData";
import EcommerceCard from "../components/atoms/EcommerceCard";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import { useCart } from "../useContext/CartContext";

const FakeEcommerce = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [quantities, setQuantities] = useState({});
  const { cart, addToCart } = useCart();

  const getItems = async () => {
    setLoading(true);
    try {
      const data = await getProducts();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddToCart = (productId, quantity) => {
    if (quantity > 0) {
      addToCart(productId, quantity);
      setQuantities((prev) => ({ ...prev, [productId]: 1 }));
    }
  };

  useEffect(() => {
    getItems();
  }, []);

  const handleQuantityChange = (productId, change) => {
    setQuantities((prev) => {
      const currentQuantity = prev[productId] || 1;
      const newQuantity = Math.max(1, currentQuantity + change);
      return { ...prev, [productId]: newQuantity };
    });
  };

  const totalItemsInCart = Object.values(cart).reduce(
    (total, quantity) => total + quantity,
    0
  );

  return (
    <div className="min-h-screen bg-rose-50 p-4 text-center items-center">
      <h1 className="text-center text-3xl font-bold text-rose-900 mb-6 flex justify-between items-center">
        Fake Ecommerce
        <Link to="/exercise/fakeecommerce/cart" className="relative">
          <svg
            className="w-8 h-8 text-rose-900"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 3h18l-1.5 9H6L3 3zm3 14h12a3 3 0 003-3H6a3 3 0 003 3z"
            />
          </svg>
          {totalItemsInCart > 0 && (
            <span className="absolute -top-1 -right-1 bg-red text-white rounded-full text-xs px-1">
              {totalItemsInCart}
            </span>
          )}
        </Link>
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {loading
          ? Array.from({ length: 9 }).map((_, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md">
                <div className="w-full h-48 bg-gray-300 animate-pulse rounded-t-lg"></div>
                <div className="p-4">
                  <div className="h-4 bg-gray-300 animate-pulse rounded mb-2"></div>
                  <div className="h-4 bg-gray-300 animate-pulse rounded mb-2"></div>
                  <div className="h-6 bg-gray-300 animate-pulse rounded"></div>
                </div>
              </div>
            ))
          : products.map((product) => {
              const productQuantity = quantities[product.id] || 1;

              return (
                <EcommerceCard
                  key={product.id}
                  product={product}
                  quantity={productQuantity}
                  onIncrease={() => handleQuantityChange(product.id, 1)}
                  onDecrease={() => handleQuantityChange(product.id, -1)}
                  onAddToCart={() =>
                    handleAddToCart(product.id, productQuantity)
                  }
                />
              );
            })}
      </div>
      <ToastContainer />
    </div>
  );
};

export default FakeEcommerce;
