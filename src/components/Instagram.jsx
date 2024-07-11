import React from "react";
import Heading from "../reusable components/Heading";
import { instagramData } from "../data assets/InstagramData";

const Instagram = () => {
  return (
    <div className="pt-[60px]">
      <Heading className={"text-center mb-8 text-primary"}>
        Farm Naturelle on Instagram
      </Heading>
      <div className="grid grid-cols-6 gap-3 pb-16 h-[700px]">
        {instagramData.map((curData, index) => (
          <div
            className={` relative group cursor-pointer ${
              curData.big ? "col-start-3 col-span-2 row-start-1 row-span-2" : ""
            }`}
            key={index}
          >
            <img
              src={curData.imageUrl}
              alt=""
              className="absolute top-0 left-0 w-full h-full object-cover  group-hover:brightness-[.2] transition-all"
            />
            <div className="absolute top-0 left-0 w-full h-full flex  opacity-0 justify-between group-hover:opacity-100 transition-all flex-col p-4">
              <p className="text-[12px] text-white">{curData.text}</p>
              <p className="text-white font-bold text-sm">{curData.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Instagram;
