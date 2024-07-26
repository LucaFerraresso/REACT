import { useContext, useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import {
  FavoriteContext,
  setFavoriteContext,
} from "../providers/FavoriteContext";
import "react-loading-skeleton/dist/skeleton.css";
import getProductsList from "../DataClient/DataClient";
import Item from "../components/atoms/item";

const Favorite = () => {
  const [isloading, setIsLoading] = useState(true);
  const { favorites } = useContext(FavoriteContext);
  const [favorite, setFavorite] = useState([]);

  const getArray = () => {
    const array = [];
    for (let i = 0; i < favorites.length; i++) {
      const element = favorites[i];
      array.push(element);
    }
    return array;
  };

  const getFavorite = async () => {
    if (favorite.length === 0) {
      const data = await getProductsList();
      const array = getArray();
      const filteredFavorites = array
        .map((id) => data.find((product) => product.id == id))
        .filter(Boolean);
      setFavorite(filteredFavorites);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getFavorite();
  }, []);

  return (
    <>
      {favorite.length === 0 ? (
        <>
          <div className="bg-orange-200 items-center">
            <div className="bg-orange-200 flex flex-col items-center text-2xl">
              ...Your Favorite List is EMPTY...
            </div>
            <div className="bg-orange-200  grid grid-cols-2 style-none gap-2 p-4 ">
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
            </div>
          </div>
        </>
      ) : (
        <>
          <div>
            <div className="bg-orange-600  grid grid-cols-2 style-none gap-2 p-4 ">
              {favorite.map((item) => (
                <Item key={item.id} item={item} />
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
};
export default Favorite;
