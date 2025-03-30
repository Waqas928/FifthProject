import React from 'react';

function Downloads() {
    const downloadFiles = [
        { name: "Patient Registration Form", link: "/static/Downloads/patient-form.docx" },
        { name: "Hospital Visitor Guidelines", link: "/static/downloads/visitor-guidelines.docx" },
        { name: "Doctor OPD Schedule", link: "/static/downloads/opd-schedule.docx" },
        { name: "Vaccination Schedule", link: "/static/downloads/vaccination-schedule.docx" }
    ];

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-md mt-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Downloads</h2>
            <p className="text-gray-600 mb-6">Download important hospital forms and schedules below:</p>

            <ul className="space-y-4">
                {downloadFiles.map((file, index) => (
                    <li key={index} className="bg-gray-100 p-4 rounded-lg flex justify-between items-center">
                        <span className="text-gray-700">{file.name}</span>
                        <a href={file.link} download className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                            Download
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Downloads;
