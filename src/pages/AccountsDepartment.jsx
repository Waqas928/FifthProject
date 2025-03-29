import React from 'react';

function AccountsDepartment() {
    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-md mt-6">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Accounts Department</h2>
            <p className="text-gray-600 mb-6">
                The Accounts Department manages all financial transactions, including billing, insurance processing, and payment assistance.
            </p>

            {/* Billing Section */}
            <div className="mb-6">
                <h3 className="text-2xl font-semibold text-gray-700">Billing & Payments</h3>
                <p className="text-gray-600">We accept payments via cash, credit/debit cards, bank transfers, and online payments.</p>
                <ul className="list-disc pl-6 text-gray-600">
                    <li>Hospital Bill Payment Counter (24/7 available)</li>
                    <li>Online Payment Portal: <a href="/pay" className="text-blue-500 underline">Click here</a></li>
                    <li>Insurance-covered payments (see details below)</li>
                </ul>
            </div>

            {/* Insurance Section */}
            <div className="mb-6">
                <h3 className="text-2xl font-semibold text-gray-700">Insurance & Claims</h3>
                <p className="text-gray-600">
                    We work with major health insurance providers. Ensure your policy is valid and updated before treatment.
                </p>
                <p className="text-gray-600 mt-2">For insurance claims, submit documents at the Accounts Office.</p>
            </div>

            {/* Contact Section */}
            <div className="mb-6">
                <h3 className="text-2xl font-semibold text-gray-700">Contact Us</h3>
                <p className="text-gray-600">For billing inquiries, reach us at:</p>
                <ul className="list-disc pl-6 text-gray-600">
                    <li>Email: <a href="mailto:accounts@hospital.com" className="text-blue-500 underline">accounts@hospital.com</a></li>
                    <li>Phone: +1 234 567 890</li>
                    <li>Office Hours: Monday - Friday, 9 AM - 5 PM</li>
                </ul>
            </div>

            {/* FAQs */}
            <div className="mb-6">
                <h3 className="text-2xl font-semibold text-gray-700">Frequently Asked Questions</h3>
                <details className="mb-2">
                    <summary className="font-semibold text-gray-800 cursor-pointer">How can I pay my hospital bill?</summary>
                    <p className="text-gray-600 mt-2">You can pay via cash, card, or online through our payment portal.</p>
                </details>
                <details className="mb-2">
                    <summary className="font-semibold text-gray-800 cursor-pointer">Do you accept insurance?</summary>
                    <p className="text-gray-600 mt-2">Yes, we work with major insurance providers. Contact our team for more details.</p>
                </details>
            </div>
        </div>
    );
}

export default AccountsDepartment;
