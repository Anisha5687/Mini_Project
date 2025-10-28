import React, { useState } from "react";
import { Link } from "react-router-dom";
import img1 from "../../GLC/MDF CUT FRAMES/IMG1.jpg";
import img2 from "../../GLC/MDF CUT FRAMES/IMG2.jpg";
import img3 from "../../GLC/MDF CUT FRAMES/IMG3.jpg";
import img4 from "../../GLC/MDF CUT FRAMES/IMG4.jpg";
import img5 from "../../GLC/MDF CUT FRAMES/IMG5.jpg";
import img6 from "../../GLC/MDF CUT FRAMES/IMG6.jpg";
import img7 from "../../GLC/MDF CUT FRAMES/IMG7.webp";
import img8 from "../../GLC/MDF CUT FRAMES/IMG8.jpg";
import img9 from "../../GLC/MDF CUT FRAMES/IMG9.jpg";
import img10 from "../../GLC/MDF CUT FRAMES/IMG10.jpeg";
// Collage Frame images
import collage1 from "../../GLC/COLLAGE FRAME/IMG1.jpeg";
import collage2 from "../../GLC/COLLAGE FRAME/IMG2.webp";
import collage3 from "../../GLC/COLLAGE FRAME/IMG3.jpg";
import collage4 from "../../GLC/COLLAGE FRAME/IMG4.webp";
import collage5 from "../../GLC/COLLAGE FRAME/IMG5.jpg";
import collage6 from "../../GLC/COLLAGE FRAME/IMG6.jpg";
import collage7 from "../../GLC/COLLAGE FRAME/IMG7.jpg";
import collage8 from "../../GLC/COLLAGE FRAME/IMG8.jpg";
import collage9 from "../../GLC/COLLAGE FRAME/IMG9.jpg";
import collage10 from "../../GLC/COLLAGE FRAME/IMG10.jpg";
// Acrylic Photo Frame images
import acrylic1 from "../../GLC/ACRYLIC PHOTO FRAME/IMG1.webp";
import acrylic2 from "../../GLC/ACRYLIC PHOTO FRAME/IMG2.jpg";
import acrylic3 from "../../GLC/ACRYLIC PHOTO FRAME/IMG3.jpg";
import acrylic4 from "../../GLC/ACRYLIC PHOTO FRAME/IMG4.jpg";
import acrylic5 from "../../GLC/ACRYLIC PHOTO FRAME/IMG5.jpg";
import acrylic6 from "../../GLC/ACRYLIC PHOTO FRAME/IMG6.avif";
import acrylic7 from "../../GLC/ACRYLIC PHOTO FRAME/IMG7.jpg";
import acrylic8 from "../../GLC/ACRYLIC PHOTO FRAME/IMG8.jpg";
import acrylic9 from "../../GLC/ACRYLIC PHOTO FRAME/IMG9.jpg";
import acrylic10 from "../../GLC/ACRYLIC PHOTO FRAME/IMG10.jpg";
// Wooden Frames (using Acrylic Frame images)
import wood1 from "../../GLC/ACRYLIC FRAME/IMG1.webp";
import wood2 from "../../GLC/ACRYLIC FRAME/IMG2.webp";
import wood3 from "../../GLC/ACRYLIC FRAME/IMG3.jpg";
import wood4 from "../../GLC/ACRYLIC FRAME/IMG4.jpg";
import wood5 from "../../GLC/ACRYLIC FRAME/IMG5.jpg";
import wood6 from "../../GLC/ACRYLIC FRAME/IMG6.webp";
import wood7 from "../../GLC/ACRYLIC FRAME/IMG7.jpg";
import wood8 from "../../GLC/ACRYLIC FRAME/IMG8.png";
import wood9 from "../../GLC/ACRYLIC FRAME/IMG9.jpg";
import wood10 from "../../GLC/ACRYLIC FRAME/IMG10.webp";
// Glass Frames (using PHOTO FRAMES images)
import glass1 from "../../GLC/PHOTO FRAMES/IMG1.jpeg";
import glass2 from "../../GLC/PHOTO FRAMES/IMG2.jpg";
import glass3 from "../../GLC/PHOTO FRAMES/IMG3.jpg";
import glass4 from "../../GLC/PHOTO FRAMES/IMG4.jpg";
import glass5 from "../../GLC/PHOTO FRAMES/IMG5.jpg";
import glass6 from "../../GLC/PHOTO FRAMES/IMG6.webp";
import glass7 from "../../GLC/PHOTO FRAMES/IMG7.jpg";
import glass8 from "../../GLC/PHOTO FRAMES/IMG8.webp";
import glass9 from "../../GLC/PHOTO FRAMES/IMG9.webp";
import glass10 from "../../GLC/PHOTO FRAMES/IMG10.jpg";






// Sample data organized by frame categories
export const framesByCategory = {
  "Wooden Frames": [
    { id: 1, name: "Stylish Wooden Frame 1", price: 178, image: wood1, rating: 4.2, reviews: 56 },
    { id: 2, name: "Classic Wooden Frame 2", price: 210, image: wood2, rating: 4.3, reviews: 64 },
    { id: 3, name: "Rustic Wooden Frame 3", price: 195, image: wood3, rating: 4.1, reviews: 45 },
    { id: 4, name: "Modern Wooden Frame 4", price: 220, image: wood4, rating: 4.4, reviews: 72 },
    { id: 5, name: "Premium Wooden Frame 5", price: 240, image: wood5, rating: 4.5, reviews: 81 },
    { id: 6, name: "Luxury Wooden Frame 6", price: 260, image: wood6, rating: 4.6, reviews: 96 },
    { id: 7, name: "Elegant Wooden Frame 7", price: 280, image: wood7, rating: 4.7, reviews: 105 },
    { id: 8, name: "Designer Wooden Frame 8", price: 300, image: wood8, rating: 4.5, reviews: 88 },
    { id: 9, name: "Handcrafted Wooden Frame 9", price: 320, image: wood9, rating: 4.8, reviews: 120 },
    { id: 10, name: "Exclusive Wooden Frame 10", price: 350, image: wood10, rating: 4.9, reviews: 135 },
  ],

  "Acrylic Light Photo Frames": [
    { id: 11, name: "LED Acrylic Photo Frame 1", price: 325, image: acrylic1, rating: 4.5, reviews: 112 },
    { id: 12, name: "Modern Acrylic Light Frame 2", price: 299, image: acrylic2, rating: 4.3, reviews: 76 },
    { id: 13, name: "Stylish Acrylic Frame 3", price: 310, image: acrylic3, rating: 4.2, reviews: 84 },
    { id: 14, name: "Designer Acrylic Frame 4", price: 340, image: acrylic4, rating: 4.4, reviews: 93 },
    { id: 15, name: "Premium Acrylic Frame 5", price: 360, image: acrylic5, rating: 4.6, reviews: 101 },
    { id: 16, name: "Luxury Acrylic Frame 6", price: 380, image: acrylic6, rating: 4.7, reviews: 115 },
    { id: 17, name: "Artistic Acrylic Frame 7", price: 400, image: acrylic7, rating: 4.8, reviews: 122 },
    { id: 18, name: "Classic Acrylic Frame 8", price: 420, image: acrylic8, rating: 4.5, reviews: 97 },
    { id: 19, name: "Elegant Acrylic Frame 9", price: 440, image: acrylic9, rating: 4.6, reviews: 110 },
    { id: 20, name: "Exclusive Acrylic Frame 10", price: 460, image: acrylic10, rating: 4.9, reviews: 135 },
  ],

  "Glass Frames": [
    { id: 21, name: "Elegant Glass Frame 1", price: 245, image: glass1, rating: 4.3, reviews: 65 },
    { id: 22, name: "Premium Glass Frame 2", price: 275, image: glass2, rating: 4.4, reviews: 72 },
    { id: 23, name: "Modern Glass Frame 3", price: 260, image: glass3, rating: 4.2, reviews: 58 },
    { id: 24, name: "Stylish Glass Frame 4", price: 290, image: glass4, rating: 4.5, reviews: 81 },
    { id: 25, name: "Designer Glass Frame 5", price: 310, image: glass5, rating: 4.6, reviews: 90 },
    { id: 26, name: "Luxury Glass Frame 6", price: 330, image: glass6, rating: 4.7, reviews: 102 },
    { id: 27, name: "Classic Glass Frame 7", price: 350, image: glass7, rating: 4.5, reviews: 88 },
    { id: 28, name: "Exclusive Glass Frame 8", price: 370, image: glass8, rating: 4.8, reviews: 115 },
    { id: 29, name: "Handcrafted Glass Frame 9", price: 390, image: glass9, rating: 4.6, reviews: 97 },
    { id: 30, name: "Premium Display Glass Frame 10", price: 420, image: glass10, rating: 4.9, reviews: 130 },
  ],

  "Collage Frames": [
    { id: 31, name: "Multi-Photo Collage Frame 1", price: 350, image: collage1, rating: 4.6, reviews: 189 },
    { id: 32, name: "Wall Grid Collage Frame 2", price: 420, image: collage2, rating: 4.3, reviews: 92 },
    { id: 33, name: "Creative Collage Frame 3", price: 280, image: collage3, rating: 4.4, reviews: 75 },
    { id: 34, name: "Designer Collage Frame 4", price: 300, image: collage4, rating: 4.2, reviews: 66 },
    { id: 35, name: "Family Collage Frame 5", price: 330, image: collage5, rating: 4.5, reviews: 81 },
    { id: 36, name: "Premium Collage Frame 6", price: 350, image: collage6, rating: 4.6, reviews: 95 },
    { id: 37, name: "Modern Collage Frame 7", price: 370, image: collage7, rating: 4.3, reviews: 54 },
    { id: 38, name: "Decorative Collage Frame 8", price: 390, image: collage8, rating: 4.7, reviews: 88 },
    { id: 39, name: "Luxury Collage Frame 9", price: 410, image: collage9, rating: 4.8, reviews: 102 },
    { id: 40, name: "Artistic Collage Frame 10", price: 450, image: collage10, rating: 4.9, reviews: 120 },
  ],

  "MDF Cut Frames": [
    { id: 41, name: "Laser Cut MDF Frame 1", price: 185, image: img1, rating: 4.0, reviews: 64 },
    { id: 42, name: "Ornate MDF Photo Frame 2", price: 220, image: img2, rating: 4.1, reviews: 43 },
    { id: 43, name: "Classic MDF Frame 3", price: 199, image: img3, rating: 4.3, reviews: 72 },
    { id: 44, name: "Modern MDF Frame 4", price: 210, image: img4, rating: 4.2, reviews: 51 },
    { id: 45, name: "Elegant MDF Frame 5", price: 230, image: img5, rating: 4.5, reviews: 68 },
    { id: 46, name: "Designer MDF Frame 6", price: 240, image: img6, rating: 4.4, reviews: 77 },
    { id: 47, name: "Handcrafted MDF Frame 7", price: 260, image: img7, rating: 4.6, reviews: 83 },
    { id: 48, name: "Premium MDF Frame 8", price: 280, image: img8, rating: 4.3, reviews: 92 },
    { id: 49, name: "Decorative MDF Frame 9", price: 300, image: img9, rating: 4.7, reviews: 105 },
    { id: 50, name: "Luxury MDF Frame 10", price: 320, image: img10, rating: 4.8, reviews: 120 },
  ],

  "Mosaic Frames": [
    { id: 51, name: "Handmade Mosaic Frame 1", price: 280, image: collage1, rating: 4.5, reviews: 95 },
    { id: 52, name: "Decorative Mosaic Frame 2", price: 295, image: collage3, rating: 4.4, reviews: 88 },
    { id: 53, name: "Premium Mosaic Frame 3", price: 310, image: img4, rating: 4.6, reviews: 105 },
    { id: 54, name: "Classic Mosaic Frame 4", price: 330, image: collage10, rating: 4.3, reviews: 76 },
    { id: 55, name: "Luxury Mosaic Frame 5", price: 350, image: img10, rating: 4.7, reviews: 120 },
  ],
};


const Frames = () => {
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

export default Frames;
