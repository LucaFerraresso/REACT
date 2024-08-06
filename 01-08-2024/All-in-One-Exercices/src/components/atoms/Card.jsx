import React from "react";
import { Link } from "react-router-dom";
import { useSpring, animated } from "@react-spring/web";

const Card = ({ title, description, link, backgroundImage }) => {
  const [imageProps, imageApi] = useSpring(() => ({
    transform: "scale(1)",
    config: { tension: 200, friction: 20 },
  }));

  return (
    <div className="w-[300px] h-[400px] md:w-[350px] md:h-[450px] lg:w-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-lg bg-white border border-black">
      <div className="flex flex-col justify-between h-full">
        <div className="relative overflow-hidden">
          <Link to={link}>
            <animated.img
              src={backgroundImage}
              alt="Background"
              className="w-full h-40 md:h-48 lg:h-60 object-cover transition-transform duration-300 cursor-pointer"
              style={imageProps}
              onMouseEnter={() => imageApi.start({ transform: "scale(1.1)" })}
              onMouseLeave={() => imageApi.start({ transform: "scale(1)" })}
            />
          </Link>
          <div className="absolute top-0 right-0 mt-2 mr-2 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded">
            FREE
          </div>
        </div>
        <div className="p-6">
          <h1 className="text-gray-900 text-xl font-bold mb-2">{title}</h1>
          <p className="text-gray-700 text-base mb-4">{description}</p>
          <div className="flex items-center space-x-2 mb-4">
            <span className=" text-blue-300 text-2x font-semibold px-2.5 py-0.5 rounded border border-black ">
              HTML
            </span>
            <span className="text-blue-800 text-2x font-semibold px-2.5 py-0.5 rounded border border-black">
              CSS
            </span>
            <span className=" text-pink-400 text-2x font-semibold px-2.5 py-0.5 rounded border border-black">
              JS
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
