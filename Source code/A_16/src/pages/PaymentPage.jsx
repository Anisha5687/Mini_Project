
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import qrImage from "../assets/QR.png";

const PaymentPage = () => {
  const { state } = useLocation(); // expects { cart, subtotal, customer }
  const navigate = useNavigate();

  const cart = state?.cart || [];
  const subtotal = state?.subtotal || 0;
  const customer = state?.customer;

  if (!cart.length || !customer) {
    return (
      <div className="p-6 text-center">
        <h2 className="text-2xl font-bold mb-4">No order details found!</h2>
        <button
          onClick={() => navigate("/")}
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Go to Home
        </button>
      </div>
    );
  }

  const handlePayment = () => {
    alert("✅ Payment successful!");
    navigate("/"); // redirect to home
  };

  return (
    <div className="p-8 bg-gradient-to-br from-green-50 to-teal-100 min-h-screen">
      <h2 className="text-3xl font-extrabold mb-8 text-center text-teal-800">
        💳 Payment
      </h2>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Left - Order & Address */}
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

          <h3 className="text-xl font-semibold mt-6 mb-2 text-gray-800">
            Delivery Address
          </h3>
          <p className="mb-1 font-semibold">{customer.name}</p>
          <p className="mb-1">{customer.address}</p>
          <p>📞 {customer.phone}</p>
        </div>

        {/* Right - QR Code */}
        <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">
            Pay via UPI / GPay
          </h3>
          <p className="mb-4 text-center text-sm">Scan the QR code to pay ₹{subtotal}</p>
          <img src={qrImage} alt="QR Code" className="w-48 h-48" />
          <p className="text-green-700 font-semibold">GPay / PhonePe / Paytm</p>

          <button
            onClick={handlePayment}
            className="mt-6 w-full bg-green-600 text-white py-3 rounded-xl"
          >
            I Have Paid
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
