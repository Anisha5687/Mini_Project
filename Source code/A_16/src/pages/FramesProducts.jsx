import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { framesByCategory } from "./Frames";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";

const FramesProducts = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const frameId = parseInt(id);
  const allFrames = Object.values(framesByCategory).flat();
  const frame = allFrames.find((f) => f.id === frameId);

  const [selectedColor, setSelectedColor] = useState("brown");
  const [selectedSize, setSelectedSize] = useState("4x6");
  const [name, setName] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  const { addToCart } = useCart();
  const { addToWishlist, user, isInWishlist } = useWishlist();

  if (!frame) return <p className="p-6">Frame not found!</p>;

  const handleFileChange = (event) => setSelectedFile(event.target.files[0]);

  const handleAddToCart = () => {
    const cartItem = {
      id: `${frame.id}-${Date.now()}`,
      productId: frame.id,
      name: frame.name,
      price: frame.price,
      image: frame.image || "https://via.placeholder.com/300x200?text=No+Image",
      color: selectedColor,
      size: selectedSize,
      personalization: name,
      fileName: selectedFile ? selectedFile.name : null,
    };
    addToCart(cartItem);
    alert("✅ Item added to cart!");
  };

  const handleBuyNow = () => {
    const buyNowItem = {
      productId: frame.id,
      name: frame.name,
      price: frame.price,
      image: frame.image || "https://via.placeholder.com/300x200?text=No+Image",
      color: selectedColor,
      size: selectedSize,
      personalization: name,
      fileName: selectedFile ? selectedFile.name : null,
    };
    navigate("/buy-now", { state: { product: buyNowItem } });
  };

  const handleAddToWishlist = () => {
    if (!user) {
      alert("⚠️ Please log in to add to wishlist.");
      return;
    }

    const wishlistItem = {
      id: frame.id,
      name: frame.name,
      price: frame.price,
      image: frame.image || "https://via.placeholder.com/300x200?text=No+Image",
      color: selectedColor,
      size: selectedSize,
      personalization: name,
      category: "frames",
    };

    addToWishlist(wishlistItem);
  };

  const isItemInWishlist = isInWishlist(frame.id, selectedColor, selectedSize);

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Product Details */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left - Image */}
          <div className="md:w-1/2">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img
                src={frame.image || "https://via.placeholder.com/300x200?text=No+Image"}
                alt={frame.name}
                className="w-full rounded object-cover"
              />
            </div>
          </div>

          {/* Right - Details */}
          <div className="md:w-1/2">
            <h1 className="text-2xl font-bold mb-2">{frame.name}</h1>
            <p className="text-2xl font-bold text-blue-600 mb-4">₹{frame.price}</p>

            {/* Color Selection */}
            <div className="mb-6">
              <h3 className="font-semibold mb-2">Color</h3>
              <div className="flex items-center">
                {[
                  { value: "brown", color: "#8B4513", name: "Brown" },
                  { value: "black", color: "#000000", name: "Black" },
                  { value: "gold", color: "#D4AF37", name: "Gold" },
                  { value: "silver", color: "#C0C0C0", name: "Silver" },
                  { value: "dark-brown", color: "#964B00", name: "Dark Brown" },
                ].map((color) => (
                  <div
                    key={color.value}
                    className={`w-8 h-8 rounded-full mr-3 cursor-pointer border-2 ${
                      selectedColor === color.value ? "border-gray-700" : "border-transparent"
                    }`}
                    style={{ backgroundColor: color.color }}
                    title={color.name}
                    onClick={() => setSelectedColor(color.value)}
                  />
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div className="mb-6">
              <h3 className="font-semibold mb-2">Size</h3>
              <div className="flex">
                {["4x6", "5x7", "8x10", "11x14"].map((size) => (
                  <div
                    key={size}
                    className={`px-4 py-2 border rounded mr-3 cursor-pointer ${
                      selectedSize === size ? "border-blue-500 bg-blue-50" : "border-gray-300"
                    }`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </div>
                ))}
              </div>
            </div>

            {/* Personalization */}
            <div className="mb-6">
              <h3 className="font-semibold mb-2">Personalization</h3>
              <input
                type="text"
                placeholder="Enter Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* File Upload */}
            <div className="mb-6">
              <h3 className="font-semibold mb-2">Upload Image (Optional)</h3>
              <input
                type="file"
                onChange={handleFileChange}
                className="w-full border border-gray-300 p-2 rounded"
              />
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <button
                onClick={handleAddToCart}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded font-semibold"
              >
                Add to Cart
              </button>
              <button
                onClick={handleBuyNow}
                className="flex-1 bg-white hover:bg-gray-50 text-blue-600 border border-blue-600 py-3 px-6 rounded font-semibold"
              >
                Buy Now
              </button>
            </div>

            <button
              onClick={handleAddToWishlist}
              className={`w-full py-3 border border-gray-300 rounded text-gray-700 hover:bg-gray-50 ${
                isItemInWishlist ? "bg-yellow-100" : ""
              }`}
            >
              {isItemInWishlist ? "Added to Wishlist" : "Add to Wishlist"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FramesProducts;
