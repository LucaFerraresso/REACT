import { useContext, useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { ProductContext, setProductContext } from "../providers/ProductContext";
import "react-loading-skeleton/dist/skeleton.css";
import getProductsList from "../DataClient/DataClient";

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
    console.log("array finale favorite", array);
  };
  const getproducts = async () => {
    const data = await getProductsList();
    setIsLoading(false);
  };

  useEffect(() => {
    getproducts();
    getArray();
  }, []);

  return (
    <>
      <div>...rendering product</div>
      <div className="bg-blue-200 grid grid-cols-2 style-none gap-2 p-4 ">
        {cart.length === 0 || isloading ? (
          <>
            <Skeleton height={300} />
            <Skeleton height={300} />
            <Skeleton height={300} />
            <Skeleton height={300} />
          </>
        ) : (
          cart.map((item) => {
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
export default Shop;
