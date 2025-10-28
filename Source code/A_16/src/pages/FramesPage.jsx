
import React, { useState } from "react";
import { Link } from "react-router-dom";


export const framesByCategory = {
  "Wooden Frames": [
    { id: 1, name: "Stylish Wooden Photo Frame", price: 178, image: "https://via.placeholder.com/200", rating: 4.1, reviews: 8 },
    { id: 2, name: "Classic Brown Wood Frame", price: 210, image: "https://via.placeholder.com/200", rating: 4.0, reviews: 145 },
    { id: 3, name: "Rustic Wood Frame", price: 195, image: "https://via.placeholder.com/200", rating: 4.2, reviews: 87 },
  ],
  "Acrylic Light Photo Frames": [
    { id: 4, name: "LED Acrylic Photo Frame", price: 325, image: "https://via.placeholder.com/200", rating: 4.5, reviews: 112 },
    { id: 5, name: "Modern Acrylic Light Frame", price: 299, image: "https://via.placeholder.com/200", rating: 4.3, reviews: 76 },
  ],
  "Glass Frames": [
    { id: 6, name: "Elegant Glass Photo Frame", price: 245, image: "https://via.placeholder.com/200", rating: 4.2, reviews: 201 },
    { id: 7, name: "Premium Glass Display Frame", price: 275, image: "https://via.placeholder.com/200", rating: 4.4, reviews: 156 },
  ],
  "Collage Frames": [
    { id: 8, name: "Multi-Photo Collage Frame", price: 350, image: "https://via.placeholder.com/200", rating: 4.6, reviews: 189 },
    { id: 9, name: "Wall Grid Collage Frame Set", price: 420, image: "https://via.placeholder.com/200", rating: 4.3, reviews: 92 },
  ],
  "MDF Cut Frames": [
    { id: 10, name: "Laser Cut MDF Frame", price: 185, image: "https://via.placeholder.com/200", rating: 4.0, reviews: 64 },
    { id: 11, name: "Ornate MDF Photo Frame", price: 220, image: "https://via.placeholder.com/200", rating: 4.1, reviews: 43 },
  ],
  "Mosaic Frames": [
    { id: 12, name: "Handmade Mosaic Frame", price: 380, image: "https://via.placeholder.com/200", rating: 4.7, reviews: 125 },
    { id: 13, name: "Decorative Mosaic Photo Frame", price: 295, image: "https://via.placeholder.com/200", rating: 4.4, reviews: 88 },
  ],
};

const FramesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const getFramesToDisplay = () => {
    if (selectedCategory === "All") return Object.values(framesByCategory).flat();
    return framesByCategory[selectedCategory] || [];
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Heading and Categories */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Frames</h2>
        <div className="flex flex-wrap gap-2 mb-6">
          <button
            className={`px-4 py-2 rounded-full text-sm font-medium ${selectedCategory === "All" ? "bg-blue-600 text-white" : "bg-white text-gray-700 border border-gray-300"}`}
            onClick={() => setSelectedCategory("All")}
          >
            All Frames
          </button>
          {Object.keys(framesByCategory).map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full text-sm font-medium ${selectedCategory === category ? "bg-blue-600 text-white" : "bg-white text-gray-700 border border-gray-300"}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Show category title when a specific category is selected */}
      {selectedCategory !== "All" && <h3 className="text-xl font-semibold mb-6">{selectedCategory}</h3>}

      {/* Product Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {getFramesToDisplay().map((frame) => (
          <Link
            key={frame.id}
            to={`/frames/${frame.id}`}
            className="bg-white shadow rounded-lg overflow-hidden hover:shadow-lg transition block"
          >
            <img src={frame.image} alt={frame.name} className="w-full h-40 object-cover" />
            <div className="p-3">
              <h3 className="text-sm font-semibold truncate">{frame.name}</h3>
              <p className="text-lg font-bold">₹{frame.price}</p>
              <p className="text-green-600 text-xs">Free Delivery</p>
              <div className="flex items-center mt-1 text-xs">
                <span className="bg-green-500 text-white px-1 rounded mr-2">{frame.rating}★</span>
                <span>{frame.reviews} Reviews</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FramesPage;
