//RENDERIZZO TUTTE LE TODO RICEVUTE IN RISPOSTA DALLA CHIAMATA AL SERVER
import { useEffect, useState } from "react";
export const PageOne = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);
  return (
    <>
      <h1>ELENCO CON TUTTE LE TODO</h1>
      <div className="bg-blue-500  grid grid-cols-4 style-none gap-2 p-4 ">
        {data.map((item) => (
          <>
            <div
              key={item.id}
              className="flex flex-col justify-around items-center border-x-white"
            >
              <h1 className="bg-blue-700 text-white border-black">
                Title:{item.title}
              </h1>
              <hr />
              <h3 className="bg-blue-700 text-white border-black">
                Completed:{item.completed.toString()}
              </h3>
              <hr />
              <h3 className="bg-blue-700 text-white border-black">
                User Id:{item.userId}
              </h3>
              <hr />
              <h3 className="bg-blue-700 text-white border-black">
                Id:{item.id}
              </h3>
              <hr />
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default PageOne;
