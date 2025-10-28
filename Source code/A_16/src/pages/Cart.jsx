// src/pages/Cart.jsx
import React, { useContext } from "react";
import CartContext from "../context/CartContext";

const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  if (cart.length === 0) {
    return <p className="p-6 text-gray-600">Your cart is empty.</p>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">🛒 Your Cart</h2>
      <div className="space-y-4">
        {cart.map((item) => (
          <div key={item.id} className="flex items-center justify-between border p-4 rounded shadow-sm">
            <div className="flex items-center gap-4">
              <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded" />
              <div>
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-sm text-gray-600">{item.size} | {item.color}</p>
                <p className="text-sm">Qty: {item.quantity}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-lg font-bold">₹{item.price * item.quantity}</p>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 text-sm mt-2 hover:underline"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 text-right">
        <h3 className="text-xl font-bold">Total: ₹{totalPrice}</h3>
        <button className="mt-4 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
