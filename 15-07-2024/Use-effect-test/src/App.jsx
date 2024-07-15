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
      {/* inizio container principale */}
      <div className={styles.container}>
        {/* inizio container di sinistra */}
        <div className={styles.div1}>
          <h3>Inserisci un id per ricevere il titolo corrispondente</h3>
          <input
            type="number"
            placeholder="Enter id"
            onChange={handleChange}
          ></input>
        </div>
        {/* fine container di sinistra */}

        {/* inizio container di destra */}
        <div className={styles.div2}>
          {/* <h1>hello world</h1> */}
          {id && <h3>id: {id} </h3>}
          {message && <h3>Title: {message} </h3>}
        </div>
        {/* fine container di destra */}

        {/* container del counter  */}
        <div className={styles.div3}>
          <button onClick={handleClick} name="minus">
            minus
          </button>
          <h3>" {count} "</h3>
          <button onClick={handleClick} name="plus">
            plus
          </button>
        </div>
        {/* fine container del counter  */}

        {/* inizio container bottone reset */}
        <div className={styles.buttondiv}>
          <button onClick={reset}>
            <h1>R</h1>
            <h1>E</h1>
            <h1>S</h1>
            <h1>E</h1>
            <h1>T</h1>
          </button>
        </div>
        {/* fine container bottone reset */}
      </div>
      {/* fine container principale */}
    </>
  );
}

export default App;
