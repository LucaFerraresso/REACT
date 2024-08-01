import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

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
      const response = await fetch("https://api.adviceslip.com/advice");
      const data = await response.json();
      setAdvice(data.slip.advice);
      setCount(count + 1);
    } catch (error) {
      console.error("Error fetching advice:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-blue-900 flex items-center justify-center">
      <div className="bg-blue-800 text-center p-8 rounded-xl shadow-lg max-w-md w-full">
        {isLoading ? (
          <div>
            <h1 className="text-2xl text-white mb-4">Loading...</h1>
            <Skeleton count={1} height={30} />
            <Skeleton count={1} height={20} className="mt-2" />
            <Skeleton count={1} height={20} className="mt-2" />
          </div>
        ) : (
          <>
            <h1 className="text-2xl text-green-300 mb-6">"{advice}"</h1>
            <button
              className="bg-green-500 p-4 rounded-full hover:bg-green-400 transition duration-300"
              onClick={getAdvice}
            >
              <img
                src="/Exercises/advice-generator-app-main/images/icon-dice.svg"
                alt="Get Advice"
                className="w-6 h-6"
              />
            </button>
            <p className="text-green-300 mt-4">
              You have read {count} pieces of advice
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default AdviceApp;
