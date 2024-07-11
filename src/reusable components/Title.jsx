import React from "react";

const Title = ({ children, className = "" }) => {
  return (
    <span
      className={`mb-4 text-title text-sm font-medium uppercase tracking-wide ${className}`}
    >
      {children}
    </span>
  );
};

export default Title;
