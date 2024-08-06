import React from "react";
import { useSpring, animated } from "@react-spring/web";
import { toast } from "react-toastify";

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
    onAddToCart(product, quantity);

    if (quantity > 1) {
      toast.success(`${quantity} ${product.name} added to cart!`, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      toast.success(`${product.name} added to cart!`, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <animated.div
      style={springProps}
      className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105"
    >
      <img
        src={product.image.thumbnail}
        alt={product.name}
        className="w-full h-48 object-cover rounded-lg mb-4 transition-transform duration-300 hover:scale-110"
      />
      <div className="p-2">
        <h2 className="text-rose-900 text-lg font-semibold mb-1 transition-colors duration-300 hover:text-rose-700">
          {product.name}
        </h2>
        <p className="text-rose-500 mb-2">{product.category}</p>
        <p className="text-green-600 text-xl font-bold mb-4">
          ${product.price.toFixed(2)}
        </p>
        <div className="flex items-center mb-4">
          <button
            onClick={onDecrease}
            className="bg-rose-500 text-white px-3 py-1 rounded-l hover:bg-rose-600 transition"
          >
            -
          </button>
          <span className="mx-2 text-lg font-medium">{quantity}</span>
          <button
            onClick={onIncrease}
            className="bg-rose-500 text-white px-3 py-1 rounded-r hover:bg-rose-600 transition"
          >
            +
          </button>
        </div>
        <button
          onClick={handleAddToCart}
          className={`w-full py-2 rounded-lg transition text-white font-bold bg-green hover:bg-green-600 `}
        >
          Add to Cart
        </button>
      </div>
    </animated.div>
  );
};

export default EcommerceCard;
