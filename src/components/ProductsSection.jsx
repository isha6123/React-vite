import React from "react";
import { FaUserCircle, FaFlag, FaLanguage } from "react-icons/fa"; // Importing icons
import premiumImg from "../assets/premium.png";
import desktopImg from "../assets/desktop.png";
import lensImg from "../assets/lens.png";
import staffImg from "../assets/staff.png";

const stats = [
  { icon: <FaUserCircle className="text-green-500" />, title: "80+ Lakhs", subtitle: "Registered SMEs" },
  { icon: <FaFlag className="text-blue-500" />, title: "650+ Districts", subtitle: "Presence in India" },
  { icon: <FaLanguage className="text-yellow-500" />, title: "10+ Languages", subtitle: "Used across India" },
];

const products = [
  {
    name: "Premium App",
    description:
      "Get premium features like selfie & location based attendance, manager mode and cashbook",
    image: premiumImg,
    bgColor: "bg-yellow-100",
  },
  {
    name: "Desktop",
    description:
      "Easy payroll management with PF/ESI, bulk payments, intelligent dashboards and much more",
    image: desktopImg,
    bgColor: "bg-blue-100",
  },
  {
    name: "Lens",
    description:
      "Touchless Facial Attendance Powered by AI Technology. Mark attendance using your Android Device Camera",
    image: lensImg,
    bgColor: "bg-green-100",
  },
  {
    name: "Staff App",
    description:
      "Staff can mark attendance and access salary slips at their fingertips",
    image: staffImg,
    bgColor: "bg-blue-100",
  },
];

const ProductsSection = () => {
  return (
    <section className="py-16 px-4 sm:px-8 bg-gray-50">
      {/* Stats */}
      <div className="bg-white rounded-lg shadow p-6 md:p-10 flex flex-col sm:flex-row sm:justify-around gap-6 max-w-6xl mx-auto mb-16">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="flex items-center gap-4 text-center sm:text-left"
          >
            {/* Icon Box */}
            <div className="text-4xl p-4 bg-gray-100 rounded-full">
              {stat.icon}
            </div>
            {/* Text */}
            <div>
              <h3 className="font-bold text-xl text-gray-900">{stat.title}</h3>
              <p className="text-gray-600 text-sm">{stat.subtitle}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Products Heading - Matches Your Image */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900">Our Products</h2>
        <p className="text-gray-600 text-lg leading-relaxed mt-2 max-w-2xl mx-auto">
          Wide range of products especially designed to support your unique
          business needs
        </p>
      </div>

      {/* Product Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
        {products.map((product, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center bg-white rounded-xl shadow-sm p-6 hover:shadow-lg transition transform hover:scale-105"
          >
            {/* Image Container */}
            <div className={`w-36 h-36 rounded-full ${product.bgColor} flex items-center justify-center mb-6 overflow-hidden shadow-md`}>
              <img
                src={product.image}
                alt={product.name}
                className="object-cover w-full h-full"
              />
            </div>
            {/* Product Name */}
            <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
            {/* Description */}
            <p className="text-sm text-gray-600 mt-2">{product.description}</p>
            {/* View Details Button */}
            <button className="mt-4 text-blue-600 text-sm font-semibold hover:underline">
              View Details
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductsSection;


