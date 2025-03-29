import React from 'react';
import Logo from './Logo';

function Footer() {
  return (
    <footer className="bg-gray-400 py-10 border-t-2 border-black text-center">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
        <Logo width="200px" />
        <p className="text-sm text-gray-600 mt-4">
          © 2025 MyWebsite. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
