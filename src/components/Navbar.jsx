import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import ContactForm from './ContactForm';
import ContactDetails from './ContactDetails';

function Navbar() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const openForm = () => setIsFormOpen(true);
  const closeForm = () => setIsFormOpen(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const toggleNav = () => setIsNavOpen(!isNavOpen);

  return (
    <nav className="bg-gray-800 p-4 relative w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center">
        <div className="flex items-center justify-between w-full sm:w-auto">
          <Link to="/" className="flex-shrink-0">
            <Logo width="100px" className="w-24 sm:w-[150px]" />
          </Link>
          <button
            onClick={toggleNav}
            className="sm:hidden text-white focus:outline-none p-2"
            aria-label="Toggle navigation"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isNavOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Desktop Navigation Links */}
        <div
          className={`${
            isNavOpen ? 'hidden' : 'hidden sm:flex'
          } flex-col sm:flex-row justify-center w-full mt-4 sm:mt-0 space-y-4 sm:space-y-0 sm:space-x-6`}
        >
          <ul className="flex flex-col sm:flex-row items-center text-center space-y-4 sm:space-y-0 sm:space-x-6">
            <li>
              <Link to="/" className="text-white hover:text-gray-300 text-sm sm:text-base">
                Home
              </Link>
            </li>
            <li className="hidden md:block">
              <Link to="/history" className="text-white hover:text-gray-300 text-sm sm:text-base">
                History
              </Link>
            </li>
            <li className="hidden lg:block relative group">
              <button className="text-white hover:text-gray-300 focus:outline-none flex items-center text-sm sm:text-base">
                Departments <span className="ml-1 text-[8px] sm:text-[10px]">▼</span>
              </button>
              <div className="absolute left-0 top-full w-40 bg-white rounded-md shadow-lg z-10 hidden group-hover:block">
                <Link to="/departments/accountsDepartment" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 text-sm">
                  Accounts Department
                </Link>
                <Link to="/departments/enggDepartment" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 text-sm">
                  Engg. Department
                </Link>
              </div>
            </li>
            <li className="hidden xl:block relative group">
              <button className="text-white hover:text-gray-300 focus:outline-none flex items-center text-sm sm:text-base">
                Services <span className="ml-1 text-[8px] sm:text-[10px]">▼</span>
              </button>
              <div className="absolute left-0 top-full w-40 bg-white rounded-md shadow-lg z-10 hidden group-hover:block">
                <Link to="/services/healthservices" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 text-sm">
                  Health Services
                </Link>
                <Link to="/services/hostelservices" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 text-sm">
                  Hostel Services
                </Link>
              </div>
            </li>
            <li className="hidden md:block">
              <Link to="/downloads" className="text-white hover:text-gray-300 text-sm sm:text-base">
                Downloads
              </Link>
            </li>
            <li className="hidden md:block">
              <Link to="/doctors" className="text-white hover:text-gray-300 text-sm sm:text-base">
                Doctors
              </Link>
            </li>
            <li className="hidden lg:block relative group">
              <button className="text-white hover:text-gray-300 focus:outline-none flex items-center text-sm sm:text-base">
                Support <span className="ml-1 text-[8px] sm:text-[10px]">▼</span>
              </button>
              <div className="absolute left-1/2 top-full w-40 bg-white rounded-md shadow-lg z-10 hidden group-hover:block transform -translate-x-1/2">
                <button onClick={openForm} className="block px-4 py-2 text-gray-800 hover:bg-gray-100 w-full text-sm">
                  Contact Form
                </button>
                <button onClick={openModal} className="block px-4 py-2 text-gray-800 hover:bg-gray-100 w-full text-sm">
                  Contact Info
                </button>
              </div>
            </li>
          </ul>
        </div>

        {/* Mobile Menu */}
        {isNavOpen && (
          <div className="sm:hidden flex flex-row flex-wrap justify-center items-center w-full mt-4 space-x-4 bg-gray-700 p-4 rounded-md">
            <Link to="/" className="text-white hover:text-gray-300 text-sm py-2">
              Home
            </Link>
            <Link to="/history" className="text-white hover:text-gray-300 text-sm py-2">
              History
            </Link>
            <Link to="/departments/accountsDepartment" className="text-white hover:text-gray-300 text-sm py-2">
              Accounts
            </Link>
            <Link to="/departments/enggDepartment" className="text-white hover:text-gray-300 text-sm py-2">
              Engg.
            </Link>
            <Link to="/services/healthservices" className="text-white hover:text-gray-300 text-sm py-2">
              Health
            </Link>
            <Link to="/services/hostelservices" className="text-white hover:text-gray-300 text-sm py-2">
              Hostel
            </Link>
            <Link to="/downloads" className="text-white hover:text-gray-300 text-sm py-2">
              Downloads
            </Link>
            <Link to="/doctors" className="text-white hover:text-gray-300 text-sm py-2">
              Doctors
            </Link>
            <button onClick={openForm} className="text-white hover:text-gray-300 text-sm py-2">
              Contact Form
            </button>
            <button onClick={openModal} className="text-white hover:text-gray-300 text-sm py-2">
              Contact Info
            </button>
          </div>
        )}

        {/* Modals */}
        {isFormOpen && (
             <div className="fixed inset-0  bg-opacity-0 backdrop-blur-sm flex justify-center items-center z-50">

            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg relative max-w-md w-full">
              <ContactForm />
              <button onClick={closeForm} className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 text-xl sm:text-2xl font-bold">
                ×
              </button>
            </div>
          </div>
        )}
        <ContactDetails isOpen={isModalOpen} onClose={closeModal} />
      </div>
    </nav>
  );
}

export default Navbar;