import React from "react";
import Title from "./Title";
import Heading from "./Heading";
import Paragraph from "./Paragraph";
import PrimaryButton from "./PrimaryButton";

const AboutusComp = ({ data }) => {
  const { image, title, heading, spanHeading, subHeading, paragraph, lists } =
    data;
  return (
    <div>
      <div className="container">
        <div
          className={`py-[110px] flex justify-around ${
            title.includes("MISSION") ? "flex-row-reverse" : "flex-row"
          }`}
        >
          <img src={image} alt="" className="w-[45%]" />
          <div className="w-[43%]">
            <Title>{title}</Title>
            <Heading className={"mb-4"}>
              {heading} <br />{" "}
              <span className="text-primary">{spanHeading}</span>
            </Heading>
            <span className="text-primary text-2xl block mb-4">
              {subHeading}
            </span>
            <Paragraph className="text-gray-900 mb-6">{paragraph}</Paragraph>
            <ul className="flex flex-col gap-4 mb-6">
              {lists.map((curList, index) => (
                <li className="bullet-points" key={index}>
                  {curList}
                </li>
              ))}
            </ul>
            <PrimaryButton>Buy now</PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutusComp;
