import Card from "../components/atoms/Card";
const HomePage = () => {
  const Exercises = [
    {
      title: "Esercizio 1",
      description: "Advice Generator",
      link: "/homepage/advicegenerator",
      backgroundImage:
        "../../public/Exercises/advice-generator-app-main/design/desktop-preview.jpg",
    },
    {
      title: "Esercizio 2",
      description: "Age Calculator",
      link: "/homepage/agecalculator",
      backgroundImage:
        "../../public/Exercises/age-calculator-app-main/design/desktop-preview.jpg",
    },
    {
      title: "Esercizio 3",
      description: "Contact-Form-Main",
      link: "/homepage/contactform",
      backgroundImage:
        "../../public/Exercises/contact-form-main/design/desktop-preview.jpg",
    },
    {
      title: "Esercizio 4",
      description: "Mortage Calculator",
      link: "/homepage/mortagecalculator",
      backgroundImage:
        "../../public/Exercises/mortgage-repayment-calculator-main/design/desktop-design-empty.jpg",
    },
    {
      title: "Esercizio 5",
      description: "Product List with Cart",
      link: "/homepage/productlist",
      backgroundImage:
        "../../public/Exercises/product-list-with-cart-main/design/desktop-design-empty.jpg",
    },
  ];
  return (
    <>
      <div className="min-h-screen bg-dark-blue flex flex-wrap p-4 overflow-hidden gap-4">
        {Exercises.map((exercise, index) => (
          <Card
            key={index}
            title={exercise.title}
            description={exercise.description}
            link={exercise.link}
            backgroundImage={exercise.backgroundImage}
          />
        ))}
      </div>
    </>
  );
};

export default HomePage;
