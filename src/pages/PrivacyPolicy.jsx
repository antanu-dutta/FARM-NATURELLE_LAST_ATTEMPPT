import React from "react";
import { privacyPolicy } from "../data assets/PrivacyPolicy";
import Documentation from "../components/Documentation";

const PrivacyPolicy = () => {
  return (
    <div className="py-[130px]">
      <div className="container">
        <Documentation data={privacyPolicy} heading={"Privacy Policy"} />
      </div>
    </div>
  );
};

export default PrivacyPolicy;
