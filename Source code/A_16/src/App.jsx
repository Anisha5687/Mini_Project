


import React from "react";
import { RouterProvider } from "react-router-dom"
import routes from "./routes/Routes"
import { Toaster } from "react-hot-toast";
import { CartProvider } from "./context/CartContext";
import { WishlistProvider } from "./context/WishlistContext";


const App = () => {
  return (
    <WishlistProvider>
    <CartProvider>
      <Toaster />
      <RouterProvider router={routes} />
    </CartProvider>
    </WishlistProvider>
  );
};

export default App;

