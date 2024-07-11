import React from "react";

const PrimaryButton = ({ children, className }) => {
  return (
    <button
      className={`rounded-xl border border-primary uppercase hover:bg-primary hover:text-white transition-all text-primary font-semibold text-sm py-3 px-16 ${className}`}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
