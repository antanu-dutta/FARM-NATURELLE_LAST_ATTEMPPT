import React from "react";
import { terms_condition } from "../data assets/Terms_conditions";
import { Link } from "react-router-dom";
import Heading from "../reusable components/Heading";
import Documentation from "../components/Documentation";

const TermsAndCondition = () => {
  return (
    <div className="py-[130px]">
      <div className="container">
        <Documentation data={terms_condition} heading="Terms & Conditions" />
      </div>
    </div>
  );
};

export default TermsAndCondition;
