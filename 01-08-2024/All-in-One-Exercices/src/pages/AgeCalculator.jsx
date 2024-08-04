import React, { useState } from "react";
import { useSpring, animated } from "@react-spring/web";

const AgeCalculator = () => {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [age, setAge] = useState({ years: "--", months: "--", days: "--" });

  const calculateAge = (e) => {
    e.preventDefault();

    const birthDate = new Date(year, month - 1, day);
    const today = new Date();
    let ageYears = today.getFullYear() - birthDate.getFullYear();
    let ageMonths = today.getMonth() - birthDate.getMonth();
    let ageDays = today.getDate() - birthDate.getDate();

    if (ageDays < 0) {
      ageMonths -= 1;
      ageDays += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }

    if (ageMonths < 0) {
      ageYears -= 1;
      ageMonths += 12;
    }

    setAge({
      years: ageYears < 0 ? "--" : ageYears,
      months: ageMonths < 0 ? "--" : ageMonths,
      days: ageDays < 0 ? "--" : ageDays,
    });
  };

  const ageAnimation = useSpring({
    years: age.years !== "--" ? age.years : 0,
    months: age.months !== "--" ? age.months : 0,
    days: age.days !== "--" ? age.days : 0,
    from: { years: 0, months: 0, days: 0 },
  });

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-off-white p-4">
      <form
        onSubmit={calculateAge}
        className="bg-white rounded-lg shadow-md p-8 md:p-16 text-center max-w-lg w-full"
      >
        <div className="mt-10 text-center flex items-center justify-center gap-6 ">
          <div>
            <label className="block text-smokey-grey">Day</label>
            <input
              type="number"
              value={day}
              onChange={(e) => setDay(e.target.value)}
              className="w-20 p-2 text-2xl border-2 border-light-grey rounded-lg focus:outline-none focus:border-purple"
              placeholder="DD"
              required
            />
          </div>
          <div>
            <label className="block text-smokey-grey">Month</label>
            <input
              type="number"
              value={month}
              onChange={(e) => setMonth(e.target.value)}
              className="w-20 p-2 text-2xl border-2 border-light-grey rounded-lg focus:outline-none focus:border-purple"
              placeholder="MM"
              required
            />
          </div>
          <div>
            <label className="block text-smokey-grey">Year</label>
            <input
              type="number"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              className="w-28 p-2 text-2xl border-2 border-light-grey rounded-lg focus:outline-none focus:border-purple"
              placeholder="YYYY"
              required
            />
          </div>
        </div>
        <button
          type="submit"
          className="mt-4 px-6 py-2 bg-purple text-white text-xl font-semibold rounded-full hover:bg-purple-dark transition-all duration-300"
        >
          Calculate
        </button>
      </form>
      <div className="mt-10 text-center flex items-center justify-center gap-6">
        <animated.div className="text-5xl font-extrabold text-purple">
          {age.years === "--"
            ? "--"
            : ageAnimation.years.to((val) => Math.floor(val))}
        </animated.div>
        <div className="text-2xl font-bold">years</div>
        <animated.div className="text-5xl font-extrabold text-purple">
          {age.months === "--"
            ? "--"
            : ageAnimation.months.to((val) => Math.floor(val))}
        </animated.div>
        <div className="text-2xl font-bold">months</div>{" "}
        <animated.div className="text-5xl font-extrabold text-purple">
          {age.days === "--"
            ? "--"
            : ageAnimation.days.to((val) => Math.floor(val))}
        </animated.div>
        <div className="text-2xl font-bold">days</div>
      </div>
    </div>
  );
};

export default AgeCalculator;
