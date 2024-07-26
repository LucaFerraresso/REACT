import { useContext, useEffect, useState } from "react";
import getProductsList from "../DataClient/DataClient";
import Items3 from "../components/atoms/items3";
import { ProductContext, setProductContext } from "../providers/ProductContext";
import {
  FavoriteContext,
  setFavoriteContext,
} from "../providers/FavoriteContext";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const PageOne = () => {
  const [data, setData] = useState([]);
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
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const handleChange = (e) => {
    setInput(e.target.value.toLowerCase());
  };
  const addToFavorite = (e) => {
    const favoriteArray = [];
    const id = e.currentTarget.id;
    favoriteArray.push(e.currentTarget.id);
    //console.log("favorites", favoriteArray);
    setFavorites(favorites + id);
    return favoriteArray;
  };
  const addToCart = (e) => {
    const cartArray = [];
    const id = e.currentTarget.id;
    cartArray.push(e.currentTarget.id);
    //console.log("carrello", cartArray);
    setProducts(products + id);
    return cartArray;
  };

  return (
    <>
      <div className="flex gap-4 items-center p-4 bg-gray-100 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold text-gray-700">
          Filter products by title:
        </h2>
        <input
          type="text"
          placeholder="Filter products by title"
          onChange={handleChange}
          className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div className="bg-blue-200  grid grid-cols-2 style-none gap-2 p-4 ">
        {data.length === 0 ? (
          <>
            <Skeleton height={300} />
            <Skeleton height={300} />
            <Skeleton height={300} />
            <Skeleton height={300} />
            <Skeleton height={300} />
            <Skeleton height={300} />
            <Skeleton height={300} />
            <Skeleton height={300} />
            <Skeleton height={300} />
            <Skeleton height={300} />
            <Skeleton height={300} />
            <Skeleton height={300} />
          </>
        ) : (
          data
            .filter((item) => item.title.toLowerCase().includes(input))
            .map((item) => (
              <Items3
                key={item.id}
                item={item}
                handleFavorite={addToFavorite}
                description={"Click READ MORE"}
                addToCart={addToCart}
              />
            ))
        )}
      </div>
    </>
  );
};

export default PageOne;
