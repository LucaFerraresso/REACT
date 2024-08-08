import React from "react";
import { useSpring, animated } from "@react-spring/web";
import Card from "../components/atoms/Card";

const HomePage = () => {
  const Exercises = [
    {
      title: "Advice Generator",
      description:
        "The perfect project if you're learning how to interact with 3rd-party APIs. This challenge uses the Advice Slip API to generate random quotes of advice.",
      link: "/exercise/advicegenerator",
      backgroundImage:
        "/Exercises/advice-generator-app-main/design/desktop-preview.jpg",
    },
    {
      title: "Age Calculator",
      description:
        "This challenge is designed to sharpen your JavaScript and form validation skills. Working with dates in JavaScript can be tricky, so this will be a nice test!",
      link: "/exercise/agecalculator",
      backgroundImage:
        "/Exercises/age-calculator-app-main/design/desktop-preview.jpg",
    },
    {
      title: "Contact Form",
      description:
        "Building accessible forms is a crucial task for front-end developers. This challenge will help you practice building a form with several input types and validation.",
      link: "/exercise/contactform",
      backgroundImage:
        "/Exercises/contact-form-main/design/desktop-preview.jpg",
    },
    {
      title: "Mortgage Calculator",
      description:
        "This mortgage calculator is an excellent project for practicing working with forms, client-side validation, and updating the DOM. Remember to focus on accessibility, too!",
      link: "/exercise/mortgagecalculator",
      backgroundImage:
        "/Exercises/mortgage-repayment-calculator-main/design/desktop-design-completed.jpg",
    },
    {
      title: "Product List with Cart",
      description:
        "Practice updating the UI in multiple places based on user actions. The starter download also includes a JSON file to help you practice populating the DOM dynamically.",
      link: "/exercise/fakeecommerce",
      backgroundImage:
        "/Exercises/product-list-with-cart-main/design/desktop-design-selected.jpg",
    },
    {
      title: "Interactive Credit Card Details Form",
      description:
        "This fun project will be an excellent way to practice DOM manipulation and form validation while also putting your HTML and CSS skills to the test.",
      link: "/exercise/interactivecardform",
      backgroundImage:
        "/Exercises/interactive-card-details-form-main/design/desktop-preview.jpg",
    },
    {
      title: "Tip Calculator",
      description:
        "This small app is perfect for anyone starting to get to grips with JavaScript. The calculator functionality will be a nice test!",
      link: "/exercise/tipcalculator",
      backgroundImage:
        "/Exercises/tip-calculator-app-main/design/desktop-preview.jpg",
    },
    {
      title: "Interactive Pricing Components",
      description:
        "In this project, you'll build out an interactive pricing component complete with custom range input slider and pricing toggle. A perfect way to test your JS skills!",
      link: "/exercise/pricingslider",
      backgroundImage:
        "/Exercises/interactive-pricing-component-main/design/desktop-preview.jpg",
    },
    {
      title: "NewsLetter Sign Up",
      description:
        "This will test your skills with basic form structure, validation, and submission. The success state will also be an excellent opportunity to work with DOM manipulation.",
      link: "/exercise/newslettersignup",
      backgroundImage:
        "/Exercises/newsletter-sign-up-with-success-message-main/design/desktop-preview.jpg",
    },
  ];

  // Funzione di animazione per il titolo
  const headerSpring = useSpring({
    from: { opacity: 0, transform: "translate3d(0,-20px,0)" },
    to: { opacity: 1, transform: "translate3d(0,0,0)" },
    config: { tension: 150, friction: 15 },
  });

  return (
    <>
      <animated.h1
        style={headerSpring}
        className="text-4xl font-bold text-off-black text-center py-6 bg-gray-50"
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
