// src/components/Footer.jsx
import React from "react";
import { FaWhatsapp, FaFacebook, FaInstagram, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-white py-8 mt-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* --- Find Stores --- */}
        <div>
          <h3 className="font-semibold mb-3">Find Stores</h3>
          <ul className="text-gray-300 text-sm space-y-1">
            <li>Bangalore</li>
            <li>Gurgaon</li>
            <li>New Delhi</li>
            <li>Chennai</li>
            <li>Hyderabad</li>
            <li>Pune</li>
          </ul>
        </div>

        {/* --- Company --- */}
        <div>
          <h3 className="font-semibold mb-3">Our Company</h3>
          <ul className="text-gray-300 text-sm space-y-1">
            <li>About Us</li>
            <li>Careers</li>
            <li>Blog</li>
          </ul>
        </div>

        {/* --- Support --- */}
        <div>
          <h3 className="font-semibold mb-3">Support</h3>
          <ul className="text-gray-300 text-sm space-y-1">
            <li>Help</li>
            <li>Business Solutions</li>
            <li>FAQ</li>
            <li>Track Order</li>
          </ul>
        </div>

        {/* --- Contact --- */}
        <div>
          <h3 className="font-semibold mb-3">CONTACT US</h3>
          <p className="text-gray-300 text-sm mb-2">📞 +91 951 379 4374</p>
          <p className="text-gray-300 text-sm mb-4">✉️ care@printbin.in</p>
          <div className="flex gap-4 text-2xl">
            <a href="https://wa.me/your-number" target="_blank" rel="noreferrer">
              <FaWhatsapp className="hover:text-green-500" />
            </a>
            <a href="https://facebook.com/your-page" target="_blank" rel="noreferrer">
              <FaFacebook className="hover:text-blue-500" />
            </a>
            <a href="https://instagram.com/your-id" target="_blank" rel="noreferrer">
              <FaInstagram className="hover:text-pink-500" />
            </a>
            <a href="mailto:yourmail@example.com">
              <FaEnvelope className="hover:text-red-400" />
            </a>
          </div>
        </div>
      </div>

      {/* --- Bottom --- */}
      <div className="text-center mt-6 text-sm text-gray-400">
        © {new Date().getFullYear()} Printbin Document Services Pvt. Ltd. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
