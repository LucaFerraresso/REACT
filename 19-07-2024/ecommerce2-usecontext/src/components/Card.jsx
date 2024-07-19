import Modal from "./Modal";
import { useState, useContext } from "react";
import { setToDoContext, toDoContext } from "../providers/ToDoContext";

const Card = ({ todo }) => {
  const { setToDos } = useContext(setToDoContext);
  const { toDos } = useContext(toDoContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  //ad click aggiungo l'oggetto card al carrello ce si trova nella final page
  const handleClick = (todo) => {
    setToDos([...toDos, todo]);
  };
  const removeItem = (e) => {
    e.preventDefault();
    const newTodos = toDos.filter((item) => item.id !== todo.id);
    setToDos(newTodos);
  };

  return (
    <>
      <div key={todo.id} className="bg-green-500 border-black rounded-sm">
        <h1>Title:{todo.title}</h1>
        <h2>Completed:{todo.completed}</h2>
        <h3>UserId:{todo.userId}</h3>
        <h3>Id:{todo.id}</h3>
        <h1
          className="text-white text-bold text-2xl"
          onClick={() => setIsModalOpen(true)}
        >
          MORE INFO
        </h1>
        <button className="bg-red-600" onClick={() => handleClick(todo)}>
          ADD TO CART
        </button>
        <br />
        <button
          className="bg-red-600 text-white"
          value={todo}
          onClick={removeItem}
        >
          remove
        </button>
      </div>
      <Modal
        value={todo}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      >
        <div className="flex flex-col border-2 border-black bg-orange-500">
          <h2>Id:{todo.id}</h2>
          <h1>title:{todo.title}</h1>
          <p>description:{todo.description}</p>
          <h2>userId:{todo.userId}</h2>
        </div>
      </Modal>
    </>
  );
};
export default Card;
