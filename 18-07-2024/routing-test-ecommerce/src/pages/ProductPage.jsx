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
    const cartItem = JSON.stringify(product);
    localStorage.setItem("product", cartItem);
  };

  return (
    <>
      <div className="max-w-sm mx-auto bg-green-400 shadow-md rounded-lg overflow-hidden">
        <div className="bg-gray-200 p-4">
          <h2 className="text-lg font-semibold text-gray-700">
            Item:"{product.id}"{" "}
          </h2>
        </div>
        <div className="bg-gray-200 p-4 ">
          <img src={product.images} alt="product image" />
        </div>
        <div className="p-6">
          <h2 className="text-xl font-bold mb-2 text-gray-800">
            Title: "{product.title}"
          </h2>
          <h2 className="text-lg text-gray-700 mb-4">
            Price: "{product.price}€"
          </h2>
          <p className="text-gray-600">Description: "{product.description}"</p>
        </div>
        <div className="p-4 bg-gray-200 text-center">
          <button
            id={product.id}
            onClick={addItem}
            className="bg-gray-800 text-white font-bold py-2 px-4 rounded-full shadow-md hover:bg-gray-700 transform hover:scale-105 transition-transform duration-300 ease-in-out"
          >
            ADD TO CART
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
