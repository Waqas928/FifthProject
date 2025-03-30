import React from 'react';
import Logo from './Logo';

function Footer() {
  return (
    <footer className="bg-gray-400 py-6 md:py-10 border-t-2 border-black text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <Logo width="150px" className="w-32 sm:w-40 md:w-52" />
        <p className="text-xs sm:text-sm text-gray-600 mt-3 md:mt-4">
          © 2025 MyWebsite. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;