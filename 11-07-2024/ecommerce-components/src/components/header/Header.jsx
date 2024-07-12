import ImgCart from "../icons/Img-Cart";
import styles from "./Header.module.css";
import Button from "./../button/Buttons";

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

      <img scr="../public/images/image-avatar.png" width={30} height={30} />
      <br />
    </div>
  );
};

export default Header;
