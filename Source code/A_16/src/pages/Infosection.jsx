// File: src/components/InfoSection.js
import React from "react";
import { FaGoogle, FaTruck, FaRegSmile, FaHeadset, FaStar } from "react-icons/fa";

const InfoSection = () => {
  const faqs = [
    {
      question: "What is a photo frame?",
      answer:
        "A photo frame is a decorative border made of wood, plastic, or metal that surrounds and protects your photograph while enhancing its look.",
    },
    {
      question: "What are coloured photo frames?",
      answer:
        "Coloured photo frames are frames available in different shades and finishes (black, white, gold, silver, wooden, etc.) to match your décor style.",
    },
    {
      question: "Is there any specific quantity?",
      answer:
        "No, you can order even a single customized photo frame. Bulk quantity orders are also available with discounts.",
    },
    {
      question: "Is there any picture limit for a collage?",
      answer:
        "A collage frame can include anywhere from 5 to 100+ pictures, depending on the frame size and design chosen. More photos = smaller individual images.",
    },
    {
      question: "What is Spotify photo frames?",
      answer:
        "A Spotify photo frame is a personalized frame that displays your photo along with a scannable Spotify code of your chosen song, so you can play the song instantly by scanning it.",
    },
    {
      question: "What is a matte finish?",
      answer:
        "Matte finish gives your photo a smooth, non-shiny surface. It reduces glare and fingerprints, making it ideal for gifting and wall hanging.",
    },
    {
      question: "What are the various sizes you provide?",
      answer:
        "We provide multiple sizes – from small desk frames (4x6, 5x7 inches) to large wall frames (12x18, 16x24, 20x30 inches and more). Custom sizes can also be made on request.",
    },
    {
      question: "What is a canvas print?",
      answer:
        "A canvas print is a photo printed on high-quality canvas fabric and stretched over a wooden frame. It gives a premium, artistic look like a painting.",
    },
  ];

  return (
    <div className="w-full bg-white py-10">
      <div className="max-w-6xl mx-auto px-4">
        {/* FAQ Section */}
        <h2 className="text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group border rounded-xl bg-gray-50 p-4 shadow-sm transition hover:shadow-md"
            >
              <summary className="flex justify-between items-center cursor-pointer font-medium text-gray-800">
                {faq.question}
                <span className="ml-2 text-gray-500 group-open:rotate-45 transition-transform">
                  ➕
                </span>
              </summary>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>

        {/* Icons Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 text-center gap-6 mb-12">
          <div>
            <FaGoogle className="mx-auto text-3xl text-yellow-500" />
            <p className="mt-2 font-medium">Google Review</p>
            <p className="text-sm text-gray-500">4.5 star customer rating</p>
          </div>
          <div>
            <FaTruck className="mx-auto text-3xl text-blue-500" />
            <p className="mt-2 font-medium">Nationwide Delivery</p>
            <p className="text-sm text-gray-500">Delivery within India & internationally</p>
          </div>
          <div>
            <FaRegSmile className="mx-auto text-3xl text-green-500" />
            <p className="mt-2 font-medium">Satisfaction Guaranteed</p>
            <p className="text-sm text-gray-500">Free replacement/refund without question</p>
          </div>
          <div>
            <FaHeadset className="mx-auto text-3xl text-purple-500" />
            <p className="mt-2 font-medium">Support</p>
            <p className="text-sm text-gray-500">Have a question? Talk to us today!</p>
          </div>
        </div>

        {/* Reviews Section */}
        <h2 className="text-xl font-semibold mb-4">New Review</h2>
        <div className="bg-gray-50 border rounded-lg p-6 mb-6">
          <div className="flex items-center mb-2">
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <FaStar key={i} className="text-yellow-500" />
              ))}
            <span className="ml-2 text-sm text-gray-600">
              Overall 4.5 out of 5 from X Reviews
            </span>
          </div>
          <h3 className="font-medium">Customer Reviews</h3>
          <p className="mt-2 text-gray-700">
            ⭐⭐⭐⭐⭐ by <span className="font-semibold">Ayush Rathi</span>
          </p>
          <p className="text-sm text-gray-600 mt-1">
            Wanted to try a sample, so I ordered a smaller frame and photo. But the
            quality of the frame and the photo is so good that I will try a bigger
            framed photo next.
          </p>
        </div>

        {/* Pagination */}
        <div className="flex justify-center space-x-3 text-sm">
          <button className="px-3 py-1 border rounded bg-gray-200">Prev</button>
          <button className="px-3 py-1 border rounded bg-gray-200">1</button>
          <button className="px-3 py-1 border rounded bg-gray-200">2</button>
          <button className="px-3 py-1 border rounded bg-gray-200">Next</button>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
