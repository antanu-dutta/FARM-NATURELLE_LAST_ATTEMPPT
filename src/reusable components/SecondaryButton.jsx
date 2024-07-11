import React from "react";

const SecondaryButton = ({ children, className = "" }) => {
  return (
    <button
      className={`px-16 border-2 text-sm rounded-xl uppercase hover:bg-transparent transition-all ${className}`}
    >
      {children}
    </button>
  );
};

export default SecondaryButton;
