import React from "react";
import { FaStar } from "react-icons/fa6";

const FiveStar = ({ className }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <FaStar color="orange" />
      <FaStar color="orange" />
      <FaStar color="orange" />
      <FaStar color="orange" />
      <FaStar color="orange" />
    </div>
  );
};

export default FiveStar;
