import React, { useEffect, useState } from "react";
import { getProducts } from "../API/getData";

const FakeEcommerce = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const getItems = async () => {
    setLoading(true);
    try {
      const data = await getProducts();
      setProducts(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getItems();
  }, []);

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
          : products.map((product, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md">
                <img
                  src={product.image.thumbnail}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="p-4">
                  <h2 className="text-rose-900 text-product font-semibold mb-2">
                    {product.name}
                  </h2>
                  <p className="text-rose-500 mb-2">{product.category}</p>
                  <p className="text-green text-xl font-bold">
                    ${product.price.toFixed(2)}
                  </p>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};

export default FakeEcommerce;
