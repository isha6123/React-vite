import { FaFacebookF, FaYoutube, FaTwitter, FaLinkedinIn, FaEnvelope, FaUser, FaFlag } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-gray-700 py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">

        {/* PagarBook Info */}
        <div>
          <h2 className="text-2xl font-bold mb-2">
            Pagar<span className="font-normal">Book</span>
          </h2>
          <p className="text-gray-600">Gyankaar Technologies Pvt Ltd.</p>
          <p className="mt-2 text-sm text-gray-500 leading-relaxed">
            3rd Floor, #1545, 19th Main Rd, opp. to BMTC Bus depot,<br />
            1st Sector, HSR Layout, Bengaluru, Karnataka, 560102
          </p>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Find us on</h3>
          <div className="flex justify-center md:justify-start space-x-4 mb-2">
            <a href="#" className="text-gray-500 hover:text-blue-600 transition duration-300">
              <FaFacebookF className="text-xl" />
            </a>
            <a href="#" className="text-gray-500 hover:text-red-600 transition duration-300">
              <FaYoutube className="text-xl" />
            </a>
            <a href="#" className="text-gray-500 hover:text-blue-400 transition duration-300">
              <FaTwitter className="text-xl" />
            </a>
            <a href="#" className="text-gray-500 hover:text-blue-700 transition duration-300">
              <FaLinkedinIn className="text-xl" />
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-900 transition duration-300">
              <FaEnvelope className="text-xl" />
            </a>
          </div>
          <p className="text-sm text-gray-600">contact@pagarbook.com</p>
        </div>

        {/* Other Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Other Links</h3>
          <div className="flex justify-center md:justify-start space-x-3 text-sm">
            <a href="#" className="hover:underline transition duration-300">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="hover:underline transition duration-300">Terms & Conditions</a>
          </div>
        </div>

      </div>

      {/* Divider */}
      <div className="border-t border-gray-300 my-8"></div>

      {/* Assistance + Stats Section */}
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">

        {/* Assistance Text */}
        <div className="text-left w-full md:w-2/3">
          <h3 className="text-lg font-semibold">
            Need assistance? We're here to help. (Monday to Sunday, 8am - 8pm)
          </h3>
          <div className="mt-2 text-sm flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6">
            <p>Call Us: <a href="tel:08095332013" className="font-semibold text-gray-900">08095332013</a></p>
            <p>Whatsapp: <a href="https://wa.me/918095332013" className="font-semibold text-gray-900">+91 8095332013</a></p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="flex flex-col sm:flex-row items-center gap-6 mt-6 md:mt-0">
          <div className="flex items-center gap-3">
            <div className="bg-green-100 p-2 rounded-full w-10 h-10 flex items-center justify-center">
              <FaUser className="text-green-600 text-lg" />
            </div>
            <div>
              <p className="font-semibold text-gray-900 text-lg">80+ Lakhs</p>
              <p className="text-gray-500 text-sm">Registered SMEs</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="bg-blue-100 p-2 rounded-full w-10 h-10 flex items-center justify-center">
              <FaFlag className="text-blue-600 text-lg" />
            </div>
            <div>
              <p className="font-semibold text-gray-900 text-lg">650+ Districts</p>
              <p className="text-gray-500 text-sm">Presence in India</p>
            </div>
          </div>
        </div>

      </div>

      {/* Copyright */}
      <div className="mt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Gyankaar Technologies Pvt Ltd
      </div>
    </footer>
  );
};

export default Footer;
