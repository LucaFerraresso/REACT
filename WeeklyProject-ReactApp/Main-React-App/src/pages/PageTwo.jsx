//qui filtro i risultati facendo fetch di natura diversa.
//RENDERIZZO TUTTE LE TODO CON INDICE COMPLETED FALSE

import { useEffect, useState } from "react";

export const PageTwo = () => {
  const [data, setData] = useState([]);
  //al primo rendering visualizzo quelle completate
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => {
        const completedTodos = json.filter((todo) => todo.completed);
        return completedTodos;
      })
      .then((json) => setData(json))
      .then((json) => console.log(json));
  }, []);
  return (
    <>
      <h1>TODO COMPLETATE</h1>
      <div className="bg-green-500  grid grid-cols-4 style-none gap-2 p-4 ">
        {data.map((item) => (
          <>
            <div
              key={item.id}
              className="flex flex-col justify-around items-center border-x-white"
            >
              <h1 className="bg-green-700 text-white border-black">
                Title:{item.title}
              </h1>
              <hr />
              <h3 className="bg-green-700 text-white border-black">
                Completed:{item.completed.toString()}
              </h3>
              <hr />
              <h3 className="bg-green-700 text-white border-black">
                User Id:{item.userId}
              </h3>
              <hr />
              <h3 className="bg-green-700 text-white border-black">
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

export default PageTwo;
