import React from "react";
import { Link } from "react-router-dom";

const Items3 = ({ item, description, handleFavorite, addToCart }) => {
  return (
    <div className="flex flex-col justify-center h-[600px] w-[480px] rounded-3xl overflow-hidden shadow-lg transition-transform duration-500 ">
      <div className="group relative block overflow-hidden">
        <button
          className="absolute right-4 top-4 z-10 rounded-full bg-white p-2 text-gray-900 transition-colors duration-300 hover:text-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          onClick={handleFavorite}
          id={item.id}
        >
          <span className="sr-only">Wishlist</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-6 w-6"
            aria-hidden="true"
            onClick={handleFavorite}
            id={item.id}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
        </button>

        <img
          src={item.image}
          alt=""
          className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110 sm:h-72"
        />

        <div className="relative border border-gray-100 bg-white p-6">
          <span className="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium rounded-full">
            New
          </span>

          <h3 className="mt-4 text-lg font-medium text-gray-900">
            {item.title}
          </h3>

          <p className="mt-1.5 text-sm text-gray-700">{item.price}$</p>
          <p className="mt-1.5 text-sm text-gray-700">ID: {item.id}</p>
          <p className="mt-1.5 text-sm text-gray-700">
            Description: {description}
          </p>
          <div className="sm:flex sm:items-end sm:justify-end">
            <Link
              to={`/products/${item.id}`}
              className="block bg-yellow-300 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition-colors duration-300 hover:bg-yellow-400 focus:bg-yellow-500 active:bg-yellow-600"
            >
              Read More
            </Link>
          </div>

          <div className="mt-4">
            <button
              id={item.id}
              onClick={addToCart}
              className="block w-full rounded bg-yellow-400 p-4 text-sm font-medium transition-transform duration-300 hover:bg-yellow-500 focus:bg-yellow-600 active:bg-yellow-700 disabled:bg-gray-300 disabled:cursor-not-allowed hover:scale-105"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Items3;
