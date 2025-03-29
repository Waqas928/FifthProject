import React from 'react';

function Button({ children, onClick, className = '', ...props }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;