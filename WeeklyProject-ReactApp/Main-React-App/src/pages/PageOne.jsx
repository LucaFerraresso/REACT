//RENDERIZZO TUTTE LE TODO RICEVUTE IN RISPOSTA DALLA CHIAMATA AL SERVER
import { useEffect, useState } from "react";
import Card from "../components/atoms/Card/";
import getProductsList from "../DataClient/DataClient";

export const PageOne = () => {
  const [data, setData] = useState([]);
  const [isloading, setIsLoading] = useState(true);

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

  //al primo rendering voglio eseguire getData
  return (
    <>
      <h1>all Products</h1>
      <div className="bg-blue-500  flex flex-col style-none gap-2 p-4 ">
        {/*voglio mappare data, ma usando il components card*/}
        {data.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </>
  );
};

export default PageOne;
