import React from "react";
import { useSpring, animated } from "@react-spring/web";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const EcommerceCard = ({
  product,
  quantity,
  onIncrease,
  onDecrease,
  onAddToCart,
}) => {
  const springProps = useSpring({
    to: { opacity: 1, transform: "translateY(0px)" },
    from: { opacity: 0, transform: "translateY(20px)" },
    config: { tension: 200, friction: 20 },
  });

  const handleAddToCart = () => {
    const message =
      quantity > 1
        ? `${quantity} ${product.name} added to cart!`
        : `${product.name} added to cart!`;

    toast.success(message, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

    onAddToCart(product, quantity);
  };

  return (
    <animated.div
      style={springProps}
      className="bg-white p-4 rounded-lg shadow-lg flex flex-col gap-2 justify-between border border-black hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105 mx-auto
                 w-full sm:w-[280px] md:w-[330px] lg:w-[320px] xl:w-[430px] h-auto"
    >
      <Link to={`/exercise/fakeecommerce/${product.id}`}>
        <img
          src={product.image.thumbnail}
          alt={product.name}
          className="w-full h-48 object-cover mb-4 border border-black transition-transform duration-300 hover:scale-105"
          style={{ borderRadius: "0.5rem 0.5rem 0 0", marginBottom: "-1px" }}
        />
      </Link>
      <div className="p-2 flex flex-col items-center justify-center">
        <h2 className="text-rose-900 text-lg font-semibold mb-1 border-b border-black pb-2 transition-colors duration-300 hover:text-rose-700">
          Name: {product.name}
        </h2>
        <p className="text-rose-500 mb-2">Category: {product.category}</p>
        <p className="text-green-600 text-xl font-bold mb-4">
          Price: ${product.price.toFixed(2)}
        </p>
        <div className="flex items-center mb-4">
          <button
            onClick={onDecrease}
            className="bg-rose-500 text-white px-3 py-1 rounded-l border border-black hover:bg-rose-600 transition"
          >
            -
          </button>
          <span className="mx-2 text-lg font-medium">{quantity}</span>
          <button
            onClick={onIncrease}
            className="bg-rose-500 text-white px-3 py-1 rounded-r border border-black hover:bg-rose-600 transition"
          >
            +
          </button>
        </div>
        <button
          onClick={handleAddToCart}
          className="w-full py-2 rounded-lg transition text-white font-bold border border-black bg-green hover:bg-green-600"
          style={{ textShadow: "1px 1px 2px black" }}
        >
          Add to Cart
        </button>
      </div>
    </animated.div>
  );
};

export default EcommerceCard;
