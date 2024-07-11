import React from "react";
import { Link } from "react-router-dom";

const FooterLinks = ({ heading, links }) => {
  return (
    <div className="text-white">
      <h2 className="font-bold text-lg mb-4">{heading}</h2>
      <ul className="flex flex-col gap-3">
        {links.map((curElem, index) => (
          <Link to={curElem.path} key={index}>
            <li>{curElem.name}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinks;
