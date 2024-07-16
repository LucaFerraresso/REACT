import "./App.module.css";
import { useState, useEffect } from "react";
import styles from "./App.module.css";

function App() {
  const [todo, setTodo] = useState([]);
  const [completed, setCompleted] = useState([]);
  const [notCompleted, setNotCompleted] = useState([]);
  const [isHidden, setIsHidden] = useState(true);
  const [isHidden2, setIsHidden2] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos").then((response) =>
      response.json().then((data) => {
        console.log(data);

        const completed = data.filter((item) => item.completed === true);
        console.log("array completed", completed);
        setCompleted(completed);

        const notCompleted = data.filter((item) => item.completed === false);
        console.log("array notCompleted", notCompleted);
        setNotCompleted(notCompleted);
      })
    );
  }, []);
  const handleClick = () => {
    const random = Math.floor(Math.random() * 199) + 1;
    getTodo(random);
  };
  const getTodo = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((response) => response.json())
      .then((json) => setTodo(json));
  };
  const handleChange = (e) => {
    const id = e.target.value;
    //setto id con il valore dell'input
    getTodo(id);
  };
  //funzioni per gestire le liste todo. hidden, (non visibili)
  const rendertodo = (e) => {
    const { name } = e.target;
    if (name === "completed") {
      if (!isHidden) {
        setIsHidden(true);
      }
      setIsHidden(false);
    }
    if (name === "notCompleted") {
      if (!isHidden2) {
        setIsHidden2(true);
      }
      setIsHidden2(false);
    }
  };
  //funzione per rispristinare le todo aperte
  const reset = () => {
    setIsHidden(true);
    setIsHidden2(true);
  };

  return (
    <>
      <div className={styles.container}>
        <h1>hello effect</h1>
        <div className={styles.filterBar}>
          <h2>Filter by id:</h2>
          <input
            placeholder="Insert an ID"
            type="text"
            onChange={handleChange}
          />
          {/* al click, faccio una chiamata per id,estraendolo randomicamente */}
          <button onClick={handleClick}>GET TODO</button>
        </div>
        <div className={styles.card}>
          <h2>ID:"{todo.id}"</h2>
          <h2>TODO:"{todo.title}"</h2>
          {todo && <h2>COMPLETED:"{todo.completed ? "YES" : "NO"}"</h2>}
        </div>

        <div className={styles.list1}>
          <div className={styles.section1}>
            <h2>COMPLETED</h2>
            <button name="completed" on onClick={rendertodo}>
              COMPLETED
            </button>
          </div>
          <hr></hr>

          <ul className={isHidden ? styles.Completed : styles.hidden}>
            {completed.map((item) => (
              <li key={item.id}>{item.title}</li>
            ))}
          </ul>
        </div>
        <div className={styles.list2}>
          <div className={styles.section2}>
            <h2>NOT COMPLETED</h2>
            <button name="notCompleted" onClick={rendertodo}>
              NOT COMPLETED
            </button>
          </div>
          <hr></hr>

          <ul className={isHidden2 ? styles.Completed : styles.hidden}>
            {notCompleted.map((item) => (
              <li key={item.id}>{item.title}</li>
            ))}
          </ul>
        </div>
        <div className={styles.reset}>
          <button onClick={reset}>RESET</button>
        </div>
      </div>
    </>
  );
}

export default App;
