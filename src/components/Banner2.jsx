import React from "react";
import TransparentButton from "../reusable components/TransparentButton";
import BannerRatings from "../reusable components/BannerRatings";

const Banner2 = () => {
  return (
    <div className="relative">
      <img
        src="https://farmnaturelle.com/cdn/shop/files/FN_22.jpg?v=1703157867"
        alt=""
        className="object-cover w-full h-full"
      />
      <div className="absolute top-[60px] left-1/2 -translate-x-1/2 text-center text-white w-full">
        <span className="text-lg font-semibold mb-4 block">
          Healthy lIVING STARTS WITH HEALTHY EATING
        </span>
        <h2 className="text-7xl font-semibold mb-4">
          From Farm To <span className="text-pear">Your Table</span>
        </h2>
        <BannerRatings className="justify-center" />
        <TransparentButton className={"py-3"}>
          explore our products
        </TransparentButton>
      </div>
    </div>
  );
};

export default Banner2;
