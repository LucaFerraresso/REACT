import { useContext, useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import {
  FavoriteContext,
  setFavoriteContext,
} from "../providers/FavoriteContext";
import "react-loading-skeleton/dist/skeleton.css";
import getProductsList from "../DataClient/DataClient";

const array = [];
const DATA = [];
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
  const getproducts = async () => {
    const data = await getProductsList();
    DATA.push(data);
    console.log("data", DATA);
    console.log("dentro il get product", array);
    setIsLoading(false);
  };

  useEffect(() => {
    getproducts();
    getArray();
  }, []);

  return (
    <>
      <div>...rendering favorite</div>
      <div className="bg-blue-200 grid grid-cols-2 style-none gap-2 p-4 ">
        {favorite.length === 0 || isloading ? (
          <>
            <Skeleton height={300} />
            <Skeleton height={300} />
            <Skeleton height={300} />
            <Skeleton height={300} />
          </>
        ) : (
          favorite.map((item) => {
            return (
              <div key={item.id}>
                <p>{item.title}</p>
              </div>
            );
          })
        )}
      </div>
    </>
  );
};
export default Favorite;
