import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/Layout";
import Home from "../pages/Home";
import Wishlist from "../pages/Wishlist";
import Cart from "../pages/Cart";

// ✅ product category pages
import Frames from "../pages/Frames";
import FramesProducts from "../pages/FramesProducts";
import Keychines from "../pages/keychines";
import CupsPage from "../pages/cups";
import MobileCasesPage from "../pages/mobilecases";
import PillowPage from "../pages/pillowart";

// ✅ auth pages
import Login from "../auth/Login";
import Register from "../auth/Register";
import ForgetPassword from "../auth/ForgetPassword";

// ✅ user profile pages
import UserLayout from "../components/user/UserLayout";
import UserAccount from "../components/user/UserAccount";
import UpdatePicture from "../components/user/UpdatePicture";
import UpdateProfile from "../components/user/UpdateProfile";
import UpdatePassword from "../components/user/UpdatePassword";
import DeleteAccount from "../components/user/DeleteAccount";

// ✅ order pages
import BuyNowPage from "../pages/BuyNowPage";
import PaymentPage from "../pages/PaymentPage";
import Checkout from "../pages/Checkout"; 
import Payment from "../pages/Payment";

// ✅ admin page
import AdminOrders from "../pages/AdminOrders";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      // ✅ home
      { path: "/", element: <Home /> },

      // ✅ auth routes
      { path: "auth/login", element: <Login /> },
      { path: "auth/register", element: <Register /> },
      { path: "auth/forget-password", element: <ForgetPassword /> },

      // ✅ product category routes
      { path: "frames", element: <Frames /> },
      { path: "frames/:id", element: <FramesProducts /> },
      { path: "keychines", element: <Keychines /> },
      { path: "cups", element: <CupsPage /> },
      { path: "mobilecases", element: <MobileCasesPage /> },
      { path: "pillowart", element: <PillowPage /> },

      // ✅ wishlist + cart routes
      { path: "wishlist", element: <Wishlist /> },
      { path: "cart", element: <Cart /> },

      // ✅ order routes
      { path: "buy-now", element: <BuyNowPage /> },
      { path: "payment", element: <PaymentPage /> },
      { path: "checkout", element: <Checkout /> },
       { path: "payment1", element: <Payment /> },
       // 👈 added Checkout route

      // ✅ user profile routes
      {
        path: "user-profile",
        element: <UserLayout />,
        children: [
          { index: true, element: <UserAccount /> },
          { path: "update-picture", element: <UpdatePicture /> },
          { path: "update-profile", element: <UpdateProfile /> },
          { path: "update-password", element: <UpdatePassword /> },
          { path: "delete-account", element: <DeleteAccount /> },
        ],
      },

      // ✅ admin route
      { path: "admin/orders", element: <AdminOrders /> },
    ],
  },
]);

export default routes;
