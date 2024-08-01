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
    <div className="app">
      {isLoading ? (
        <div>
          <h1>Loading...</h1>
          <Skeleton count={3} height={30} />
        </div>
      ) : (
        <>
          <h1>{advice}</h1>
          <button className="button" onClick={getAdvice}>
            Get Advice
          </button>
          <p className="count">You have read {count} pieces of advice</p>
        </>
      )}
    </div>
  );
};

export default AdviceApp;
