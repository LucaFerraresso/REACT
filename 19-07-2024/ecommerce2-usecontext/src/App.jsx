import { useEffect, useState } from "react";

function App() {
  const [todo, setToDo] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/todo")
      .then((response) => response.json())
      .then((json) => {
        console.log(json), setToDo(json);
      });
  }, []);
  return (
    <>
      <div className="w-full h-full grid grid-cols-3 p-6 rounded-md bg-green-500">
        {todo.map((todo) => (
          <div
            className="flex flex-col border-2 border-black bg-orange-500"
            key={todo.id}
          >
            <h2>Id:{todo.id}</h2>
            <h1>title:{todo.title}</h1>
            <p>description:{todo.description}</p>
            <h2>userId:{todo.userId}</h2>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
