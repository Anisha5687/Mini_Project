
// // import NavbarContainer from "../components/NavbarContainer";
// // import { Outlet } from "react-router-dom";

// // const Layout = () => {
// //   return (
// //     <div >
// //       <NavbarContainer/>
// //       <Outlet/>
// //     </div>
// //   )
// // }

// // export default Layout;
// import NavbarContainer from "../components/NavbarContainer";
// import { Outlet } from "react-router-dom";

// const Layout = () => {
//   return (
//     <div className="relative">
   
//       <div className="sticky top-0 z-50">
//         <NavbarContainer />
//       </div>

//       <div>
//         <Outlet />
//       </div>
//     </div>
//   );
// };

// export default Layout;
// src/pages/Layout.jsx
import NavbarContainer from "../components/NavbarContainer";
import Footer from "./Footer"; // ✅ import Footer
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="relative flex flex-col min-h-screen">
      {/* Navbar (sticky at top) */}
      <div className="sticky top-0 z-50">
        <NavbarContainer />
      </div>

      {/* Page Content */}
      <div className="flex-grow">
        <Outlet />
      </div>

      {/* Footer (always visible at bottom) */}
      <Footer />
    </div>
  );
};

export default Layout;
