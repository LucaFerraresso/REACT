//RENDERIZZO TUTTE LE TODO RICEVUTE IN RISPOSTA DALLA CHIAMATA AL SERVER
import { useEffect, useState } from "react";
import Card from "../components/atoms/Card/";
import getProductsList from "../DataClient/DataClient";

export const PageOne = () => {
  const [data, setData] = useState([]);
  const [isloading, setIsLoading] = useState(true);
  const [input, setInput] = useState("");

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

  //al primo rendering voglio eseguire getData
  return (
    <>
      <h1>all Products</h1>
      <div className="flex gap-10">
        <h2>Filter products by title:</h2>
        <input
          type="text"
          placeholder="Filter products by title"
          onChange={handleChange}
        />
      </div>
      <div className="bg-blue-500  flex flex-col style-none gap-2 p-4 ">
        {/*voglio mappare data, ma usando il components card*/}
        {/*voglio mappare data, ma prima filtro secondo l'input */}
        {data
          .filter((item) => item.title.toLowerCase().includes(input))
          .map((item) => (
            <Card key={item.id} item={item} />
          ))}
      </div>
    </>
  );
};

export default PageOne;
