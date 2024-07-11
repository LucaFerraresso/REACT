import styles from "./Button.module.css";
import classNames from "classnames";

const Button = ({ text, children }) => {
  return (
    <button className={classNames(styles.button)}>
      {children}
      {text}
    </button>
  );
};

export default Button;
