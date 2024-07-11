import React from "react";

const NavigationButton = ({ children, className = "" }) => {
  return (
    <button
      className={`rounded-full border transition-all border-brown p-2 text-lg shadow-2xl hover:bg-brown hover:text-white ${className}`}
    >
      {children}
    </button>
  );
};

export default NavigationButton;
