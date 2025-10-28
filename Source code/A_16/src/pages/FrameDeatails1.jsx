import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { framesByCategory } from "./FrPage";

const FrameDeatails1 = () => {
  const { id } = useParams();
  const frameId = parseInt(id);
  const allFrames = Object.values(framesByCategory).flat();
  const frame = allFrames.find((f) => f.id === frameId);

  const [selectedColor, setSelectedColor] = useState("brown");
  const [selectedSize, setSelectedSize] = useState("4x6");
  const [name, setName] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  if (!frame) return <p className="p-6">Frame not found!</p>;

  const handleFileChange = (event) => setSelectedFile(event.target.files[0]);
  const handleAddToCart = () => alert("Added to cart!");
  const handleBuyNow = () => alert("Proceeding to checkout!");
  const handleAddToWishlist = () => alert("Added to wishlist!");

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Breadcrumb */}
        <nav className="flex mb-6 text-sm">
          <ol className="flex items-center space-x-2">
            <li><a href="#" className="text-gray-500 hover:text-gray-700">Home</a></li>
            <li><span className="text-gray-300">/</span></li>
            <li><a href="#" className="text-gray-500 hover:text-gray-700">Frames</a></li>
            <li><span className="text-gray-300">/</span></li>
            <li className="text-gray-800 font-medium">{frame.name}</li>
          </ol>
        </nav>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img src={frame.image} alt={frame.name} className="w-full rounded object-cover" />
            </div>
          </div>

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
                  { value: "dark-brown", color: "#964B00", name: "Dark Brown" }
                ].map((color) => (
                  <div
                    key={color.value}
                    className={`w-8 h-8 rounded-full mr-3 cursor-pointer border-2 ${selectedColor === color.value ? "border-gray-700" : "border-transparent"}`}
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
                    className={`px-4 py-2 border rounded mr-3 cursor-pointer ${selectedSize === size ? "border-blue-500 bg-blue-50" : "border-gray-300"}`}
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

            {/* Upload Image */}
            <div className="mb-6">
              <h3 className="font-semibold mb-2">Upload Your Photo</h3>
              <label className="block border border-dashed border-gray-400 p-4 rounded cursor-pointer text-center">
                <input type="file" className="hidden" onChange={handleFileChange} />
                <span className="text-gray-600">Choose File</span>
              </label>
              {selectedFile && <p className="mt-2 text-sm text-gray-600">Selected file: {selectedFile.name}</p>}
              <p className="text-sm text-gray-500 mt-2">Supported formats: JPG, PNG (Max 5MB)</p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <button onClick={handleAddToCart} className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded font-semibold">Add to Cart</button>
              <button onClick={handleBuyNow} className="flex-1 bg-white hover:bg-gray-50 text-blue-600 border border-blue-600 py-3 px-6 rounded font-semibold">Buy Now</button>
            </div>

            <button onClick={handleAddToWishlist} className="w-full py-3 border border-gray-300 rounded text-gray-700 hover:bg-gray-50">Add to Wishlist</button>

            {/* Product Details */}
            <div className="mt-8">
              <h3 className="font-semibold mb-2">Product Details</h3>
              <ul className="list-disc pl-5 text-sm text-gray-600">
                <li>High-quality frame</li>
                <li>Glass front protection</li>
                <li>Available in multiple sizes</li>
                <li>Easy to hang with included hardware</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameDeatails1;
