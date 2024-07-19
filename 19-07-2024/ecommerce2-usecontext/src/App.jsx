import { useEffect, useState, useContext } from "react";

import Card from "./components/Card";

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
      <div className="w-full h-full grid grid-cols-3 p-6 rounded-md bg-green-900 gap-2">
        {todo.map((todo) => (
          <Card key={todo.id} todo={todo} />
        ))}
      </div>
    </>
  );
}

export default App;
