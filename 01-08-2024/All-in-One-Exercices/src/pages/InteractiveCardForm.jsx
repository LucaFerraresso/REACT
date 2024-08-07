import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Componente per il modulo interattivo
const InteractiveForm = () => {
  const [cardholderName, setCardholderName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryMonth, setExpiryMonth] = useState("");
  const [expiryYear, setExpiryYear] = useState("");
  const [cvc, setCvc] = useState("");
  const [errors, setErrors] = useState({});

  // Funzione per validare gli input del modulo
  const validateForm = () => {
    const newErrors = {};

    if (!cardholderName)
      newErrors.cardholderName = "Cardholder name is required";
    if (!/^\d{16}$/.test(cardNumber))
      newErrors.cardNumber = "Card number must be 16 digits";
    if (!/^(0[1-9]|1[0-2])$/.test(expiryMonth))
      newErrors.expiryMonth = "Valid expiry month is required";
    if (!/^\d{4}$/.test(expiryYear))
      newErrors.expiryYear = "Valid expiry year is required";
    if (!/^\d{3}$/.test(cvc)) newErrors.cvc = "CVC must be 3 digits";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Funzione per gestire l'invio del modulo
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      toast.success("Form submitted successfully!");
      resetForm();
    } else {
      toast.error("Please fill out all fields correctly.");
    }
  };

  // Funzione per resettare il modulo
  const resetForm = () => {
    setCardholderName("");
    setCardNumber("");
    setExpiryMonth("");
    setExpiryYear("");
    setCvc("");
    setErrors({});
  };

  return (
    <div className="min-h-screen bg-neutral-light-grayish-violet flex flex-col justify-center items-center font-spaceGrotesk p-4">
      <h1 className="text-4xl mb-8 text-neutral-very-dark-violet">
        Interactive Card Details Form
      </h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg space-y-6"
      >
        <div>
          <label
            htmlFor="cardholderName"
            className="block text-neutral-dark-grayish-violet mb-2"
          >
            Cardholder Name
          </label>
          <input
            type="text"
            id="cardholderName"
            value={cardholderName}
            onChange={(e) => setCardholderName(e.target.value)}
            placeholder="e.g. Jane Doe"
            className={`w-full p-2 border rounded ${
              errors.cardholderName ? "border-red" : "border-gray-300"
            } focus:outline-none focus:ring-2 focus:ring-primary-linear-gradient`}
          />
          {errors.cardholderName && (
            <span className="text-red">{errors.cardholderName}</span>
          )}
        </div>

        <div>
          <label
            htmlFor="cardNumber"
            className="block text-neutral-dark-grayish-violet mb-2"
          >
            Card Number
          </label>
          <input
            type="text"
            id="cardNumber"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            placeholder="e.g. 1234 5678 9123 4567"
            className={`w-full p-2 border rounded ${
              errors.cardNumber ? "border-red" : "border-gray-300"
            } focus:outline-none focus:ring-2 focus:ring-primary-linear-gradient`}
          />
          {errors.cardNumber && (
            <span className="text-red">{errors.cardNumber}</span>
          )}
        </div>

        <div className="flex space-x-4 p-2 flex-row justify-center ">
          <div className="flex flex-col justify-between gap-4 items-center text-center p-2 ">
            <label
              htmlFor="expiryMonth"
              className="block text-neutral-dark-grayish-violet mb-2"
            >
              Expiry Month
            </label>
            <input
              type="text"
              id="expiryMonth"
              value={expiryMonth}
              onChange={(e) => setExpiryMonth(e.target.value)}
              placeholder="MM"
              className={`w-full p-2 border rounded ${
                errors.expiryMonth ? "border-red" : "border-gray-300"
              } focus:outline-none focus:ring-2 focus:ring-primary-linear-gradient`}
            />
            {errors.expiryMonth && (
              <span className="text-red">{errors.expiryMonth}</span>
            )}
          </div>

          <div className=" flex flex-col justify-between gap-4 items-center text-center p-2">
            <label
              htmlFor="expiryYear"
              className="block text-neutral-dark-grayish-violet mb-2"
            >
              Expiry Year
            </label>
            <input
              type="text"
              id="expiryYear"
              value={expiryYear}
              onChange={(e) => setExpiryYear(e.target.value)}
              placeholder="YY"
              className={`w-full p-2 border rounded ${
                errors.expiryYear ? "border-red" : "border-gray-300"
              } focus:outline-none focus:ring-2 focus:ring-primary-linear-gradient`}
            />
            {errors.expiryYear && (
              <span className="text-red">{errors.expiryYear}</span>
            )}
          </div>

          <div className=" flex flex-col justify-between gap-4 items-center text-center p-2">
            <label
              htmlFor="cvc"
              className="block text-neutral-dark-grayish-violet mb-2"
            >
              CVC
            </label>
            <input
              type="text"
              id="cvc"
              value={cvc}
              onChange={(e) => setCvc(e.target.value)}
              placeholder="e.g. 123"
              className={`w-full p-2 border rounded ${
                errors.cvc ? "border-red" : "border-gray-300"
              } focus:outline-none focus:ring-2 focus:ring-primary-linear-gradient`}
            />
            {errors.cvc && <span className="text-red">{errors.cvc}</span>}
          </div>
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-primary-input-border text-white rounded-lg hover:bg-primary-input-border transition-colors"
        >
          Confirm
        </button>
      </form>
    </div>
  );
};

export default InteractiveForm;
