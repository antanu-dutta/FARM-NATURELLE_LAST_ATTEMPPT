import React from "react";
import { banner4Data } from "../data assets/banner";
import TransparentButton from "../reusable components/TransparentButton";

const Banner4 = () => {
  return (
    <div className="relative">
      <img
        src="https://farmnaturelle.com/cdn/shop/files/FN44_1.jpg?v=1713348888"
        alt=""
        className="object-cover w-full h-full"
      />
      <div className="absolute top-[5%] left-[3%] w-1/2 p-9 text-white">
        <span className="text-lg font-bold mb-4 block">
          THE MOST TRUSTED AYURDEVIC
        </span>
        <h2 className="text-6xl font-bold leading-snug">
          <span className="text-pear">Don't Delay</span> Your Health Concerns !
        </h2>
        <span className="block mb-4 text-lg">
          consult with our acharayas (doctors) and get
        </span>
        <div className="grid grid-cols-2 gap-4 mb-4">
          {banner4Data.map((curData, index) => (
            <div
              className="bg-white flex items-center gap-3 p-3 px-4 rounded text-black"
              key={index}
            >
              <img src={curData.imgUrl} alt={curData.text} />
              <span className="font-medium">{curData.text}</span>
            </div>
          ))}
        </div>
        <TransparentButton className={"w-full py-3"}>
          book consultant @ rs 99
        </TransparentButton>
      </div>
    </div>
  );
};

export default Banner4;
