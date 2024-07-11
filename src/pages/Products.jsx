import React from "react";
import { useParams } from "react-router-dom";

const Products = () => {
  const { id } = useParams();
  console.log("id :", id);
  return <div className="pt-[130px]">Products</div>;
};

export default Products;
