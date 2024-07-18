import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Modal from "./components/Modal";

function App() {
  const [product, setProduct] = useState([]);
  const [cards, setCards] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  //al primo rendering , mi restituisce il prodotto all'indice 1
  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((response) => response.json())
      .then((json) => setProduct(json[1]));
  }, []);

  //renderizzo l'intero array di oggetti, non solo il primo elemento
  useEffect(() => {
    const data = fetch("https://api.escuelajs.co/api/v1/products");
    const res = data.then((response) => response.json());
    res.then((json) => setCards(json));
  }, []);

  //libero sempre il local storage al reload della pagina
  //localStorage.removeItem("product");
  localStorage.removeItem("cart");
  localStorage.removeItem("object Object");
  localStorage.removeItem("cartItems");
  localStorage.removeItem("Items");

  const handleClick = (e) => {
    if (product.length === 0) return;
    console.log(product);
    localStorage.setItem("product", JSON.stringify(product));
  };

  const handleClick2 = (e) => {
    console.log(e.currentTarget.id);
    const newProduct = cards.find(
      (product) => product.id === Number(e.currentTarget.id)
    );
    localStorage.setItem("product", JSON.stringify(newProduct));
    console.log(newProduct);
  };
  return (
    <>
      <div className="flex flex-col justify-center text-center bg-slate-400">
        <h1 className="bg-red-600 text-center text-white text-3xl font-bold 100vh">
          Routing test and exercises
        </h1>
        <br />
        <h2>Arrivo dall'API</h2>
        <br />
        <div className="flex flex-col justify-center text-center bg-slate-400">
          <h1
            className="text-white text-bold text-2xl"
            onClick={() => setIsModalOpen(true)}
          >
            PUOI APRIRE UNA MODALE CLICCANDO SOPRA QUESTO TITOLO:{" "}
            {product.title}
          </h1>
          {/* DA QUI INIZIA IL DIV CONTENENTE LA CARD */}
          <Modal
            product={product}
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          >
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
                <p className="text-gray-600">
                  Description: "{product.description}"
                </p>
                <h2 className="text-lg text-gray-700 mb-4">
                  <Link
                    className="font-bold text-white underline"
                    to={`product/${product.id}`}
                  >
                    MORE INFO
                  </Link>
                </h2>
              </div>
              <div className="p-4 bg-gray-200 text-center">
                <button
                  id={product.id}
                  onClick={(e) => handleClick(e)}
                  className="bg-gray-800 text-white font-bold py-2 px-4 rounded-full shadow-md hover:bg-gray-700 transform hover:scale-105 transition-transform duration-300 ease-in-out"
                >
                  ADD TO CART
                </button>
              </div>
            </div>
          </Modal>
          {/* FINISCE QUI IL DIV CONTENENTE LA CARD */}
        </div>
        <br />
      </div>
      <div className="bg-slate-700 text-white p-10 grid gri-cols-1 sm:grid-cols-2 gap-6 ">
        {cards.map((product) => (
          <div
            key={product.id}
            className=" max-w-sm mx-auto bg-green-400 shadow-md rounded-lg overflow-hidden"
          >
            <div className="bg-gray-200 p-4">
              <h2 className="text-lg font-semibold text-gray-700">
                Item:"{product.id}"
              </h2>
            </div>
            <div className="bg-gray-200 p-4">
              <img src={product.images} alt="product image" />
            </div>
            <div className="p-6">
              <h2 className="text-xl font-bold mb-2 text-gray-800">
                Title: "{product.title}"
              </h2>
              <h2 className="text-lg text-gray-700 mb-4">
                Price: "{product.price}€"
              </h2>
              <h2 className="text-lg text-gray-700 mb-4">
                <Link
                  className="font-bold text-white underline"
                  to={`product/${product.id}`}
                >
                  MORE INFO
                </Link>
              </h2>
            </div>
            <div className="p-4 bg-gray-200 text-center ">
              <button
                id={product.id}
                onClick={(e) => handleClick2(e)}
                className="bg-gray-800 text-white font-bold py-2 px-4 rounded-full shadow-md hover:bg-gray-700 transform hover:scale-105 transition-transform duration-300 ease-in-out"
              >
                ADD TO CART
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
