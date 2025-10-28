import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { __AUTH, __DB } from "../backend/FirebaseConfig";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

const BuyNowPage = () => {
  const { state } = useLocation(); // product passed from FramesProducts
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [address, setAddress] = useState(null);
  const [loading, setLoading] = useState(true);

  // ✅ Track login
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(__AUTH, (currentUser) => {
      if (!currentUser) {
        navigate("/auth/login");
      } else {
        setUser(currentUser);
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  // ✅ Fetch address
  useEffect(() => {
    const fetchAddress = async () => {
      if (user) {
        const docRef = doc(__DB, "addresses", user.uid);
        const snap = await getDoc(docRef);
        if (snap.exists()) setAddress(snap.data());
      }
      setLoading(false);
    };
    fetchAddress();
  }, [user]);

  if (loading) return <p className="p-6">Loading...</p>;

  // ✅ Address form
  if (!address) {
    return (
      <div className="max-w-3xl mx-auto p-6 bg-white rounded-xl shadow mt-6">
        <h2 className="text-2xl font-bold mb-4">Enter Delivery Address</h2>
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            const formData = new FormData(e.target);
            const addr = {
              name: formData.get("name"),
              phone: formData.get("phone"),
              street: formData.get("street"),
              city: formData.get("city"),
              state: formData.get("state"),
              pincode: formData.get("pincode"),
            };
            await setDoc(doc(__DB, "addresses", user.uid), addr);
            setAddress(addr);
          }}
          className="space-y-4"
        >
          <input
            name="name"
            placeholder="Full Name"
            className="border p-3 w-full rounded focus:ring-2 focus:ring-green-500"
            required
          />
          <input
            name="phone"
            placeholder="Phone Number"
            className="border p-3 w-full rounded focus:ring-2 focus:ring-green-500"
            required
          />
          <input
            name="street"
            placeholder="Street Address"
            className="border p-3 w-full rounded focus:ring-2 focus:ring-green-500"
            required
          />
          <input
            name="city"
            placeholder="City"
            className="border p-3 w-full rounded focus:ring-2 focus:ring-green-500"
            required
          />
          <input
            name="state"
            placeholder="State"
            className="border p-3 w-full rounded focus:ring-2 focus:ring-green-500"
            required
          />
          <input
            name="pincode"
            placeholder="Pincode"
            className="border p-3 w-full rounded focus:ring-2 focus:ring-green-500"
            required
          />
          <button className="bg-green-600 text-white px-4 py-3 rounded w-full">
            Save Address
          </button>
        </form>
      </div>
    );
  }

  // ✅ Show order summary
  const product = state?.product;

  return (
    <div className="p-8 bg-gradient-to-br from-green-50 to-teal-100 min-h-screen">
      <h2 className="text-3xl font-extrabold mb-8 text-center text-teal-800">
        🛒 Checkout
      </h2>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Left - Delivery Address */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">
            Delivery Address
          </h3>
          <p className="mb-1 font-semibold">{address.name}</p>
          <p className="mb-1">
            {address.street}, {address.city}, {address.state} - {address.pincode}
          </p>
          <p>📞 {address.phone}</p>
        </div>

        {/* Right - Order Summary */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">
            Order Summary
          </h3>

          <div className="flex justify-between border-b pb-2 mb-2">
            <div>
              <p className="font-semibold">{product.name}</p>
              <p className="text-sm">
                Qty: {product.quantity || 1} | Color: {product.color || "Default"}
                {product.personalization && ` | Personalized: ${product.personalization}`}
              </p>
            </div>
            <span className="font-semibold text-teal-700">
              ₹{product.price * (product.quantity || 1)}
            </span>
          </div>

          <div className="flex justify-between font-bold mt-4 text-lg">
            <span>Total</span>
            <span>₹{product.price * (product.quantity || 1)}</span>
          </div>

          <button
            onClick={() =>
              navigate("/payment1", { state: { product, address } })
            }
            className="mt-6 w-full bg-green-600 text-white py-3 rounded-xl"
          >
            Pay with GPay
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuyNowPage;
