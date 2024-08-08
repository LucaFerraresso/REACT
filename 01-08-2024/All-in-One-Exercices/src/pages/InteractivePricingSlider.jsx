import React, { useState } from "react";

const InteractivePricingSlider = () => {
  const [value, setValue] = useState(50);
  const [isAnnual, setIsAnnual] = useState(false);

  const handleToggle = () => {
    setIsAnnual(!isAnnual);
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-main-bg p-4">
      <div className="bg-pricing-bg p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-2xl font-manrope font-bold text-text-dark-desaturated-blue mb-4">
          Interactive Pricing Component
        </h1>
        <div className="flex justify-between items-center mb-8">
          <span className="font-manrope font-semibold text-text-grayish-blue">
            ${isAnnual ? value * 12 : value}
          </span>
          <span className="font-manrope font-semibold text-text-grayish-blue">
            {isAnnual ? "per year" : "per month"}
          </span>
        </div>
        <input
          type="range"
          min="0"
          max="100"
          value={value}
          onChange={handleChange}
          className="w-full h-2  rounded-lg appearance-none cursor-pointer slider-thumb bg-strong-cyan"
        />
        <div className="flex justify-between mt-4">
          <span className="font-manrope font-semibold text-text-grayish-blue">
            0
          </span>
          <span className="font-manrope font-semibold text-text-grayish-blue">
            100
          </span>
        </div>
        <div className="flex justify-center mt-8">
          <div className="flex items-center">
            <span className="font-manrope font-semibold text-text-grayish-blue mr-2">
              Monthly
            </span>
            <div className="relative inline-block w-10 mr-2 align-middle select-none">
              <input
                type="checkbox"
                name="toggle"
                id="toggle"
                checked={isAnnual}
                onChange={handleToggle}
                className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
              />
              <label
                htmlFor="toggle"
                className="toggle-label block overflow-hidden h-6 rounded-full bg-toggle-bg cursor-pointer"
              />
            </div>
            <span className="font-manrope font-semibold text-text-grayish-blue ml-2">
              Annual
            </span>
          </div>
        </div>
        <button className="mt-8 w-full bg-strong-cyan text-white py-2 rounded-lg font-manrope font-bold hover:bg-soft-cyan transition-colors">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default InteractivePricingSlider;
