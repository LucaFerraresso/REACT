import { useContext, useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import {
  FavoriteContext,
  setFavoriteContext,
} from "../providers/FavoriteContext";
import "react-loading-skeleton/dist/skeleton.css";
import getProductsList from "../DataClient/DataClient";

const Favorite = () => {
  const { favorites } = useContext(FavoriteContext);
  console.log("array di partenza", favorites);
  const [favorite, setFavorite] = useState([]);
  //non e' un array ,e' una stringa
  //voglio trasformarlo in array
  //passare da stringa ad array
  //per farlo devo usare JSON.parse
  const array = [];
  const getArray = () => {
    for (let i = 0; i < favorites.length; i++) {
      const element = favorites[i];
      array.push(element);
    }
    console.log("array finale", array);
    return array;
  };
  const getproducts = async () => {
    //filtra il data con gli id dell'array sopra
    //poi renderizzo gli oggetti filtrati
    const data = await getProductsList();
    console.log("data", data);
  };

  useEffect(() => {
    getproducts();
    getArray();
    setFavorite(array);
  }, []);

  return (
    <>
      <div>...rendering</div>
      {favorite.map((item) => {
        return (
          <div key={item.id}>
            <p>{item.title}</p>
          </div>
        );
      })}
    </>
  );
};
export default Favorite;
