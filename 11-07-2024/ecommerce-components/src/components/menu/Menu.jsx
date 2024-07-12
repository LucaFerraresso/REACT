import styles from "./Menu.module.css";

const Menu = ({ children }) => {
  return (
    <nav className={styles.menu}>
      <h2>SNEAKER COMPANY</h2>
      <h1>Fall Limited Edition Sneakers</h1>
      <p>
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll sìwithstand everything
        the weather can offer.
      </p>
      <span>
        €125.00 <span className={styles.sale}>50%</span>
      </span>

      <strike>250€</strike>
    </nav>
  );
};

export default Menu;
