import { useEffect, useState } from "react";
const Shop = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    if (localStorage.getItem("product") === null) return;
    const product = JSON.parse(localStorage.getItem("product"));
    setProduct(product);
  }, []);

  const remove = () => {
    localStorage.removeItem("product");
    setProduct([]);
  };
  return (
    <div className="flex flex-col justify-center items-center bg-blue-700 text-white">
      <br />
      <h2>"Arrivo dal LOCAL STORAGE"</h2>
      <br />
      <div className="max-w-sm mx-auto bg-blue-400 shadow-md rounded-lg overflow-hidden">
        <div className="bg-gray-200 p-4">
          <h2 className="text-lg font-semibold text-gray-700">
            Id:"{product.id}"
          </h2>
        </div>
        <div className="p-6">
          <h2 className="text-xl font-bold mb-2 text-gray-800">
            Title: "{product.title}"
          </h2>
          <h2 className="text-lg text-gray-700 mb-4">
            Price: "{product.price}€"
          </h2>
          <p className="text-gray-600">Descrition: "{product.description}"</p>
        </div>
        <div className="p-4 bg-gray-200 text-center">
          <button
            onClick={remove}
            className="bg-gray-800 text-white font-bold py-2 px-4 rounded-full shadow-md hover:bg-gray-700 transform hover:scale-105 transition-transform duration-300 ease-in-out"
          >
            REMOVE
          </button>
        </div>
      </div>
      <br />
    </div>
  );
};
export default Shop;
