import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");
  const [id, setId] = useState("");
  useEffect(() => {
    //console.log("dentro lo useEffect");
    getTitles(count);
  }, [count]);

  const getTitles = async (id) => {
    if (id === 0) {
      return;
    } else {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      const data = await response.json();
      //console.log(data);
      //console.log(data.title);
      setMessage(data.title);
      setId(data.id);
    }
  };

  const handleChange = (e) => {
    //console.log(e.target.value);
    getTitles(e.target.value);
    setId(e.target.value);
  };
  const handleClick = (e) => {
    if (e.target.name === "plus") {
      setCount(count + 1);
      getTitles(count + 1);
    } else if (e.target.name === "minus") {
      if (count === 1) return;
      setCount(count - 1);
      getTitles(count - 1);
    }
  };
  const reset = () => {
    setCount(0);
    setMessage("");
    setId("");
  };
  return (
    <>
      <div className={styles.container}>
        <div className={styles.div1}>
          <h2>inserisci un id per ricevere il titolo corrispondente</h2>

          <input
            type="number"
            placeholder="Enter id"
            onChange={handleChange}
          ></input>
        </div>
        <div className={styles.div2}>
          {id && <h2>id:{id}</h2>}
          {message && <h2>title:{message}</h2>}
        </div>

        <div className={styles.div3}>
          <button onClick={handleClick} name="minus">
            minus
          </button>
          <h2>{count}</h2>
          <button onClick={handleClick} name="plus">
            plus
          </button>
        </div>
        <div className={styles.buttondiv}>
          <button onClick={reset}>
            <h1>R</h1>
            <h1>E</h1>
            <h1>S</h1>
            <h1>E</h1>
            <h1>T</h1>
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
