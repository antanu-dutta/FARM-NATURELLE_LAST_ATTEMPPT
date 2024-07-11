import React from "react";

const TransparentButton = ({ children, className = null }) => {
  return (
    <button
      className={`rounded-xl text-sm  px-10  duration-500 text-white uppercase transition-all border-2 border-white hover:bg-white hover:text-primary ${className}`}
    >
      {children}
    </button>
  );
};

export default TransparentButton;
