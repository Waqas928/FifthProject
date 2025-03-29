import React from 'react';

function ContactDetails({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-400 bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg relative max-w-sm w-full">
        <h3 className="text-xl font-semibold text-gray-800">Contact Info</h3>
        
        <p className="mt-2 text-gray-600">
          Email:{" "}
          <a href="mailto:mwbkkj@gmail.com" className="text-blue-500 hover:underline">
            mwbkkj@gmail.com
          </a>
        </p>

        <p className="text-gray-600">
          Phone:{" "}
          <a href="tel:+923126318724" className="text-blue-500 hover:underline">
            +92 312 6318724
          </a>
        </p>

        <p className="text-gray-600">
          LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/muhammad-waqas-gold-medallist-finance-graduate-b58873206/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            https://www.linkedin.com/in...
          </a>
        </p>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 text-2xl font-bold"
          aria-label="Close"
        >
          ×
        </button>
      </div>
    </div>
  );
}

export default ContactDetails;