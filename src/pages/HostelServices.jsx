import React from "react";

function HostelServices() {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-md mt-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Hostel Services</h2>
      <p className="text-gray-600">
        Our hospital provides comfortable hostel facilities for patients and their attendants.
      </p>

      <h3 className="text-2xl font-semibold text-gray-700 mt-4">Facilities Offered</h3>
      <ul className="list-disc list-inside text-gray-600">
        <li>Private and Shared Rooms</li>
        <li>Hygienic Dining Services</li>
        <li>24/7 Security</li>
        <li>Housekeeping Services</li>
        <li>Wi-Fi and Recreational Areas</li>
      </ul>

      <h3 className="text-2xl font-semibold text-gray-700 mt-4">Booking and Availability</h3>
      <p className="text-gray-600">
        For reservations and inquiries, please contact our reception desk.
      </p>
    </div>
  );
}

export default HostelServices;
