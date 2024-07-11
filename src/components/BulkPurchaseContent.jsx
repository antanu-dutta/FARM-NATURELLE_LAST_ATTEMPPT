import React from "react";
import Paragraph from "../reusable components/Paragraph";
import Heading from "../reusable components/Heading";

const BulkPurchaseContent = () => {
  return (
    <div className="py-10">
      <div className="container">
        <div className="flex justify-between">
          <div className="w-[45%]">
            <h1 className="text-primary text-[48px] mb-4 font-semibold">
              Bulk Orders
            </h1>
            <Paragraph className="text-gray-800 mb-7">
              Hi, if you need the highest quality of the produce in bulk from
              the range of products we deal in, at most reasonable prices then
              you have reached the right place.
            </Paragraph>
            <Paragraph className="text-gray-800">
              We are suppliers to at least 40 bulk buyers who are from different
              industrial verticals like Cosmetics, Super-foods (Honey brands),
              (Edible Cooking Oils, A2 Desi Cow Ghee or Herbal Juices/ Capsules)
              or Gifting etc. Contact us for more details on prices and Delivery
              terms. We normally send stocks within 24 hours of receipt of
              order.
            </Paragraph>
          </div>
          <div className="pt-5 px-5 pb-16  w-1/2 border border-primary rounded-md">
            <img
              src="https://cdn.shopify.com/s/files/1/0781/6711/4011/files/1f49151004c207fcd82c8bfdbdffddf1.svg?v=1697797949"
              alt=""
            />
            <h3 className="text-3xl mb-4">
              Delivering Excellence, Every Time.
            </h3>
            <Paragraph className="text-gray-500 mb-4">
              Farm Naturelle has consistently upheld their promise of timely
              deliveries. Their commitment to punctuality has made ordering from
              them a hassle-free experience every time.
            </Paragraph>
            <div className="flex gap-5 items-center">
              <img
                src="https://farmnaturelle.com/cdn/shop/files/figure.author__photo.jpg?v=1697798741"
                alt=""
              />
              <div>
                <p className="text-xl">Vrushali Kulkarni</p>
                <p className="text-base">Business owner</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BulkPurchaseContent;
