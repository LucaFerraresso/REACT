import styles from "./Form.module.css";

const Form = ({ children }) => {
  return (
    <div className={styles.form}>
      <h1>Mortage Calculator</h1>
      <label>MortageAmount</label>
      <input type="number" placeholder="$" />
    </div>
  );
};

export default Form;
