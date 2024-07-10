import styles from "./Footer.module.css";

const Footer = ({ children }) => {
  return (
    <footer className={styles.footer}>
      <h1>Footer</h1>
      <h2>Visualizzo a DOM il children del footer</h2>
      {children}
    </footer>
  );
};

export default Footer;
