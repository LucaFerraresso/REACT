import styles from "./Card.module.css";

const Card = () => {
  return (
    <div className={styles.card}>
      <h1 className="text-3xl font-bold underline">title</h1>
      <p>description</p>
      <span>prezzo</span>
      <button>button</button>
    </div>
  );
};

export default Card;
