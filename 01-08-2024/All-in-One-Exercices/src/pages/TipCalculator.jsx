import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "tailwindcss/tailwind.css";

const TipCalculator = () => {
  const [bill, setBill] = useState("");
  const [tipPercentage, setTipPercentage] = useState("");
  const [customTip, setCustomTip] = useState("");
  const [people, setPeople] = useState("");

  const handleTipClick = (percentage) => {
    setTipPercentage(percentage);
    setCustomTip("");
  };

  const calculateTip = () => {
    const billAmount = Number(bill);
    const numberOfPeople = Number(people);
    const tipPercent = tipPercentage || Number(customTip);

    if (isNaN(billAmount) || isNaN(numberOfPeople) || isNaN(tipPercent)) {
      toast.error("Please enter valid inputs.");
      return { tipAmount: "0.00", totalAmount: "0.00" };
    }

    const tipAmount = (billAmount * (tipPercent / 100)) / numberOfPeople;
    const totalAmount = billAmount / numberOfPeople + tipAmount;

    return {
      tipAmount: tipAmount.toFixed(2),
      totalAmount: totalAmount.toFixed(2),
    };
  };

  const { tipAmount, totalAmount } = calculateTip();

  return (
    <div className="min-h-screen flex items-center justify-center bg-very-light-grayish-cyan font-spaceMono">
      <ToastContainer />
      <div className="bg-white rounded-lg shadow-lg p-8 m-4 w-full max-w-md md:max-w-4xl">
        <h1 className="text-center text-2xl md:text-3xl font-bold mb-4 text-dark-grayish-cyan">
          SPLITTER
        </h1>
        <div className="md:flex">
          <div className="md:w-1/2 p-4">
            <div className="mb-4">
              <label htmlFor="bill" className="block text-grayish-cyan mb-2">
                Bill
              </label>
              <input
                type="text"
                id="bill"
                value={bill}
                onChange={(e) => setBill(e.target.value)}
                placeholder="0.00"
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-strong-cyan"
              />
            </div>
            <div className="mb-4">
              <p className="block text-grayish-cyan mb-2">Select Tip %</p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[5, 10, 15, 25, 50].map((percentage) => (
                  <button
                    key={percentage}
                    onClick={() => handleTipClick(percentage)}
                    className={`p-2 rounded ${
                      tipPercentage === percentage
                        ? "bg-strong-cyan text-white"
                        : "bg-dark-grayish-cyan text-white"
                    } hover:bg-strong-cyan focus:outline-none`}
                  >
                    {percentage}%
                  </button>
                ))}
                <input
                  type="text"
                  value={customTip}
                  onChange={(e) => {
                    setCustomTip(e.target.value);
                    setTipPercentage(null);
                  }}
                  placeholder="Custom"
                  className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-strong-cyan text-center"
                />
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="people" className="block text-grayish-cyan mb-2">
                Number of People
              </label>
              <input
                type="text"
                id="people"
                value={people}
                onChange={(e) => setPeople(e.target.value)}
                placeholder="1"
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-strong-cyan"
              />
            </div>
          </div>
          <div className="md:w-1/2 p-4 bg-very-dark-cyan text-white rounded-lg flex flex-col justify-between">
            <div>
              <div className="flex justify-between mb-4">
                <p className="text-grayish-cyan">Tip Amount</p>
                <p className="text-3xl">${tipAmount}</p>
              </div>
              <div className="flex justify-between">
                <p className="text-grayish-cyan">Total</p>
                <p className="text-3xl">${totalAmount}</p>
              </div>
            </div>
            <button
              onClick={() => {
                setBill("");
                setTipPercentage("");
                setCustomTip("");
                setPeople("");
                toast.success("Reset successful!");
              }}
              className="w-full py-2 mt-4 bg-strong-cyan text-white rounded-lg hover:bg-strong-cyan transition-colors"
            >
              RESET
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TipCalculator;
