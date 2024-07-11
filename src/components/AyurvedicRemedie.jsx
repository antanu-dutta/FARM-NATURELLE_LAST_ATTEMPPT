import React from "react";
import { ayurvedicRemedie } from "../data assets/AyurvedicRemedie";
import Heading from "../reusable components/Heading";
import TransparentButton from "../reusable components/TransparentButton";

const AyurvedicRemedie = () => {
  return (
    <div className="bg-primary py-10">
      <div className="container">
        <div className="flex justify-between items-center">
          <div className="w-1/2">
            <Heading className="text-white">Not Sure What to Buy?</Heading>
            <p className="text-para mb-4">
              Consult our Experts and make your Daily Life Healthy
            </p>
            <ul className="flex justify-between flex-wrap">
              {ayurvedicRemedie.map((curElem, index) => (
                <li
                  className="w-[49%] bg-white p-3 mb-4 font-medium rounded-lg flex items-center gap-4"
                  key={index}
                >
                  <img src={curElem.imgUrl} alt={curElem.text} />
                  <span>{curElem.text}</span>
                </li>
              ))}
            </ul>
            <TransparentButton className="w-full py-3">
              book consultation @ RS 99
            </TransparentButton>
          </div>
          <div className="w-[47%] mt-[-75px] translate-y-3">
            <img
              src="https://farmnaturelle.com/cdn/shop/files/desk.png?v=1698732439"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AyurvedicRemedie;
