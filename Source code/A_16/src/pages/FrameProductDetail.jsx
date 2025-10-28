import { useContext, useState } from "react";
import { CartContextAPI } from "../context/CartContext";
import { storage } from "../backend/FirebaseConfig";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const FrameProductDetail = ({ product }) => {
  const { addToCart } = useContext(CartContextAPI);

  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [customName, setCustomName] = useState("");
  const [photo, setPhoto] = useState(null);

  // 🔹 Upload photo to Firebase Storage
  const handlePhotoUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const storageRef = ref(storage, `uploads/${Date.now()}_${file.name}`);
    await uploadBytes(storageRef, file);
    const downloadURL = await getDownloadURL(storageRef);
    setPhoto(downloadURL); // ✅ Save URL
  };

  const handleAddToCart = () => {
    const cartItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      selectedColor,
      selectedSize,
      customName,
      photo, // ✅ saved as URL
      quantity: 1,
    };

    addToCart(cartItem);
  };

  return (
    <div>
      <h2>{product.name}</h2>
      <p>Price: ₹{product.price}</p>

      <input
        type="file"
        accept="image/*"
        onChange={handlePhotoUpload}
      />

      <input
        type="text"
        placeholder="Custom Name"
        value={customName}
        onChange={(e) => setCustomName(e.target.value)}
      />

      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default FrameProductDetail;

