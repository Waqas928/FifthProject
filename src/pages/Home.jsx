import React, { useState } from 'react';
// Import images from assets folder
import image1 from '../assets/MaleStudent.webp';
import image2 from '../assets/testingImg.jpg';
import image3 from '../assets/Waqas.jpeg';
import image4 from '../assets/Hospital.png';

function Home() {
  // Array of images
  const images = [image1, image2, image3, image4];
  
  // State to track the current image index
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Function to go to the previous image
  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Function to go to the next image
  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center">
      {/* Title */}
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Welcome to Our Hospital</h1>

      {/* Image Carousel */}
      <div className="relative w-80 max-w-4xl mx-auto mb-8">
        <img
          src={images[currentImageIndex]}
          alt={`Hospital Image ${currentImageIndex + 1}`}
          className="w-full h-96 object-cover rounded-lg shadow-md"
        />

        {/* Left Button */}
        <button
          onClick={handlePrev}
          className="absolute top-1/2  transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 focus:outline-none right-85"
        >
          &#9664; {/* Left arrow */}
        </button>

        {/* Right Button */}
        <button
          onClick={handleNext}
          className="absolute top-1/2  transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 focus:outline-none left-85"
        >  
          &#9654; {/* Right arrow */}
        </button>
      </div>

      
    </div>
  );
}

export default Home;