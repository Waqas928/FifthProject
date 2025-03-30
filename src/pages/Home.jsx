import React, { useState } from 'react';
import image1 from '../assets/MaleStudent.webp';
import image2 from '../assets/testingImg.jpg';
import image3 from '../assets/Waqas.jpeg';
import image4 from '../assets/Hospital.png';

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
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center px-4">
      {/* Title */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-6 md:mb-8">
        Welcome to Our Hospital
      </h1>

      {/* Image Carousel */}
      <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-4xl mx-auto mb-6 md:mb-8">
        <img
          src={images[currentImageIndex]}
          alt={`Hospital Image ${currentImageIndex + 1}`}
          className="w-full h-64 sm:h-72 md:h-80 lg:h-96 object-cover rounded-lg shadow-md"
        />

        {/* Left Button */}
        <button
          onClick={handlePrev}
          className="absolute top-1/2 left-2 sm:left-4 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 focus:outline-none"
        >
          ◀
        </button>

        {/* Right Button */}
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-2 sm:right-4 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 focus:outline-none"
        >
          ▶
        </button>
      </div>

      {/* Description */}
      <p className="text-sm sm:text-base md:text-lg text-gray-600 text-center max-w-xs sm:max-w-sm md:max-w-md lg:max-w-4xl px-2">
        Our hospital is a leading healthcare facility known for its high-quality medical care and patient-centered approach. With experienced doctors, skilled nurses, and state-of-the-art equipment, we ensure accurate diagnoses and effective treatments. Our hospital maintains a clean and safe environment, prioritizing patient comfort and well-being. Our dedicated staff provides compassionate care, clear communication, and round-the-clock emergency services. We are committed to excellence, offering advanced medical treatments at affordable costs, making quality healthcare accessible to all.
      </p>
    </div>
  );
}

export default Home;