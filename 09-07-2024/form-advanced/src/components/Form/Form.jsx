import { useState } from "react";
import styles from "./Form.module.css";

const initialState = {
  id: self.crypto.randomUUID(),
  name: "",
  cognome: "",
  citta: "",
};
const Form = () => {
  const [input, setInput] = useState(initialState);
  const [alunni, setAlunni] = useState([]);
  console.log("alunni fuori", alunni);

  //ora l'utente puo' vedere a dom le sue interazioni
  const handleChange = (e) => {
    setInput((input) => ({
      ...input,
      [e.target.id]: e.target.value,
    }));
  };
  const handleSubmit = (e) => {
    const nome = input.name;
    const cognome = input.cognome;
    const citta = input.citta;
    e.preventDefault();
    if (!input.name || !input.cognome || !input.citta) return;
    setAlunni([...alunni, { nome, cognome, citta }]);
    setInput(initialState);
  };
  const handle = (e) => {
    console.log(e.target);
  };

  //ora al click, mi filtra l'array di alunni e mi restituisce gli alunni con citta uguale a quella che ho cliccato
  const handleDelete = (e) => {
    const newArray = alunni.filter(
      (item) => item.citta === e.target.textContent
    );
    setAlunni(newArray);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h1>Advanced Form</h1>
      <label>Nome</label>
      <input
        type="text"
        placeholder="nome"
        id="name"
        value={input.name}
        onChange={handleChange}
      />
      <label>Cognome</label>
      <input
        type="text"
        placeholder="cognome"
        id="cognome"
        value={input.cognome}
        onChange={handleChange}
      />
      <label>Citta</label>
      <input
        type="text"
        placeholder="citta"
        id="citta"
        value={input.citta}
        onChange={handleChange}
      />
      <button type="submit">conferma</button>

      <div key={self.crypto.randomUUID()} className={styles.container2}>
        <h1>Filter buttons</h1>
        {alunni.map((item) => {
          return <button onClick={handleDelete}>{item.citta}</button>;
        })}
        <h1>Classmates</h1>
        {alunni.map((item) => {
          return (
            <ul key={self.crypto.randomUUID()}>
              <li key={self.crypto.randomUUID()}>
                {item.nome}
                {item.cognome}
              </li>
            </ul>
          );
        })}
      </div>
    </form>
  );
};

export default Form;
