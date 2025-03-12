import React from "react";
import { FaAndroid, FaApple, FaDesktop } from "react-icons/fa";
import heroImage from "../assets/hero-image.jpg"; // Update with correct path

const HeroSection = () => {
  return (
    <section className="w-full py-14 md:py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8 flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16">
        
        {/* Left Side - Text & CTA */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-snug">
            PagarBook Lagao, <br className="hidden md:block" /> 
            <span className="text-black">Business Badhao</span>
          </h1>
          <p className="text-gray-600 text-base sm:text-lg mb-6 leading-relaxed">
            Manage your staff attendance, salary, payments <br className="hidden sm:block" />
            and compliances in a few clicks.
          </p>

          {/* Sign Up Button */}
          <button className="bg-blue-600 text-white px-6 sm:px-8 py-3 rounded-md font-semibold text-base sm:text-lg mb-6 hover:bg-blue-700 active:bg-blue-800 transition">
            Sign Up
          </button>

          {/* Available on - Icons */}
          <div className="flex justify-center md:justify-start items-center gap-4 text-gray-600 text-sm sm:text-base font-medium">
            <span>Available on</span>
            <a href="#" className="hover:text-green-600 active:scale-90 transition-transform">
              <FaAndroid size={22} />
            </a>
            <a href="#" className="hover:text-black active:scale-90 transition-transform">
              <FaApple size={22} />
            </a>
            <a href="#" className="hover:text-blue-600 active:scale-90 transition-transform">
              <FaDesktop size={22} />
            </a>
          </div>
        </div>

        {/* Right Side - Image Section */}
        <div className="flex-1 relative flex justify-center">
          {/* Dotted Background Pattern */}
          <div className="absolute top-[-20px] left-[-30px] w-48 h-48 sm:w-64 sm:h-64 bg-[url('/dots-pattern.svg')] bg-cover opacity-30"></div>

          {/* Blue Circular Background */}
          <div className="relative w-60 h-60 sm:w-80 sm:h-80 bg-blue-50 rounded-full flex items-center justify-center overflow-hidden">
            {/* User Image */}
            <img
              src={heroImage}
              alt="Hero"
              className="relative z-10 w-full h-full object-cover"
            />

            {/* Speech Bubble */}
            <div className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-blue-600 text-white text-xs sm:text-sm p-3 sm:p-4 rounded-lg shadow-lg max-w-[180px] sm:max-w-[200px] leading-tight">
              My entire staff’s payroll <br />
              with a single app
              {/* Speech Bubble Tail */}
              <div className="absolute -bottom-1 left-4 w-3 h-3 bg-blue-600 rotate-45"></div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;

// import React from "react";
// import { FaAndroid, FaApple, FaDesktop } from "react-icons/fa";
// import heroImage from "../assets/hero-image.jpg"; // Update this to correct image path

// const HeroSection = () => {
//   return (
//     <section className="w-full pt-28 md:pt-32 pb-14 md:pb-24 bg-white relative z-0"> {/* Fixed overlap with navbar */}
//       <div className="max-w-[1200px] mx-auto px-6 md:px-8 flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16">
        
//         {/* Left Side - Text & CTA */}
//         <div className="flex-1 text-center md:text-left">
//           <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-snug">
//             PagarBook Lagao, <br className="hidden md:block" /> 
//             <span className="text-black">Business Badhao</span>
//           </h1>
//           <p className="text-gray-600 text-base sm:text-lg mb-6 leading-relaxed">
//             Manage your staff attendance, salary, payments <br className="hidden sm:block" />
//             and compliances in a few clicks.
//           </p>

//           {/* Sign Up Button */}
//           <button className="bg-blue-600 text-white px-6 sm:px-8 py-3 rounded-md font-semibold text-base sm:text-lg mb-6 hover:bg-blue-700 active:bg-blue-800 transition">
//             Sign Up
//           </button>

//           {/* Available on - Icons */}
//           <div className="flex justify-center md:justify-start items-center gap-4 text-gray-600 text-sm sm:text-base font-medium">
//             <span>Available on</span>
//             <a href="#" className="hover:text-green-600 active:scale-90 transition-transform">
//               <FaAndroid size={22} />
//             </a>
//             <a href="#" className="hover:text-black active:scale-90 transition-transform">
//               <FaApple size={22} />
//             </a>
//             <a href="#" className="hover:text-blue-600 active:scale-90 transition-transform">
//               <FaDesktop size={22} />
//             </a>
//           </div>
//         </div>

//         {/* Right Side - Image Section */}
//         <div className="flex-1 relative flex justify-center">
//           {/* Dotted Background Pattern */}
//           <div className="absolute top-[-10px] left-[-20px] w-40 h-40 sm:w-56 sm:h-56 bg-[url('/dots-pattern.svg')] bg-cover opacity-30 z-0"></div> {/* Pattern in background */}

//           {/* Blue Circular Background */}
//           <div className="relative w-60 h-60 sm:w-80 sm:h-80 bg-blue-50 rounded-full flex items-center justify-center overflow-hidden shadow-lg z-10">
//             {/* User Image */}
//             <img
//               src={heroImage}
//               alt="Hero"
//               className="w-full h-full object-cover"
//             />

//             {/* Speech Bubble */}
//             <div className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-blue-600 text-white text-xs sm:text-sm p-3 sm:p-4 rounded-lg shadow-lg max-w-[180px] sm:max-w-[200px] leading-tight">
//               My entire staff’s payroll <br />
//               with a single app
//               {/* Speech Bubble Tail */}
//               <div className="absolute -bottom-1 left-4 w-3 h-3 bg-blue-600 rotate-45"></div>
//             </div>
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default HeroSection;


