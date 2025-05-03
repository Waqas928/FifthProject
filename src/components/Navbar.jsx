import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import ContactForm from './ContactForm';
import ContactDetails from './ContactDetails';

function Navbar() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openForm = () => setIsFormOpen(true);
  const closeForm = () => setIsFormOpen(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <nav className="bg-gray-800 p-4 relative w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <div className="flex-shrink-0">
          <Link to="/">
            <Logo width="100px" className="w-20 xs:w-24 sm:w-[150px]" />
          </Link>
        </div>

        {/* Navigation Links - Always Visible */}
        <div className="flex-1 flex justify-center items-center">
          <ul className="flex flex-wrap justify-center items-center gap-1 xs:gap-2 sm:gap-4 lg:gap-6">
            <li>
              <Link 
                to="/" 
                className="text-white hover:text-gray-300 text-xs xs:text-sm sm:text-base whitespace-nowrap"
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/history" 
                className="text-white hover:text-gray-300 text-xs xs:text-sm sm:text-base whitespace-nowrap"
              >
                History
              </Link>
            </li>
            <li className="relative group">
              <button 
                className="text-white hover:text-gray-300 focus:outline-none flex items-center text-xs xs:text-sm sm:text-base whitespace-nowrap"
              >
                Departments <span className="ml-1 text-[6px] xs:text-[8px] sm:text-[10px]">▼</span>
              </button>
              <div className="absolute left-0 top-full w-36 xs:w-40 bg-white rounded-md shadow-lg z-10 hidden group-hover:block">
                <Link 
                  to="/departments/accountsDepartment" 
                  className="block px-2 xs:px-4 py-1 xs:py-2 text-gray-800 hover:bg-gray-100 text-xs xs:text-sm"
                >
                  Accounts Department
                </Link>
                <Link 
                  to="/departments/enggDepartment" 
                  className="block px-2 xs:px-4 py-1 xs:py-2 text-gray-800 hover:bg-gray-100 text-xs xs:text-sm"
                >
                  Engg. Department
                </Link>
              </div>
            </li>
            <li className="relative group">
              <button 
                className="text-white hover:text-gray-300 focus:outline-none flex items-center text-xs xs:text-sm sm:text-base whitespace-nowrap"
              >
                Services <span className="ml-1 text-[6px] xs:text-[8px] sm:text-[10px]">▼</span>
              </button>
              <div className="absolute left-0 top-full w-36 xs:w-40 bg-white rounded-md shadow-lg z-10 hidden group-hover:block">
                <Link 
                  to="/services/healthservices" 
                  className="block px-2 xs:px-4 py-1 xs:py-2 text-gray-800 hover:bg-gray-100 text-xs xs:text-sm"
                >
                  Health Services
                </Link>
                <Link 
                  to="/services/hostelservices" 
                  className="block px-2 xs:px-4 py-1 xs:py-2 text-gray-800 hover:bg-gray-100 text-xs xs:text-sm"
                >
                  Hostel Services
                </Link>
              </div>
            </li>
            <li>
              <Link 
                to="/downloads" 
                className="text-white hover:text-gray-300 text-xs xs:text-sm sm:text-base whitespace-nowrap"
              >
                Downloads
              </Link>
            </li>
            <li>
              <Link 
                to="/doctors" 
                className="text-white hover:text-gray-300 text-xs xs:text-sm sm:text-base whitespace-nowrap"
              >
                Doctors
              </Link>
            </li>
            <li className="relative group">
              <button 
                className="text-white hover:text-gray-300 focus:outline-none flex items-center text-xs xs:text-sm sm:text-base whitespace-nowrap"
              >
                Support <span className="ml-1 text-[6px] xs:text-[8px] sm:text-[10px]">▼</span>
              </button>
              <div className="absolute left-1/2 top-full w-36 xs:w-40 bg-white rounded-md shadow-lg z-10 hidden group-hover:block transform -translate-x-1/2">
                <button 
                  onClick={openForm} 
                  className="block px-2 xs:px-4 py-1 xs:py-2 text-gray-800 hover:bg-gray-100 w-full text-xs xs:text-sm text-left"
                >
                  Contact Form
                </button>
                <button 
                  onClick={openModal} 
                  className="block px-2 xs:px-4 py-1 xs:py-2 text-gray-800 hover:bg-gray-100 w-full text-xs xs:text-sm text-left"
                >
                  Contact Info
                </button>
              </div>
            </li>
          </ul>
        </div>

        {/* Modals */}
        {isFormOpen && (
          <div className="fixed inset-0 bg-opacity-0 backdrop-blur-sm flex justify-center items-center z-50">
            <div className="bg-white p-4 xs:p-6 rounded-lg shadow-lg relative max-w-md w-full">
              <ContactForm />
              <button 
                onClick={closeForm} 
                className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 text-xl xs:text-2xl font-bold"
              >
                ×
              </button>
            </div>
          </div>
        )}
        <ContactDetails isOpen={isModalOpen} onClose={closeModal} />
      </div>

      {/* Custom CSS */}
      <style jsx>{`
        nav {
          flex-wrap: nowrap;
        }
        
        ul {
          min-width: 0; /* Prevents overflow */
        }
      `}</style>
    </nav>
  );
}

export default Navbar;