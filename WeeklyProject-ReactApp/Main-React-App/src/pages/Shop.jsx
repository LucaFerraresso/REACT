import { useContext, useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { ProductContext, setProductContext } from "../providers/ProductContext";
import "react-loading-skeleton/dist/skeleton.css";
import getProductsList from "../DataClient/DataClient";
import Item from "../components/atoms/item";

const array = [];
const Shop = () => {
  const [isloading, setIsLoading] = useState(true);
  const { products } = useContext(ProductContext);
  const [cart, setCart] = useState([]);

  const getArray = () => {
    for (let i = 0; i < products.length; i++) {
      const element = products[i];
      array.push(element);
    }
  };
  const filteredCart = [];

  const getCart = async () => {
    const data = await getProductsList();
    for (let i = 0; i < array.length; i++) {
      const id = array[i];
      const filteredData = await data.find((product) => product.id == id);
      filteredCart.push(filteredData);

      console.log(filteredData);

      setIsLoading(false);
    }
    console.log("definitivo", filteredCart);
    setCart(filteredCart);
  };

  useEffect(() => {
    getCart();
    getArray();
  }, []);

  return (
    <>
      <div>...cart is loading...</div>
      <div className="bg-green-200  grid grid-cols-2 style-none gap-2 p-4 ">
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
          cart.map((item) => <Item key={item.id} item={item} />)
        )}
      </div>
    </>
  );
};
export default Shop;
