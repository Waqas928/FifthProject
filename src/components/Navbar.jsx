import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import ContactForm from "./ContactForm";
import ContactDetails from "./ContactDetails";

function Navbar() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); // Track which dropdown is open

  const openForm = () => setIsFormOpen(true);
  const closeForm = () => setIsFormOpen(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const toggleNav = () => setIsNavOpen(!isNavOpen);

  // Toggle dropdowns on click instead of hover
  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  return (
    <nav className="bg-gray-800 p-4 relative w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between flex-wrap">
        {/* Logo */}
        <div className="flex items-center flex-shrink-0">
          <Link to="/" className="flex-shrink-0">
            <Logo width="100px" className="w-24 sm:w-[150px]" />
          </Link>
        </div>

        {/* Hamburger Button */}
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

        {/* Navigation Links */}
        <div
          className={`${
            isNavOpen ? "flex" : "hidden"
          } sm:flex flex-col sm:flex-row flex-grow justify-center mt-4 sm:mt-0 space-y-4 sm:space-y-0 sm:space-x-6`}
        >
          <ul className="flex flex-col sm:flex-row items-center text-center space-y-4 sm:space-y-0 sm:space-x-6 whitespace-nowrap">
            <li>
              <Link to="/" className="text-white hover:text-gray-300 text-sm sm:text-base">
                Home
              </Link>
            </li>
            <li>
              <Link to="/history" className="text-white hover:text-gray-300 text-sm sm:text-base">
                History
              </Link>
            </li>
            <li className="relative">
              <button
                onClick={() => toggleDropdown("departments")}
                className="text-white hover:text-gray-300 focus:outline-none flex items-center text-sm sm:text-base"
              >
                Departments <span className="ml-1 text-[8px] sm:text-[10px]">▼</span>
              </button>
              <div
                className={`absolute left-0 top-full mt-1 w-40 bg-white rounded-md shadow-lg z-20 ${
                  openDropdown === "departments" ? "block" : "hidden"
                }`}
              >
                <Link
                  to="/departments/accountsDepartment"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100 text-sm"
                >
                  Accounts Department
                </Link>
                <Link
                  to="/departments/enggDepartment"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100 text-sm"
                >
                  Engg. Department
                </Link>
              </div>
            </li>
            <li className="relative">
              <button
                onClick={() => toggleDropdown("services")}
                className="text-white hover:text-gray-300 focus:outline-none flex items-center text-sm sm:text-base"
              >
                Services <span className="ml-1 text-[8px] sm:text-[10px]">▼</span>
              </button>
              <div
                className={`absolute left-0 top-full mt-1 w-40 bg-white rounded-md shadow-lg z-20 ${
                  openDropdown === "services" ? "block" : "hidden"
                }`}
              >
                <Link
                  to="/services/healthservices"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100 text-sm"
                >
                  Health Services
                </Link>
                <Link
                  to="/services/hostelservices"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100 text-sm"
                >
                  Hostel Services
                </Link>
              </div>
            </li>
            <li>
              <Link to="/downloads" className="text-white hover:text-gray-300 text-sm sm:text-base">
                Downloads
              </Link>
            </li>
            <li className="relative">
              <button
                onClick={() => toggleDropdown("support")}
                className="text-white hover:text-gray-300 focus:outline-none flex items-center text-sm sm:text-base"
              >
                Support <span className="ml-1 text-[8px] sm:text-[10px]">▼</span>
              </button>
              <div
                className={`absolute left-1/2 top-full mt-1 w-40 bg-white rounded-md shadow-lg z-20 transform -translate-x-1/2 ${
                  openDropdown === "support" ? "block" : "hidden"
                }`}
              >
                <button
                  onClick={openForm}
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100 w-full text-sm text-left"
                >
                  Contact Form
                </button>
                <button
                  onClick={openModal}
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100 w-full text-sm text-left"
                >
                  Contact Info
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Mobile Menu */}
      {isNavOpen && (
        <div className="sm:hidden flex flex-col items-center w-full mt-4 space-y-2 bg-gray-700 p-4 rounded-md">
          <Link to="/" className="text-white hover:text-gray-300 text-sm py-2">
            Home
          </Link>
          <Link to="/history" className="text-white hover:text-gray-300 text-sm py-2">
            History
          </Link>
          <div className="w-full">
            <button
              onClick={() => toggleDropdown("departments")}
              className="text-white hover:text-gray-300 text-sm py-2 w-full text-left"
            >
              Departments
            </button>
            <div className={`${openDropdown === "departments" ? "block" : "hidden"} pl-4`}>
              <Link
                to="/departments/accountsDepartment"
                className="block text-white hover:text-gray-300 text-sm py-1"
              >
                Accounts
              </Link>
              <Link
                to="/departments/enggDepartment"
                className="block text-white hover:text-gray-300 text-sm py-1"
              >
                Engg.
              </Link>
            </div>
          </div>
          <div className="w-full">
            <button
              onClick={() => toggleDropdown("services")}
              className="text-white hover:text-gray-300 text-sm py-2 w-full text-left"
            >
              Services
            </button>
            <div className={`${openDropdown === "services" ? "block" : "hidden"} pl-4`}>
              <Link
                to="/services/healthservices"
                className="block text-white hover:text-gray-300 text-sm py-1"
              >
                Health
              </Link>
              <Link
                to="/services/hostelservices"
                className="block text-white hover:text-gray-300 text-sm py-1"
              >
                Hostel
              </Link>
            </div>
          </div>
          <Link to="/downloads" className="text-white hover:text-gray-300 text-sm py-2">
            Downloads
          </Link>
          <div className="w-full">
            <button
              onClick={() => toggleDropdown("support")}
              className="text-white hover:text-gray-300 text-sm py-2 w-full text-left"
            >
              Support
            </button>
            <div className={`${openDropdown === "support" ? "block" : "hidden"} pl-4`}>
              <button
                onClick={openForm}
                className="block text-white hover:text-gray-300 text-sm py-1 w-full text-left"
              >
                Contact Form
              </button>
              <button
                onClick={openModal}
                className="block text-white hover:text-gray-300 text-sm py-1 w-full text-left"
              >
                Contact Info
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Contact Form Modal */}
      {isFormOpen && (
        <div className="fixed inset-0 backdrop-blur-sm flex justify-center items-center z-50 overflow-x-hidden">
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg relative max-w-md w-full bg-opacity-0 backdrop-blur-sm">
            <ContactForm />
            <button
              onClick={closeForm}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 text-xl sm:text-2xl font-bold"
            >
              ×
            </button>
          </div>
        </div>
      )}

      {/* Contact Info Modal */}
      <ContactDetails isOpen={isModalOpen} onClose={closeModal} />
    </nav>
  );
}

export default Navbar;