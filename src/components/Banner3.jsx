import React from "react";
import BannerRatings from "../reusable components/BannerRatings";
import TransparentButton from "../reusable components/TransparentButton";

const Banner3 = () => {
  return (
    <div className="relative">
      <img
        src="https://farmnaturelle.com/cdn/shop/files/FN33_1.jpg?v=1713349252"
        alt=""
        className="object-cover w-full h-full"
      />
      <div className="absolute top-[60px] left-1/2 -translate-x-1/2 text-center text-white w-full">
        <span className="text-lg font-semibold mb-4 block">
          Healthy lIVING STARTS WITH HEALTHY EATING
        </span>
        <h2 className="text-7xl font-semibold mb-4">
          Go Organic With <span className="text-pear">20+ Acre of Farm</span>
        </h2>
        <BannerRatings className="justify-center" />
        <TransparentButton className={"py-3"}>visit our farm</TransparentButton>
      </div>
    </div>
  );
};

export default Banner3;
