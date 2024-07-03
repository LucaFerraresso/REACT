import { useState } from "react";
import styles from "./Form.module.css";

const Form = () => {
  const [input, setInput] = useState({
    name: "",
    surname: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    console.log(e.target.value, e.target.name);
    setInput((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <>
      <form className={styles.form}>
        <h1>Contact Us</h1>
        <div className={styles.div1}>
          <div className={styles.name}>
            <label htmlFor="name">First Name *</label>
            <input name="name" type="text" onChange={(e) => handleChange(e)} />
            <h3>{input.name}</h3>
          </div>

          <div className={styles.surname}>
            <label htmlFor="surname">Last Name *</label>
            <input
              name="surname"
              type="text"
              onChange={(e) => {
                handleChange(e);
              }}
            />
            <h3>{input.surname}</h3>
          </div>
        </div>
        <div className={styles.div2}>
          <label htmlFor="email">Email Address *</label>
          <input
            type="email"
            name="email"
            onChange={(e) => {
              handleChange(e);
            }}
          />
          <h3>{input.email}</h3>
        </div>
        <div className={styles.titleCheckBoxes}>
          <label>Query Type *</label>
        </div>
        <div className={styles.div3}>
          <div className={styles.general}>
            <input type="checkbox" />
            General Enquiry
          </div>
          <div className={styles.support}>
            <input type="checkbox" />
            Support Request
          </div>
        </div>
        <div className={styles.div4}>
          <label htmlFor="message">Message *</label>
          <textarea
            rows="5"
            name="message"
            onChange={(e) => {
              handleChange(e);
            }}
          />
          <h3>{input.message}</h3>
        </div>

        <div className={styles.div5}>
          <input type="checkbox" id="newsletter" />I consent to being concacted
          by the team *
        </div>

        <button className={styles.button} type="submit">
          Submit
        </button>
      </form>
    </>
  );
};
export default Form;
