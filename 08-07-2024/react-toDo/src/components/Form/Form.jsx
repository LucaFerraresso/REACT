import styles from "./Form.module.css";
import { useState } from "react";

const Form = () => {
  const initialStage = [
    {
      id: self.crypto.randomUUID(),
      title: "Task 1",
    },
    {
      id: self.crypto.randomUUID(),
      title: "Task 2",
    },
  ];

  const [todos, setTodos] = useState(initialStage);
  const [input, setInput] = useState("");

  //funzione per aggiungere todos alla lista
  const addTodos = (e) => {
    e.preventDefault();
    if (!input.length) return;
    const id = self.crypto.randomUUID();
    const title = input;
    setTodos([...todos, { id, title }]);
    setInput("");
  };

  //funzione per vedere a dom l'input dell'utente
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  //funzione per reneìderizzare la nuova lista (-1 elemento)
  const handleDelete = (e) => {
    const newList = todos.filter((item) => item.id !== e.target.id);
    setTodos(newList);
  };
  return (
    <form className={styles.container} onSubmit={addTodos}>
      <h1>To-Do List</h1>
      <input
        value={input}
        type="text"
        placeholder="To Do"
        onChange={handleChange}
      />
      <input type="submit" value="ADD" onClick={addTodos} />
      <div className={styles.lista}>
        {todos.map((item) => {
          return (
            <h3 key={item.id}>
              {item.title}
              <button id={item.id} onClick={handleDelete}>
                delete
              </button>
            </h3>
          );
        })}
      </div>
    </form>
  );
};

export default Form;
