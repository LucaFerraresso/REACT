import React from "react";
import { Link } from "react-router-dom";

const Card = ({ title, description, link, backgroundImage }) => {
  return (
    <div
      className="max-w-sm rounded overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105 w-[400px] h-[400px]"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        //backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="bg-black bg-opacity-50 p-6">
        <img
          src={backgroundImage}
          alt="Background"
          className="w-full h-48 object-cover mb-4"
        />
        <h1 className="text-white text-2xl font-bold mb-2">{title}</h1>
        <p className="text-gray-300 text-base mb-4">{description}</p>

        <Link
          to={link}
          className="inline-block bg-neon-green text-black font-semibold py-2 px-4 rounded hover:bg-light-cyan transition duration-300"
        >
          Vai alla pagina
        </Link>
      </div>
    </div>
  );
};

export default Card;
