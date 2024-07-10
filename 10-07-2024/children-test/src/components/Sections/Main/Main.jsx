import styles from "./Main.module.css";

const Main = () => {
  return (
    <main className={styles.main}>
      <h1>Main</h1>

      <h3>1. Ora visualizzo a dom il children di layout, giusto per provare</h3>
      <h3>2. Lo inserisco sotto l'header, sotto il main e sotto il footer</h3>
      <h3>
        3. Provando a visualizzare anche il children del main, va in ERRORE
      </h3>
    </main>
  );
};

export default Main;
