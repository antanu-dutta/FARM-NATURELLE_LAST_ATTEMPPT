import React from "react";
import PropTypes from "prop-types";

const BannerRatings = ({ className = null }) => {
  return (
    <div className={`flex items-center gap-6  mb-4 ${className}`}>
      <img
        src="https://farmnaturelle.com/cdn/shop/files/Frame_30544.png?v=1695641721"
        alt=""
      />
      <span>Over 50 lacs + Products Sold</span>
    </div>
  );
};

BannerRatings.propTypes = {
  className: PropTypes.string,
};
export default BannerRatings;
