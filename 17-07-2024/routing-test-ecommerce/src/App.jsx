import { useEffect, useState } from "react";
function App() {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((response) => response.json())
      .then((json) => setProduct(json[1]));
  }, []);
  //al primo render mi pusha il prodotto in localstorage

  //ora voglio fare le stesse cose , ma non al primo rendering. ma al click del bottone
  localStorage.removeItem("product");
  const handleClick = () => {
    console.log("cliccato");
    if (product.length === 0) return;
    console.log(product);
    localStorage.setItem("product", JSON.stringify(product));
    window.location.href = "/shop";
  };
  return (
    <>
      <h1 className="bg-red-600 text-center text-white text-3xl font-bold 100vh">
        Routing test and exercises
      </h1>
      <br />
      <h2>Arrivo dall'API</h2>
      <br />
      <div className="flex flex-col justify-center text-center bg-slate-400">
        {/* DA QUI INIZIA IL DIV CONTENENTE LA CARD */}
        <div className="max-w-sm mx-auto bg-green-400 shadow-md rounded-lg overflow-hidden">
          <div className="bg-gray-200 p-4">
            <h2 className="text-lg font-semibold text-gray-700">
              ID:"{product.id}"{" "}
            </h2>
          </div>
          <div className="p-6">
            <h2 className="text-xl font-bold mb-2 text-gray-800">
              Title: "{product.title}"
            </h2>
            <h2 className="text-lg text-gray-700 mb-4">
              Prezzo: "{product.price}€"
            </h2>
            <p className="text-gray-600">
              Descrizione: "{product.description}"
            </p>
          </div>
          <div class="p-4 bg-gray-200 text-center">
            <button
              onClick={handleClick}
              className="bg-gray-800 text-white font-bold py-2 px-4 rounded-full shadow-md hover:bg-gray-700 transform hover:scale-105 transition-transform duration-300 ease-in-out"
            >
              Acquista Ora
            </button>
          </div>
        </div>
        {/* FINISCE QUI IL DIV CONTENENTE LA CARD */}
      </div>
      <br />
    </>
  );
}

export default App;
