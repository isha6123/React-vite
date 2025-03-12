import React, { useState } from "react";
import { 
  FaBars, FaTimes, FaMobileAlt, FaDesktop, 
  FaUsers, FaCamera, FaMapMarkerAlt 
} from "react-icons/fa";

//  Import the logo
import PagarBookLogo from "../assets/pagarbook-logo.png";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="w-full py-4 px-6 shadow-md flex items-center bg-white fixed top-0 left-0 right-0 z-50">
      
      {/* Wrap Logo and Toggle Button */}
      <div className="flex items-center gap-3">
        {/* Mobile Menu Icon (Left Side) */}
        <button
          className="md:hidden text-2xl text-gray-700"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Logo Image */}
        <img src={PagarBookLogo} alt="PagarBook Logo" className="w-32 md:w-40" />
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-6 items-center text-gray-700 text-sm ml-auto">
        <li 
          className="font-semibold relative cursor-pointer hover:text-blue-600"
          onMouseEnter={() => setShowDropdown(true)}
          onMouseLeave={() => setShowDropdown(false)}
        >
          Products <span className="ml-1">▾</span>
          {showDropdown && (
            <div className="absolute top-10 left-0 bg-white shadow-lg rounded-xl w-56 py-2 z-50 border">
              <DropdownItem icon={<FaMobileAlt />} label="Mobile Premium App" />
              <DropdownItem icon={<FaDesktop />} label="Desktop App" highlight />
              <DropdownItem icon={<FaUsers />} label="Staff App" />
              <DropdownItem icon={<FaCamera />} label="PagarBook Lens" />
              <DropdownItem icon={<FaMapMarkerAlt />} label="PagarBook Geo" />
            </div>
          )}
        </li>
        <li className="cursor-pointer hover:text-blue-600 hover:font-semibold">
          Contact
        </li>
        <li className="cursor-pointer hover:text-blue-600 hover:font-semibold">
          Pricing
        </li>
        <li className="cursor-pointer hover:text-blue-600 hover:font-semibold">
          Channel Partner
        </li>
        <li className="text-blue-600 font-semibold cursor-pointer">
          We Are Hiring!
        </li>
      </ul>

      {/* Buttons */}
      <div className="hidden md:flex gap-4 items-center ml-auto">
        <button className="text-blue-600 font-medium">Login / SignUp</button>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md font-semibold">
          Request Callback
        </button>
      </div>

      {/* Mobile Menu (Opens Below) */}
      {isMobileMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md py-6 px-6 z-50 md:hidden">
          <ul className="flex flex-col gap-4 text-gray-700 text-sm">
            <li 
              className="font-semibold cursor-pointer hover:text-blue-600"
              onClick={() => setShowDropdown(!showDropdown)}
            >
              Products <span className="ml-1">▾</span>
              {showDropdown && (
                <div className="mt-2 space-y-2">
                  <DropdownItem icon={<FaMobileAlt />} label="Mobile Premium App" />
                  <DropdownItem icon={<FaDesktop />} label="Desktop App" highlight />
                  <DropdownItem icon={<FaUsers />} label="Staff App" />
                  <DropdownItem icon={<FaCamera />} label="PagarBook Lens" />
                  <DropdownItem icon={<FaMapMarkerAlt />} label="PagarBook Geo" />
                </div>
              )}
            </li>
            <li className="cursor-pointer hover:text-pink-600">Contact</li>
            <li className="cursor-pointer hover:text-blue-600">Pricing</li>
            <li className="cursor-pointer hover:text-blue-600">Channel Partner</li>
            <li className="text-blue-600 font-semibold cursor-pointer">
              We Are Hiring!
            </li>
          </ul>
          <div className="mt-6 flex flex-col gap-4">
            <button className="text-blue-600 font-medium">Login / SignUp</button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md font-semibold">
              Request Callback
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

const DropdownItem = ({ icon, label, highlight = false }) => (
  <div
    className={`flex items-center gap-3 px-4 py-3 cursor-pointer ${
      highlight
        ? "bg-gray-100 font-semibold text-gray-900"
        : "hover:bg-gray-100 text-gray-700"
    }`}
  >
    <div
      className={`w-10 h-10 flex items-center justify-center rounded-full ${
        highlight ? "bg-blue-100 text-blue-600" : "bg-gray-100 text-gray-500"
      }`}
    >
      {icon}
    </div>
    <span>{label}</span>
  </div>
);

export default Navbar;



