import React from "react";
import { useCart } from "../useContext/CartContext";

const Cart = () => {
  const { cart } = useCart();
  console.log(cart);

  return (
    <div className="min-h-screen bg-rose p-4">
      <h1>hi bro</h1>
    </div>
  );
};

export default Cart;
