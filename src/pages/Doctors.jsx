import React, { useState } from 'react';

function Doctors() {
  // List of doctor names with "Dr." prefix
  const doctorNames = [
    'Dr. Waqas (PHD Finance,MBBS,FPPS)',
    'Dr. Abbas (FPPS,MBBS,FCPS)',
    'Dr. Ali (FPPS,MBBS,FCPS)',
    'Dr. Hamza (FPPS,MBBS,FCPS)',
    'Dr. Awais (FPPS,MBBS,FCPS)',
    'Dr. Talha (BDS,FPPS)',
    'Dr. Sameer (PHD Comp,MBBS,FPPS)',
    'Dr. Hassan (PHD Medicine,MBBS)',
    'Dr. Azan (PHD CIvil Engg,MBBS)',
    'Dr. Faizan (PHD Comp,MBBS)',
    'Dr. Musadiq (FPPS,MBBS)',
    'Dr. Ibrahim (PHD English,FPPS,BDS)',
    'Dr. Adnan (FPPS,MBBS)',
    'Dr. Suleman (BDS,FPPS)',
  ];

  // State for search input
  const [searchTerm, setSearchTerm] = useState('');

  // Filter doctors based on search term
  const filteredDoctors = doctorNames.filter((doctor) =>
    doctor.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle search input change
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center px-4 sm:px-6 lg:px-8 py-8 overflow-x-hidden">
      {/* Title */}
      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-6 sm:mb-8 text-center">
        Find a Doctor
      </h1>

      {/* Search Bar */}
      <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mb-6 sm:mb-8">
        <input
          type="text"
          placeholder="Search doctors by name..."
          value={searchTerm}
          onChange={handleSearch}
          className="w-full p-3 sm:p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
        />
      </div>

      {/* Doctors List */}
      <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
        {filteredDoctors.length > 0 ? (
          <ul className="space-y-3 sm:space-y-4">
            {filteredDoctors.map((doctor, index) => (
              <li
                key={index}
                className="p-3 sm:p-4 bg-white rounded-lg shadow-md text-gray-800 text-sm sm:text-base md:text-lg hover:bg-gray-100 transition-colors"
              >
                {doctor}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-600 text-center text-sm sm:text-base">
            No doctors found matching your search.
          </p>
        )}
      </div>
    </div>
  );
}

export default Doctors;