import React from "react";

function EnggDepartment() {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-md mt-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Engineering Department</h2>
      <p className="text-gray-600">
        The Engineering Department ensures the hospital's infrastructure, equipment, and facilities are maintained at optimal performance. Our team handles repairs, maintenance, and new installations.
      </p>

      <h3 className="text-2xl font-semibold text-gray-700 mt-4">Responsibilities</h3>
      <ul className="list-disc list-inside text-gray-600">
        <li>Maintenance of medical and non-medical equipment</li>
        <li>Infrastructure and facility management</li>
        <li>Power supply and backup systems</li>
        <li>Safety compliance and inspections</li>
      </ul>

      <h3 className="text-2xl font-semibold text-gray-700 mt-4">Emergency Support</h3>
      <p className="text-gray-600">
        Our engineering team provides 24/7 emergency support for critical infrastructure, ensuring uninterrupted medical services.
      </p>
    </div>
  );
}

export default EnggDepartment;
