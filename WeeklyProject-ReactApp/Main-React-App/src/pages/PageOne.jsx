import { useEffect, useState } from "react";
import { useContext } from "react";
import getProductsList from "../DataClient/DataClient";
import Item from "../components/atoms/item";
const favoriteProduct = [];
const cart = [];

export const PageOne = () => {
  const [data, setData] = useState([]);
  const [isloading, setIsLoading] = useState(true);
  const [input, setInput] = useState("");
  const [favorites, setFavorites] = useState([]);
  const [cart, setCart] = useState([]);
  const [navBarCart, setNavBarCart] = useState([]);
  const [navBarFavorites, setNavBarFavorites] = useState([]);

  const getProducts = async () => {
    try {
      const data = await getProductsList();
      setData(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  if (isloading) {
    return <h1>loading...</h1>;
  }
  const handleChange = (e) => {
    setInput(e.target.value.toLowerCase());
  };
  const handleFavorite = (e) => {
    //al click del cuore, da un array vuoto,viene pushato il valore dell'id del currentTarget
    favoriteProduct.push(e.currentTarget.id);
    console.log("favorites", favoriteProduct);
    //gestisco il valore dell'array favorites finale
    setFavorites(favoriteProduct);
    //gestisco il valore nella navbar
    setNavBarFavorites(favoriteProduct.length);
  };
  const addToCart = (e) => {
    cart.push(e.currentTarget.id);
    console.log(cart);
    setCart(cart);
    setNavBarCart(cart.length);
  };

  return (
    <>
      <div>
        <h1>counter shop {cart.length}</h1>
      </div>
      <div>
        <h1>counter favorites {favorites.length}</h1>
      </div>

      <div className="flex gap-10">
        <h2>Filter products by title:</h2>
        <input
          type="text"
          placeholder="Filter products by title"
          onChange={handleChange}
        />
      </div>
      <div className="bg-blue-200  grid grid-cols-2 style-none gap-2 p-4 ">
        {data
          .filter((item) => item.title.toLowerCase().includes(input))
          .map((item) => (
            <Item
              key={item.id}
              item={item}
              handleFavorite={handleFavorite}
              description={"Click READ MORE"}
              addToCard={addToCart}
            />
          ))}
      </div>
    </>
  );
};

export default PageOne;
