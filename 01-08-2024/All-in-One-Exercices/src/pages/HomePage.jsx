import React from "react";
import { useSpring, animated } from "@react-spring/web";
import Card from "../components/atoms/Card";

const HomePage = () => {
  const Exercises = [
    {
      title: "Esercizio 1",
      description: "Advice Generator",
      link: "/exercise/advicegenerator",
      backgroundImage:
        "/Exercises/advice-generator-app-main/design/desktop-preview.jpg",
    },
    {
      title: "Esercizio 2",
      description: "Age Calculator",
      link: "/exercise/agecalculator",
      backgroundImage:
        "/Exercises/age-calculator-app-main/design/desktop-preview.jpg",
    },
    {
      title: "Esercizio 3",
      description: "Contact-Form-Main",
      link: "/exercise/contactform",
      backgroundImage:
        "/Exercises/contact-form-main/design/desktop-preview.jpg",
    },
    {
      title: "Esercizio 4",
      description: "Mortgage Calculator",
      link: "/exercise/mortgagecalculator",
      backgroundImage:
        "/Exercises/mortgage-repayment-calculator-main/design/desktop-design-empty.jpg",
    },
    {
      title: "Esercizio 5",
      description: "Product List with Cart",
      link: "/exercise/productlist",
      backgroundImage:
        "/Exercises/product-list-with-cart-main/design/desktop-design-selected.jpg",
    },
  ];

  const headerSpring = useSpring({
    from: { opacity: 0, transform: "translate3d(0,-40px,0)" },
    to: { opacity: 1, transform: "translate3d(0,0,0)" },
  });

  return (
    <>
      <animated.h1
        style={headerSpring}
        className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-4xl font-bold text-center text-white py-6"
      >
        Esercizi
      </animated.h1>
      <div className="min-h-screen bg-gray-50 flex flex-wrap p-4 gap-6 justify-center">
        {Exercises.map((exercise, index) => {
          const cardSpring = useSpring({
            from: { opacity: 0, transform: "scale(0.9)" },
            to: { opacity: 1, transform: "scale(1)" },
            delay: index * 100,
          });

          return (
            <animated.div style={cardSpring} key={index}>
              <Card
                title={exercise.title}
                description={exercise.description}
                link={exercise.link}
                backgroundImage={exercise.backgroundImage}
              />
            </animated.div>
          );
        })}
      </div>
    </>
  );
};

export default HomePage;
