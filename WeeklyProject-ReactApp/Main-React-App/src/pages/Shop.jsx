import { useContext, useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { ProductContext } from "../providers/ProductContext";
import "react-loading-skeleton/dist/skeleton.css";
import getProductsList from "../DataClient/DataClient";
import Items3 from "../components/atoms/items3";

const Shop = () => {
  const { products } = useContext(ProductContext);
  const [cart, setCart] = useState([]);

  const getArray = () => {
    const array = [];
    for (let i = 0; i < products.length; i++) {
      const element = products[i];
      array.push(element);
    }
    return array;
  };

  const getCart = async () => {
    if (cart.length === 0) {
      const data = await getProductsList();
      const array = getArray();
      const filteredProducts = array
        .map((id) => data.find((product) => product.id == id))
        .filter(Boolean);
      setCart(filteredProducts);
    }
  };

  useEffect(() => {
    getCart();
  }, []);

  return (
    <>
      {cart.length === 0 ? (
        <>
          <div className="bg-green-200 items-center">
            <div className="bg-green-200 flex flex-col items-center text-2xl">
              ...Your Cart is EMPTY...
            </div>
            <div className="bg-green-200  grid grid-cols-2 style-none gap-2 p-4 ">
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
            <div className="bg-green-600  grid grid-cols-2 style-none gap-2 p-4 ">
              {cart.map((item) => (
                <Items3 key={item.id} item={item} />
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
};
export default Shop;
