import styles from "./Menu.module.css";

const Menu = ({ children }) => {
  return (
    <nav className={styles.menu}>
      <h2>SNEAKER COMPANY</h2>
      <h1>Fall Limited Edition Sneakers</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus,
        voluptas dolor! Adipisci, incidunt obcaecati commodi quas veniam est.
        Quas molestiae hic similique, perferendis, aut inventore neque odit
        provident porro veniam autem ullam et quibusdam quidem.
      </p>
      <span>
        125€<span>50%</span>
      </span>
    </nav>
  );
};

export default Menu;
