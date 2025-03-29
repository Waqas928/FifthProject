import React from "react";

function HealthServices() {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-md mt-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Health Services</h2>
      <p className="text-gray-600">
        Our hospital provides a wide range of medical services to ensure the health and well-being of our patients.
      </p>

      <h3 className="text-2xl font-semibold text-gray-700 mt-4">Available Services</h3>
      <ul className="list-disc list-inside text-gray-600">
        <li>Emergency Care</li>
        <li>Outpatient Services (OPD)</li>
        <li>Inpatient Treatment</li>
        <li>Specialist Consultations</li>
        <li>Diagnostic and Imaging Services</li>
        <li>Pharmacy Services</li>
      </ul>

      <h3 className="text-2xl font-semibold text-gray-700 mt-4">24/7 Support</h3>
      <p className="text-gray-600">
        Our medical team is available 24/7 to provide emergency and critical care services.
      </p>
    </div>
  );
}

export default HealthServices;
