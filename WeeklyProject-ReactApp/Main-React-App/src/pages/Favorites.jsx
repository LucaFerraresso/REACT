import { useContext, useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import {
  FavoriteContext,
  setFavoriteContext,
} from "../providers/FavoriteContext";
import "react-loading-skeleton/dist/skeleton.css";
import getProductsList from "../DataClient/DataClient";
import Item from "../components/atoms/item";

const array = [];

const Favorite = () => {
  const [isloading, setIsLoading] = useState(true);
  const { favorites } = useContext(FavoriteContext);
  const [favorite, setFavorite] = useState([]);

  const getArray = () => {
    for (let i = 0; i < favorites.length; i++) {
      const element = favorites[i];
      array.push(element);
    }
  };
  const filteredProducts = [];

  const getFavorite = async () => {
    const data = await getProductsList();
    for (let i = 0; i < array.length; i++) {
      const id = array[i];
      const filteredData = await data.find((product) => product.id == id);
      filteredProducts.push(filteredData);

      console.log(filteredData);

      setIsLoading(false);
    }
    console.log("definitivo", filteredProducts);
    setFavorite(filteredProducts);
  };

  useEffect(() => {
    getFavorite();
    getArray();
  }, []);

  return (
    <>
      <div>...favorites are loading...</div>
      <div className="bg-orange-200  grid grid-cols-2 style-none gap-2 p-4 ">
        {isloading ? (
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
          favorite.map((item) => <Item key={item.id} item={item} />)
        )}
      </div>
    </>
  );
};
export default Favorite;
