import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Checkout() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const cart = state?.cart || [];
  const subtotal = state?.subtotal || 0;
  const customer = state?.customer || {
    name: "",
    address: "",
    phone: "",
  };

  // ✅ Navigate to PaymentPage with cart, subtotal, and customer info
  const handlePay = () => {
    navigate("/payment", { state: { cart, subtotal, customer } });
  };

  if (!cart.length) {
    return (
      <div className="p-6 text-center">
        <h2 className="text-2xl font-bold mb-4">Your cart is empty!</h2>
        <button
          onClick={() => navigate("/")}
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Go to Home
        </button>
      </div>
    );
  }

  return (
    <div className="p-8 bg-gradient-to-br from-green-50 to-teal-100 min-h-screen">
      <h2 className="text-3xl font-extrabold mb-8 text-center text-teal-800">
        🛒 Checkout
      </h2>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Delivery Address */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">
            Delivery Address
          </h3>
          <p className="mb-1 font-semibold">{customer.name}</p>
          <p className="mb-1">{customer.address}</p>
          <p className="mb-1">📞 {customer.phone}</p>
        </div>

        {/* Order Summary */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">
            Order Summary
          </h3>

          {cart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between border-b pb-2 mb-2"
            >
              <div>
                <p className="font-semibold">{item.name}</p>
                <p className="text-sm">
                  Qty: {item.quantity} | Color: {item.color || "Default"}
                  {item.personalization &&
                    ` | Personalized: ${item.personalization}`}
                </p>
              </div>
              <span className="font-semibold text-teal-700">
                ₹{item.price * item.quantity}
              </span>
            </div>
          ))}

          <div className="flex justify-between font-bold mt-4 text-lg">
            <span>Total</span>
            <span>₹{subtotal}</span>
          </div>

          <button
            onClick={handlePay}
            className="mt-6 w-full bg-green-600 text-white py-3 rounded-xl"
          >
            Pay with GPay
          </button>
        </div>
      </div>
    </div>
  );
}
