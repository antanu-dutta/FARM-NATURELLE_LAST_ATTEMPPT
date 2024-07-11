import React from "react";
import { progress } from "../data assets/Aboutus";
import Paragraph from "../reusable components/Paragraph";
import Heading from "../reusable components/Heading";

const AboutProgress = () => {
  return (
    <div>
      <div className="container">
        <div className="py-16 flex items-center justify-between">
          {progress.map((curBox, index) => (
            <div
              className="float-left flex flex-col items-center w-[22%] mt-[-75px]"
              key={index}
            >
              <Heading className="text-primary">{curBox.year}</Heading>
              <div className="w-[25px] h-[25px] bg-primary rounded-full mb-4"></div>
              <div className="border min-h-[150px] border-primary rounded-md p-4 text-center">
                <span className="text-primary underline text-lg block mb-3 font-medium">
                  {curBox.title}
                </span>
                <Paragraph className="text-gray-800 text-sm">
                  {curBox.text}
                </Paragraph>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutProgress;
