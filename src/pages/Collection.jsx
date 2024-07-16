import React from "react";
import Heading from "../reusable components/Heading";
import { colletions } from "../data assets/Collection";
import { Link } from "react-router-dom";

const Collection = () => {
  return (
    <div className="py-[130px]">
      <div className="container">
        <div>
          <Heading>All Collections</Heading>
          <div className="grid grid-cols-4 gap-4 gap-y-14">
            {colletions.map((curCol, index) => {
              return (
                <Link to={`/collection/${curCol.path}`} key={index}>
                  <div>
                    <figure>
                      <img
                        src={curCol.image}
                        alt={curCol.title}
                        className="mb-4"
                      />
                      <figcaption className="text-center text-lg">
                        {curCol.title}
                      </figcaption>
                    </figure>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;
