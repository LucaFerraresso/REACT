import styles from "./Header.module.css";

const Header = ({ children }) => {
  return (
    <header className={styles.header}>
      <h1>Header</h1>

      <h2>Visualizzo a Dom il children dell'header</h2>
      {children}
    </header>
  );
};

export default Header;
