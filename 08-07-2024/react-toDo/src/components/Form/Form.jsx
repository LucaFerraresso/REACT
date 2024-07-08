import styles from "./Form.module.css";

const Form = () => {
  const submit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  return (
    <form className={styles.container} onSubmit={submit}>
      <h2>To-Do List</h2>
      <input type="text" placeholder="To Do" />
      <button type="submit" placeholder="Add a task">
        Add a task
      </button>
    </form>
  );
};

export default Form;
