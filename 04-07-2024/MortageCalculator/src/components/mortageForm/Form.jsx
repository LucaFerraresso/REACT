import { useState } from "react";
import styles from "./Form.module.css";

const Form = () => {
  const [input, setInput] = useState({
    mortage_amount: "",
    mortage_term: "",
    interest_rate: "",
    repayment: "",
    interest_only: "",
  });

  const ClearAll = () => {
    setInput({
      mortage_amount: "",
      mortage_term: "",
      interest_rate: "",
      repayment: "",
      interest_only: "",
    });
  };
  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    //console.log(e.target.name, e.target.value);
    setInput((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { mortage_amount, mortage_term, interest_rate } = input;
    //console.log(mortage_amount, mortage_term, interest_rate);
    const calcolatedResult =
      (parseFloat(mortage_amount) *
        parseFloat(interest_rate) *
        parseFloat(mortage_term)) /
      100;
    setResult(calcolatedResult);
    //console.log(calcolatedResult);
  };

  return (
    <div className={styles.container}>
      <form className={styles.divform}>
        <div className={styles.divtitle}>
          <h1>Mortage Calculator</h1>
          <button
            className={styles.button1}
            name="clearAllBtn"
            onClick={(e) => {
              ClearAll;
            }}
          >
            clear all
          </button>
        </div>
        <div className={styles.mortageAmount}>
          <label>Mortage Amount</label>
          <input
            name="mortage_amount"
            type="number"
            placeholder="€"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className={styles.mortageType}>
          <div className={styles.mortage1}>
            {/*inizio div-input*/}
            <label>Mortage Term</label>
            <input
              name="mortage_term"
              type="number"
              placeholder="Years"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className={styles.mortage2}>
            <label>Interest Rate</label>
            <input
              name="interest_rate"
              type="number"
              placeholder="%"
              onChange={(e) => handleChange(e)}
            />
          </div>
        </div>
        {/*fine div-input*/}
        {/*inizio div-checkbox*/}
        <div className={styles.checkbox}>
          <label>MortageType</label>
          <input
            name="repayment"
            type="checkbox"
            onChange={(e) => handleChange(e)}
          />
          Repayment
          <input
            name="interest_only"
            type="checkbox"
            onChange={(e) => handleChange(e)}
          />
          Internest Only
        </div>
        {/*fine div-checkbox*/}
        <div className={styles.calculate}>
          <button
            name="calculateBtn"
            onClick={handleSubmit}
            className={styles.button2}
          >
            Calculate Repayments
          </button>
        </div>
      </form>
      {/*inizio div-risultato*/}
      <div className={styles.divresult}>
        <h1>Your Results</h1>
        <p>
          Your results are shown based on the information you provided. To
          adjust the results, edit the form and click "calculate repayments"
          again.
        </p>
        <div className={styles.divcalcolo}>
          <h3>Your mounthly repayments</h3>
          <h1>{result / 12}€</h1>
          <h3>total you'll repay over the term</h3>
          <h2>{result / 1}€</h2>
        </div>
      </div>
    </div>
  );
};

export default Form;
