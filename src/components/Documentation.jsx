import React from "react";
import { Link } from "react-router-dom";
import Heading from "../reusable components/Heading";

const Documentation = ({ data, heading }) => {
  return (
    <div>
      <div className="mb-8">
        <Link to="/">HOME</Link> / {heading.toUpperCase()}
      </div>
      <div>
        <Heading className={"mb-5"}>{heading}</Heading>
        {heading === "Terms & Conditions" && (
          <div className="mb-10">
            <span className="text-sm">
              Welcome to{" "}
              <span className="font-semibold">farmnaturelle.com</span>
            </span>
            <p>
              ("Farm Natural Produce") is dedicated to providing high-quality
              natural produce and is the owner of the brand Farm Natural
              Produce. By accessing, browsing, or using the Website for making a
              purchase, you agree to be bound by the following Terms and
              Conditions ("Terms of Use") along with the Privacy Policy,
              Shipping Policy, and Cancellation, Refund, and Return Policy
              (together "Policies") as modified from time to time. If you do not
              agree with these Terms of Use and Policies, Farm Natural Produce
              requests that you do not use the Website.
            </p>
          </div>
        )}

        <div>
          {data.map((curData, index) => (
            <div key={index} className="mb-10">
              <h2 className="text-black text-2xl mb-3">{curData.title}</h2>
              <p className="text-base mb-6">{curData.text1}</p>
              {curData.contactInfo && (
                <span className="text-sm font-semibold block mb-5">
                  Contact email address: {curData.contactInfo.email}
                </span>
              )}
              {curData.contactInfo && (
                <span className="text-sm font-semibold block mb-5">
                  Phone:{" "}
                  <span className="font-normal">
                    {curData.contactInfo.pNumber}
                  </span>
                </span>
              )}
              {curData.contactInfo && (
                <span className="text-sm font-semibold block mb-5">
                  Contact days:{" "}
                  <span className="font-normal">
                    {curData.contactInfo.days}
                  </span>
                </span>
              )}
              {curData.list && (
                <ol type="i" className="mb-5">
                  {curData.list.map((curList, index) => (
                    <li key={index} className="mb-1">
                      {index + 1}. {curList}
                    </li>
                  ))}
                </ol>
              )}
              {curData.text2 && <p className="mb-6">{curData.text2}</p>}
              {curData.text3 && <p>{curData.text3}</p>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Documentation;
