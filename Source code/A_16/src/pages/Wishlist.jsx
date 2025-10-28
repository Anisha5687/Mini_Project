import React from "react";
import { useWishlist } from "../context/WishlistContext";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const WishlistPage = () => {
  const { wishlist, removeFromWishlist, clearWishlist, user, loading } = useWishlist();
  const { addToCart } = useCart();
  const navigate = useNavigate();

  // Show loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-8 px-4 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading your wishlist...</p>
        </div>
      </div>
    );
  }

  // User not logged in
  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 py-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Please Log In</h2>
          <p className="text-gray-600 mb-4">You need to be logged in to view your wishlist.</p>
          <button 
            onClick={() => navigate("/login")}
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
          >
            Login
          </button>
        </div>
      </div>
    );
  }

  const handleAddToCart = (item) => {
    const cartItem = {
      id: `${item.id}-${Date.now()}`,
      productId: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
      color: item.color,
      size: item.size,
      personalization: item.personalization || "",
    };
    addToCart(cartItem);
    alert("✅ Item added to cart!");
  };

  const handleRemoveItem = (item) => {
    removeFromWishlist(item.id, item.color, item.size);
  };

  // Empty wishlist
  if (wishlist.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="text-6xl mb-4">❤️</div>
            <h2 className="text-2xl font-bold mb-4">Your Wishlist is Empty</h2>
            <p className="text-gray-600 mb-6">Start adding items you love to your wishlist!</p>
            <button 
              onClick={() => navigate("/frames")}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 font-semibold"
            >
              Browse Frames
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">My Wishlist ({wishlist.length} items)</h2>
          <button 
            onClick={clearWishlist}
            className="text-red-600 hover:text-red-800 text-sm font-medium"
          >
            Clear All
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishlist.map((item, index) => (
            <div key={item.uniqueId || `${item.id}-${index}`} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-4">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-48 object-cover rounded mb-4"
                  onError={(e) => {
                    e.target.src = "https://via.placeholder.com/300x200?text=No+Image";
                  }}
                />
                
                <h3 className="font-semibold text-lg mb-2 truncate">{item.name}</h3>
                <p className="text-blue-600 font-bold text-xl mb-2">₹{item.price}</p>
                
                <div className="text-sm text-gray-600 mb-3 space-y-1">
                  <p>Color: <span className="capitalize font-medium">{item.color}</span></p>
                  <p>Size: <span className="font-medium">{item.size}</span></p>
                  {item.personalization && (
                    <p>Personalization: <span className="font-medium">{item.personalization}</span></p>
                  )}
                </div>

                <div className="flex space-x-2">
                  <button
                    onClick={() => handleAddToCart(item)}
                    className="flex-1 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 text-sm font-medium transition-colors"
                  >
                    Add to Cart
                  </button>
                  <button
                    onClick={() => handleRemoveItem(item)}
                    className="bg-gray-200 text-gray-700 py-2 px-4 rounded hover:bg-gray-300 text-sm font-medium transition-colors"
                    title="Remove from wishlist"
                  >
                    ❌
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WishlistPage;