import React from "react";

const Heading = ({ children, className }) => {
  return <h2 className={`text-big font-medium ${className}`}>{children}</h2>;
};

export default Heading;
