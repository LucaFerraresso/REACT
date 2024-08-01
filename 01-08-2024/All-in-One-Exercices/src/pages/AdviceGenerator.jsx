import React, { useState, useEffect } from "react";
import getRandomAdvice from "../API/getData";

const AdviceApp = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    getAdvice();
  }, []);

  const getAdvice = async () => {
    setIsLoading(true);
    try {
      const response = await getRandomAdvice();
      const data = await response;
      setAdvice(data);
      setCount(count + 1);
    } catch (error) {
      console.error("Error fetching advice:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-dark-blue flex items-center justify-center">
      <div className="bg-dark-grayish-blue text-center p-8 rounded-xl shadow-lg max-w-md w-full">
        {isLoading ? (
          <div className="animate-pulse">
            <div className="text-2xl text-light-cyan mb-4">Loading...</div>
            <div className="bg-gray-700 h-8 w-full mb-4"></div>
            <div className="bg-gray-700 h-6 w-3/4 mb-2"></div>
            <div className="bg-gray-700 h-6 w-2/3"></div>
          </div>
        ) : (
          <>
            <p className="text-neon-green text-sm mb-2">ADVICE #{count}</p>
            <h1 className="text-2xl text-light-cyan mb-6">"{advice}"</h1>
            <button
              className="bg-neon-green p-4 rounded-full hover:bg-light-cyan hover:shadow-neon transition duration-300"
              onClick={getAdvice}
            >
              <img
                src="/Exercises/advice-generator-app-main/images/icon-dice.svg"
                alt="Get Advice"
                className="w-6 h-6"
              />
            </button>
            <p className="text-light-cyan mt-4">
              You have read {count} pieces of advice
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default AdviceApp;
