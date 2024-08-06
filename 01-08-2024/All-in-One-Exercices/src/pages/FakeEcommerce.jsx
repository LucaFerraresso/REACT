import React, { useEffect, useState } from "react";
import { getProducts } from "../API/getData";
import EcommerceCard from "../components/atoms/EcommerceCard";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FakeEcommerce = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState({});
  const [quantities, setQuantities] = useState({});

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
    console.log("Adding to cart:", productId, quantity);
    if (quantity > 0) {
      setCart((prev) => ({
        ...prev,
        [productId]: (prev[productId] || 0) + quantity,
      }));
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

  return (
    <div className="min-h-screen bg-rose-50 p-4">
      <h1 className="text-center text-3xl font-bold text-rose-900 mb-6">
        Fake Ecommerce
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
