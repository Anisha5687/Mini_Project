import React, { useEffect, useState } from "react";

const Admin = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const savedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(savedOrders);
  }, []);

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-extrabold mb-6 text-center text-teal-800">
        🛠️ Admin Dashboard
      </h2>

      {orders.length === 0 ? (
        <p className="text-center text-gray-600">No orders yet!</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-white shadow-md rounded-lg">
            <thead>
              <tr className="bg-teal-600 text-white">
                <th className="p-3">Order ID</th>
                <th className="p-3">User</th>
                <th className="p-3">Address</th>
                <th className="p-3">Product</th>
                <th className="p-3">Quantity</th>
                <th className="p-3">Total</th>
                <th className="p-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id} className="border-b hover:bg-gray-50">
                  <td className="p-3 text-center">{order.id}</td>
                  <td className="p-3">
                    <p className="font-semibold">{order.address.name}</p>
                    <p className="text-sm text-gray-600">📞 {order.address.phone}</p>
                  </td>
                  <td className="p-3 text-sm">
                    {order.address.street}, {order.address.city},{" "}
                    {order.address.state} - {order.address.pincode}
                  </td>
                  <td className="p-3">{order.product.name}</td>
                  <td className="p-3 text-center">{order.product.quantity || 1}</td>
                  <td className="p-3 font-bold text-teal-700">₹{order.total}</td>
                  <td className="p-3 text-green-600 font-semibold">{order.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Admin;
