import React from "react";
import BannerRatings from "../reusable components/BannerRatings";

const Banner1 = () => {
  return (
    <div className="relative">
      <img
        src="https://farmnaturelle.com/cdn/shop/files/Component_166_1_1_1.jpg?v=1713349229"
        alt=""
        className="object-cover w-full h-full"
      />
      <div className="absolute top-[5%] left-[3%] w-1/2 p-9">
        <span className="text-lg font-bold mb-4 block">
          THE MOST TRUSTED AYURDEVIC & ORGANIC BRAND
        </span>
        <h2 className="text-6xl font-bold leading-snug">
          Say No to Health Issues, <br /> Yes to Life
        </h2>
        <BannerRatings className="justify-start" />
      </div>
    </div>
  );
};

export default Banner1;
