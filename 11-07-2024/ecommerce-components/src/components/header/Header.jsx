import ImgCart from "../icons/Img-Cart";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <h1>Sneakers</h1>
      <ul>
        <li>Collection</li>
        <li>Men</li>
        <li>Woman</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <button onClick={(e) => console.log(e.currentTarget)}>
        <ImgCart />
      </button>
      <img
        src="../public/images/image-avatar.png"
        alt=""
        width={35}
        height={35}
      />
      <br />
    </div>
  );
};

export default Header;
