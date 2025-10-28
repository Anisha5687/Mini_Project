
import React, { useState, useEffect } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaWhatsapp, FaFacebook, FaInstagram, FaEnvelope } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import InfoSection from "./Infosection";

const HomePage = () => {
  const navigate = useNavigate();

  // --- Slider Data ---
  const slides = [
    {
      image: "/img 1.jpg",
      quote: "“Beautiful frames that hold your memories forever.”",
    },
    {
      image: "/img 2.jpg",
      quote: "“Personalized gifts made with love.”",
    },
    {
      image: "/img 3.jpg",
      quote: "“Turn your moments into timeless treasures.”",
    },
  ];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [slides.length]);

  // --- Categories (circle) ---
  const categories = [
    { id: 1, image: "/img 1.jpg", name: "Frames", path: "/frames" },
    { id: 2, image: "/img 2.jpg", name: "Keychains", path: "/keychines" },
    { id: 3, image: "/img 3.jpg", name: "Cups", path: "/cups" },
    { id: 4, image: "/img 4.jpg", name: "Mobile Cases", path: "/mobilecases" },
    { id: 5, image: "/img 1.jpg", name: "Pillow Art", path: "/pillowart" },
  ];

  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 6;

  const handlePrev = () => {
    setStartIndex((prev) =>
      prev === 0 ? categories.length - visibleCount : prev - 1
    );
  };

  const handleNext = () => {
    setStartIndex((prev) =>
      prev + visibleCount >= categories.length ? 0 : prev + 1
    );
  };

  // --- Product Sections with products ---
  const sections = [
    {
      title: "Frames",
      path: "/frames",
      products: [
        { id: 1, name: "Wooden Frame", price: "₹499", image: "/img 1.jpg" },
        { id: 2, name: "Glass Frame", price: "₹699", image: "/img 2.jpg" },
        { id: 3, name: "Collage Frame", price: "₹899", image: "/img 3.jpg" },
        { id: 4, name: "LED Frame", price: "₹1299", image: "/img 4.jpg" },
        { id: 5, name: "Custom Frame", price: "₹1599", image: "/img 1.jpg" },
      ],
    },
    {
      title: "Mugs",
      path: "/cups",
      products: [
        { id: 1, name: "Photo Mug", price: "₹299", image: "/img 2.jpg" },
        { id: 2, name: "Magic Mug", price: "₹399", image: "/img 3.jpg" },
        { id: 3, name: "Couple Mug", price: "₹499", image: "/img 1.jpg" },
        { id: 4, name: "Custom Mug", price: "₹599", image: "/img 4.jpg" },
      ],
    },
    {
      title: "Keychains",
      path: "/keychines",
      products: [
        { id: 1, name: "Wooden Keychain", price: "₹199", image: "/img 3.jpg" },
        { id: 2, name: "Metal Keychain", price: "₹249", image: "/img 1.jpg" },
        { id: 3, name: "Photo Keychain", price: "₹299", image: "/img 2.jpg" },
        { id: 4, name: "Couple Keychain", price: "₹349", image: "/img 4.jpg" },
      ],
    },
  ];

  return (
    <div className="w-full min-h-screen bg-gray-100 flex flex-col items-center gap-10 py-10">
      {/* --- Top Rectangle Slider --- */}
      <div className="relative w-[95%] md:w-[80%] lg:w-[75%] h-[280px] bg-white rounded-2xl shadow-xl overflow-hidden flex items-center">
        <div
          key={currentSlide}
          className="w-full h-full flex items-center justify-center p-6 transition-all duration-700"
        >
          <img
            src={slides[currentSlide].image}
            alt="slide"
            className="w-[38%] h-[80%] object-cover rounded-xl shadow-md"
          />
          <p className="ml-6 text-xl font-semibold text-gray-700 italic">
            {slides[currentSlide].quote}
          </p>
        </div>
      </div>

      {/* --- Category Circles --- */}
      <div className="w-full md:w-[90%] lg:w-[80%] flex items-center justify-center gap-4">
        <button
          onClick={handlePrev}
          className="p-2 rounded-full bg-gray-300 hover:bg-gray-400"
        >
          <IoIosArrowBack size={24} />
        </button>

        <div className="flex gap-6 overflow-hidden">
          {categories
            .slice(startIndex, startIndex + visibleCount)
            .map((cat) => (
              <div
                key={cat.id}
                onClick={() => navigate(cat.path)}
                className="flex flex-col items-center cursor-pointer"
              >
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-24 h-24 md:w-28 md:h-28 rounded-full object-cover shadow-md border-4 border-gray-300 hover:scale-105 transition-transform duration-300"
                />
                <span className="mt-2 text-sm font-medium text-gray-700">
                  {cat.name}
                </span>
              </div>
            ))}
        </div>

        <button
          onClick={handleNext}
          className="p-2 rounded-full bg-gray-300 hover:bg-gray-400"
        >
          <IoIosArrowForward size={24} />
        </button>
      </div>

      {/* --- Product Sections with arrows like categories --- */}
      <div className="w-full md:w-[90%] lg:w-[80%] flex flex-col gap-10 mt-10">
        {sections.map((section, index) => {
          const [secIndex, setSecIndex] = useState(0);
          const visibleProducts = 3;

          const prevSection = () => {
            setSecIndex((prev) =>
              prev === 0 ? section.products.length - visibleProducts : prev - 1
            );
          };

          const nextSection = () => {
            setSecIndex((prev) =>
              prev + visibleProducts >= section.products.length ? 0 : prev + 1
            );
          };

          return (
            <div
              key={index}
              className="w-full bg-white rounded-xl shadow-md p-4"
            >
              {/* Heading */}
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-gray-800">
                  {section.title}
                </h2>
                <button
                  onClick={() => navigate(section.path)}
                  className="text-sm text-blue-500 hover:underline"
                >
                  View All
                </button>
              </div>

              {/* Products with arrows */}
              <div className="flex items-center gap-4">
                <button
                  onClick={prevSection}
                  className="p-2 rounded-full bg-gray-200 hover:bg-gray-300"
                >
                  <IoIosArrowBack size={20} />
                </button>

                <div className="flex gap-6 overflow-hidden">
                  {section.products
                    .slice(secIndex, secIndex + visibleProducts)
                    .map((prod) => (
                      <div
                        key={prod.id}
                        onClick={() => navigate(section.path)}
                        className="w-40 bg-gray-100 rounded-lg shadow hover:scale-105 transition-transform duration-300 cursor-pointer p-2 flex flex-col items-center"
                      >
                        <img
                          src={prod.image}
                          alt={prod.name}
                          className="w-full h-28 object-cover rounded-md"
                        />
                        <span className="mt-2 text-sm font-medium text-gray-800">
                          {prod.name}
                        </span>
                        <span className="text-sm text-green-600">
                          {prod.price}
                        </span>
                      </div>
                    ))}
                </div>

                <button
                  onClick={nextSection}
                  className="p-2 rounded-full bg-gray-200 hover:bg-gray-300"
                >
                  <IoIosArrowForward size={20} />
                </button>
              </div>
            </div>
          );
        })}
      </div>

     <InfoSection/>
    </div>
  );
};

export default HomePage;