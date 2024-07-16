import React from "react";
import { Link } from "react-router-dom";

const Breadcrum = ({ from = "/", to = "/", first = "HOME", second }) => {
  return (
    <div>
      <Link to={from}>
        <span>{first}</span>
      </Link>{" "}
      / <span>{second}</span>
    </div>
  );
};

export default Breadcrum;
