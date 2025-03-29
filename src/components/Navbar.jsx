import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import ContactForm from "./ContactForm";
import ContactDetails from "./ContactDetails";

function Navbar() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openForm = () => setIsFormOpen(true);
  const closeForm = () => setIsFormOpen(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <nav className="bg-gray-800 p-4 relative">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
  {/* Left-aligned Logo with right shift */}
     <Link to="/" className="flex-shrink-0 ml-4">  {/* Adjust margin-left (ml-4) */}
        <Logo width="150px" />
        </Link>


        {/* Center-aligned Navigation */}
        <div className="flex-1 flex justify-center mr-48">
          <ul className="flex space-x-6 items-center">
            <li>
              <Link to="/" className="text-white hover:text-gray-300">
                Home
              </Link>
            </li>
            <li>
              <Link to="/history" className="text-white hover:text-gray-300">
              History
              </Link>
            </li>

            {/* Departments Dropdown */}
            <li className="relative group">
              <button className="text-white hover:text-gray-300 focus:outline-none flex items-center">
              Departments <span className="ml-1 text-[10px]">▼</span>
              </button>
              <div className="absolute left-0 top-full w-48 bg-white rounded-md shadow-lg z-10 hidden group-hover:block">
                <Link
                  to="/departments/accountsDepartment"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100 text-center"
                >
                  Accounts Department
                </Link>
                <Link
                  to="/departments/enggDepartment"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100 text-center"
                >
                  Engg. Department
                </Link>
              </div>
            </li>

            {/* Services Dropdown */}
            <li className="relative group">
              <button className="text-white hover:text-gray-300 focus:outline-none flex items-center">
              Services <span className="ml-1 text-[10px]">▼</span>
              </button>
              <div className="absolute left-0 top-full w-48 bg-white rounded-md shadow-lg z-10 hidden group-hover:block">
                <Link
                  to="/services/healthservices"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100 text-center"
                >
                  Health Services
                </Link>
                <Link
                  to="/services/hostelservices"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100 text-center"
                >
                  Hostel Services
                </Link>
              </div>
            </li>

            <li>
              <Link to="/downloads" className="text-white hover:text-gray-300">
                Downloads
              </Link>
            </li>

           {/* Support Dropdown */}
<li className="relative group">
  <button className="text-white hover:text-gray-300 focus:outline-none flex items-center">
    Support <span className="ml-1 text-[10px]">▼</span>
  </button>
  <div className="absolute left-1/2 top-full w-48 bg-white rounded-md shadow-lg z-10 hidden group-hover:block transform -translate-x-1/2">
    <button
      onClick={openForm}
      className="block px-4 py-2 text-gray-800 hover:bg-gray-100 text-center w-full"
    >
      Contact Form
    </button>
    <button
      onClick={openModal}
      className="block px-4 py-2 text-gray-800 hover:bg-gray-100 text-center w-full"
    >
      Contact Info
    </button>
  </div>
</li>

            
          </ul>
        </div>
      </div>

      {/* Contact Form Modal */}
      {isFormOpen && (
  <div className="fixed inset-0 flex justify-center items-center z-50  backdrop-blur-xs">
    <div className="bg-white p-6 rounded-lg shadow-lg relative max-w-sm w-full">
      <ContactForm />
      <button
        onClick={closeForm}
        className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 text-2xl font-bold"
        aria-label="Close"
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
