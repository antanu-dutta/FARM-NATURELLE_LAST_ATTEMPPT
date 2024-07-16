import React from "react";
import { useParams } from "react-router-dom";
// import { useProductContext } from "../context/ProductContext";
import Heading from "../reusable components/Heading";
import Breadcrum from "../reusable components/Breadcrum";
import { useProductContext } from "../context/ProductContext";

const SinglePage = () => {
  const { products } = useProductContext();
  const { id } = useParams();
  const singleProduct = products.find((curProduct) => curProduct.id === id);

  return (
    <div className="py-[130px]">
      <div className="container">
        <div>
          <Breadcrum second={"Product"} />
          {/* <Heading>{singleProduct.name}</Heading> */}
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
