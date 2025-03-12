import React, { useState, useEffect } from "react";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";
import userImg1 from "../assets/user1.png";
import userImg2 from "../assets/user.png";
import userImg3 from "../assets/user2.png";
import economicTimes from "../assets/economic-times.png";
import inc42 from "../assets/inc42.png";
import entrepreneur from "../assets/entrepreneur.png";
import yourstory from "../assets/yourstory.png";

const TestimonialSection = () => {
  const images = [userImg1, userImg2, userImg3];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="w-full bg-white py-20">

      {/* Testimonial with Image Slider */}
      <div className="max-w-4xl mx-auto text-center px-6 relative">
        {/* Slider Image */}
        <div className="relative mb-6">
          <img
            src={images[currentIndex]}
            alt={`User ${currentIndex + 1}`}
            className="w-24 h-24 rounded-full mx-auto object-cover transition duration-500"
          />

          {/* Prev Button */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-100 p-2 rounded-full shadow hover:bg-gray-200 transition"
          >
            <HiOutlineChevronLeft className="w-6 h-6 text-gray-600" />
          </button>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-100 p-2 rounded-full shadow hover:bg-gray-200 transition"
          >
            <HiOutlineChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        {/* Testimonial Text */}
        <p className="text-lg md:text-xl text-gray-700 mb-6">
          “I am really happy to use <strong>PagarBook</strong>, it has really helped me to manage my staff. They maintain a good customer relationship, would insist others to use the product and see how good they are with their work.”
        </p>

        {/* User Name */}
        <h3 className="text-gray-600 font-medium text-lg">
          Aditya Goradia - Owner, Garodia Lifestyle & Garodia Fashion
        </h3>
      </div>

      {/* CTA */}
      <div className="mt-20 bg-blue-50 py-10 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <h2 className="text-2xl font-bold text-black mb-4 md:mb-0">
            Get in touch with us now!
          </h2>

          <button className="bg-blue-600 text-white px-8 py-3 rounded-md font-medium hover:bg-blue-700 transition">
            Request Callback
          </button>
        </div>
      </div>

      {/* Featured logos */}
      <div className="mt-16 text-center">
        <h3 className="text-lg font-semibold text-gray-700 mb-8">Featured On</h3>
        <div className="flex items-center justify-center flex-wrap gap-10 grayscale opacity-80">
          <img src={economicTimes} alt="Economic Times" className="h-8 md:h-10" />
          <img src={inc42} alt="Inc42" className="h-8 md:h-10" />
          <img src={entrepreneur} alt="Entrepreneur" className="h-8 md:h-10" />
          <img src={yourstory} alt="YourStory" className="h-8 md:h-10" />
        </div>
      </div>

    </section>
  );
};

export default TestimonialSection;

// import React, { useState, useEffect } from "react";
// import userImg1 from "../assets/user1.png";
// import userImg2 from "../assets/user1.png";
// import userImg3 from "../assets/user.png";
// import economicTimes from "../assets/economic-times.png";
// import inc42 from "../assets/inc42.png";
// import entrepreneur from "../assets/entrepreneur.png";
// import yourstory from "../assets/yourstory.png";

// const TestimonialSection = () => {
//   // Slider images array
//   const images = [userImg1, userImg2, userImg3];
//   const [currentIndex, setCurrentIndex] = useState(0); // Track current slide

//   // Auto-slide every 4 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 4000); // Change image every 4 seconds

//     return () => clearInterval(interval); // Clean up interval on unmount
//   }, [images.length]);

//   // Function to go to next image
//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   // Function to go to previous image
//   const prevSlide = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? images.length - 1 : prevIndex - 1
//     );
//   };

//   return (
//     <section className="w-full bg-white py-20">

//       {/* Testimonial with Image Slider */}
//       <div className="max-w-4xl mx-auto text-center px-6 relative">
//         {/* Slider Image */}
//         <div className="relative mb-6">
//           <img
//             src={images[currentIndex]}
//             alt={`User ${currentIndex + 1}`}
//             className="w-24 h-24 rounded-full mx-auto object-cover transition duration-500"
//           />

//           {/* Prev Button */}
//           <button
//             onClick={prevSlide}
//             className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full shadow hover:bg-gray-300"
//           >
//             &#8592;
//           </button>

//           {/* Next Button */}
//           <button
//             onClick={nextSlide}
//             className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full shadow hover:bg-gray-300"
//           >
//             &#8594;
//           </button>
//         </div>

//         {/* Testimonial Text */}
//         <p className="text-lg md:text-xl text-gray-700 mb-6">
//           “I am really happy to use <strong>PagarBook</strong>, it has really helped me to manage my staff. They maintain a good customer relationship, would insist others to use the product and see how good they are with their work.”
//         </p>

//         {/* User Name */}
//         <h3 className="text-gray-600 font-medium text-lg">
//           Aditya Goradia - Owner, Garodia Lifestyle & Garodia Fashion
//         </h3>
//       </div>

//       {/* CTA */}
//       <div className="mt-20 bg-blue-50 py-10 px-6">
//         <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between">
//           <h2 className="text-2xl font-bold text-black mb-4 md:mb-0">
//             Get in touch with us now!
//           </h2>

//           <button className="bg-blue-600 text-white px-8 py-3 rounded-md font-medium hover:bg-blue-700 transition">
//             Request Callback
//           </button>
//         </div>
//       </div>

//       {/* Featured logos */}
//       <div className="mt-16 text-center">
//         <h3 className="text-lg font-semibold text-gray-700 mb-8">Featured On</h3>
//         <div className="flex items-center justify-center flex-wrap gap-10 grayscale opacity-80">
//           <img src={economicTimes} alt="Economic Times" className="h-8 md:h-10" />
//           <img src={inc42} alt="Inc42" className="h-8 md:h-10" />
//           <img src={entrepreneur} alt="Entrepreneur" className="h-8 md:h-10" />
//           <img src={yourstory} alt="YourStory" className="h-8 md:h-10" />
//         </div>
//       </div>

//     </section>
//   );
// };

// export default TestimonialSection;

