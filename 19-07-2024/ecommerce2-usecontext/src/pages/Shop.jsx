import { useContext } from "react";
import { toDoContext } from "../providers/ToDoContext";
import Card from "../components/Card";
const Shop = () => {
  const { toDos } = useContext(toDoContext);

  return (
    <>
      <div className="w-full h-full grid grid-cols-3 p-6 rounded-md bg-green-500">
        {toDos.map((todo) => (
          <>
            <Card key={todo.id} todo={todo} />
          </>
        ))}
      </div>
    </>
  );
};
export default Shop;
