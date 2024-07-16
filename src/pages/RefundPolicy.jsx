import React from "react";
import { refundPolicy } from "../data assets/RefundPolicy";
import Documentation from "../components/Documentation";

const RefundPolicy = () => {
  return (
    <div className="pt-[130px] pb-[30px]">
      <div className="container">
        <Documentation data={refundPolicy} heading="Refund & Return Policy" />
      </div>
    </div>
  );
};

export default RefundPolicy;
