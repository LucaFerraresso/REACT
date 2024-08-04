import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <div className="w-[1024px] h-[1166px] flex flex-col">
        <h1 className="bg-orange-600 text-white text-2xl text-center uppercase">
          All in one project app
        </h1>
        <div>
          <div>
            <h1>esercizio 1</h1>
            <p>advice generator</p>
            <Link to="/homepage/adviceGenerator">vai alla pagina</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
