import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useProductContext } from "../context/ProductContext";
import Breadcrum from "../reusable components/Breadcrum";
import ProductCard from "../components/ProductCard";
import { filterAndSortProducts } from "../helper/filterAndSortProducts";

const Products = () => {
  const [product, setProduct] = useState([]);
  const [sortOption, setSortOption] = useState("");
  const { products } = useProductContext();
  const { id } = useParams();

  const filteredProduct = products.filter(
    (curProduct) => curProduct.category.toLowerCase().replace(/\s+/g, "") === id
  );

  const handleSort = (e) => {
    setSortOption(e.target.value);
  };

  useEffect(() => {
    const sortedProducts = filterAndSortProducts(products, id, sortOption);
    setProduct(sortedProducts);
  }, [products, id, sortOption]);

  return (
    <div className="pt-[130px]">
      <div className="container">
        <div>
          <div className="flex items-center justify-between">
            <Breadcrum second={id.toUpperCase()} />
            <div className="flex items-center gap-4">
              <span>Showing {product.length} Products</span>
              <select
                className="border-2 rounded border-gray-900 outline-none p-5 py-2"
                onChange={handleSort}
              >
                <option value={"best selling"}>Sort By Best Selling</option>
                <option value={"a-z"}>Sort By Alphabetically, A-Z</option>
                <option value={"z-a"}>Sort By Alphabetically, Z-A</option>
                <option value={"low-high"}>Sort By Price, low to high</option>
                <option value={"high-low"}>Sort By Price, high to low</option>
                <option value={"new-old"}>Sort By Date, new to old</option>
                <option value={"old-new"}>Sort By Date, old to new</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-8 mt-10">
            {product.map((curProduct, index) => {
              return (
                <ProductCard
                  key={index}
                  name={curProduct.name.slice(0, 25) + "..."}
                  image={curProduct.image}
                  hoverImage={curProduct.hoverImage}
                  originalPrice={curProduct.variety[0].originalPrice}
                  discountedPrice={curProduct.variety[0].discountedPrice}
                  discount={curProduct.variety[0].discount}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
