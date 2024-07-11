import React from "react";
import Title from "../reusable components/Title";
import Heading from "../reusable components/Heading";
import Paragraph from "../reusable components/Paragraph";
import PrimaryButton from "../reusable components/PrimaryButton";
import { FaPlay } from "react-icons/fa";

const AboutusFounder = () => {
  return (
    <div className="founder">
      <div className="container">
        <div className="flex items-center justify-center">
          <div className="rounded-lg bg-[#fefefe] shadow-lg p-7 w-[45%] translate-x-10">
            <Title>OUR FOUNDER</Title>
            <Heading className={"mb-4"}>
              Meet Our Visionary Founder <br />
              <span className="text-primary">Rajneesh Chawla</span>
            </Heading>
            <span className="text-xl block mb-4 font-medium">
              He is the Visionary Behind Our Farm Naturelle
            </span>
            <Paragraph className="text-gray-800 mb-4">
              Mr. Rajneesh Chawla, our seasoned entrepreneur and the driving
              force behind Farm Naturelle, brings three decades of experience to
              our journey. His unwavering dedication to organic practices,
              sustainability, and community well-being defines Farm Naturelle's
              ethos. Inspired by a visit to a farm in Ram Nagar, the seeds of
              our mission were sown. Today, Mr. Chawla leads us toward a
              healthier, happier, and more sustainable future, offering products
              that reflect his passion for organic living and a better world for
              all. Join us on this natural journey, guided by our founder's
              vision.
            </Paragraph>
            <PrimaryButton>Listen rajneesh ji sotry</PrimaryButton>
          </div>
          <div className="w-1/2 relative">
            <img
              src="https://farmnaturelle.com/cdn/shop/files/image_12445.jpg?v=1697614609"
              alt="founder image"
              className="rounded-lg"
            />
            <div className="absolute p-16 top-0 left-0 w-full h-full flex items-end mt-auto justify-center">
              <div className="flex items-center  gap-10">
                <FaPlay className="text-4xl text-white " />
                <Heading className={"text-pear"}>Mr. Rajnesh Chawla</Heading>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutusFounder;
