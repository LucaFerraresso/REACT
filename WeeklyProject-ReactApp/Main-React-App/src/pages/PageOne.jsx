import { useContext, useEffect, useState } from "react";
import getProductsList from "../DataClient/DataClient";
import Item from "../components/atoms/item";
import { ProductContext, setProductContext } from "../providers/ProductContext";
import {
  FavoriteContext,
  setFavoriteContext,
} from "../providers/FavoriteContext";

const favoriteArray = [];
const cartArray = [];

export const PageOne = () => {
  const [data, setData] = useState([]);
  const [isloading, setIsLoading] = useState(true);
  const [input, setInput] = useState("");
  const { setProducts } = useContext(setProductContext);
  const { setFavorites } = useContext(setFavoriteContext);
  const { products } = useContext(ProductContext);
  const { favorites } = useContext(FavoriteContext);

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
    favoriteArray.push(e.currentTarget.id);
    console.log("favorites", favoriteArray);
    setFavorites(favorites + 1);
  };
  const addToCart = (e) => {
    cartArray.push(e.currentTarget.id);
    console.log("carrello", cartArray);
    setProducts(products + 1);
  };

  return (
    <>
      <div>
        <h1>products count {products.length}</h1>
        <h1>favorite count {favorites.length}</h1>
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
