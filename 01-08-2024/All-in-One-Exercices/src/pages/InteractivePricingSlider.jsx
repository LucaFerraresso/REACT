import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const InteractivePricingSlider = () => {
  const [pageviews, setPageviews] = useState(100);
  const [billing, setBilling] = useState("monthly");
  const [discounted, setDiscounted] = useState(false);

  const toggleBilling = () => {
    setBilling(billing === "monthly" ? "yearly" : "monthly");
    setDiscounted(!discounted);
  };

  const handleSliderChange = (e) => {
    setPageviews(e.target.value);
  };

  const getPrice = () => {
    let price = (pageviews / 100) * 16;
    if (discounted) {
      price = price * 0.75;
    }
    return price.toFixed(2);
  };
  const handleClick = () => {
    toast.success("Thank you for your purchase!");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-very-pale-blue">
      <div className="max-w-2xl mx-auto my-10 p-6 bg-white shadow-lg rounded-lg font-manrope">
        <div className="text-center">
          <h2 className="text-grayish-blue text-2xl font-bold">
            Simple, traffic-based pricing
          </h2>
          <p className="text-grayish-blue mt-2">
            Sign-up for our 30-day trial. No credit card required.
          </p>
        </div>
        <div className="my-6">
          <div className="flex justify-between items-center text-grayish-blue">
            <span>{pageviews}K Pageviews</span>
            <span className="text-4xl font-bold text-dark-desaturated-blue">
              ${getPrice()}
            </span>
          </div>
          <input
            type="range"
            min="100"
            max="1000"
            value={pageviews}
            onChange={handleSliderChange}
            className="w-full h-2 bg-light-grayish-blue-slider rounded-lg appearance-none cursor-pointer"
          />
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-center my-6 space-y-4 sm:space-y-0">
          <span className="text-grayish-blue">Monthly Billing</span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={discounted}
              onChange={toggleBilling}
            />
            <div className="w-11 h-6 bg-light-grayish-blue-toggle rounded-full peer peer-focus:ring-4 peer-focus:ring-soft-cyan peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-strong-cyan"></div>
          </label>
          <span className="text-grayish-blue">Yearly Billing</span>
          <span className="text-sm text-light-red bg-light-grayish-red py-1 px-2 rounded-full">
            25% discount
          </span>
        </div>
        <button
          className="w-full py-3 mt-6 text-white bg-grayish-blue rounded-lg hover:bg-grayish-blue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-grayish-blue transition duration-200"
          onClick={handleClick}
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default InteractivePricingSlider;
