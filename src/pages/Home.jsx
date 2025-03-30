import React, { useState } from 'react';
import image1 from '../assets/OneHospital.jpg';
import image2 from '../assets/TwoHospital.jpg';
import image3 from '../assets/ThreeHospital.jpg';
import image4 from '../assets/FourHospital.jpg';

function Home() {
  const images = [image1, image2, image3, image4];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 overflow-x-hidden">
      {/* Title */}
      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 sm:mb-6 lg:mb-8 text-center">
        Welcome to Our Hospital
      </h1>

      {/* Image Carousel */}
      <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto mb-4 sm:mb-6 lg:mb-8">
        <img
          src={images[currentImageIndex]}
          alt={`Hospital Image ${currentImageIndex + 1}`}
          className="w-full h-48 sm:h-64 md:h-72 lg:h-80 object-cover rounded-lg shadow-md cursor-pointer"
          loading="lazy"
        />
        <button
          onClick={handlePrev}
          className="absolute top-1/2 left-2 transform -translate-y-1/2 text-2xl sm:text-3xl lg:text-4xl text-white hover:text-gray-300 focus:outline-none transition-colors"
          aria-label="Previous Image"
        >
          &lt;
        </button>
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-2 transform -translate-y-1/2 text-2xl sm:text-3xl lg:text-4xl text-white hover:text-gray-300 focus:outline-none transition-colors"
          aria-label="Next Image"
        >
          &gt;
        </button>
      </div>
    </div>
  );
}

export default Home;