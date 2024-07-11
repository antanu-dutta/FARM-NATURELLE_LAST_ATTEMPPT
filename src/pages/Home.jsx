import React, { useEffect } from "react";
import SwiperComp from "../reusable components/SwiperComp";
import Banner1 from "../components/Banner1";
import Banner2 from "../components/Banner2";
import Banner3 from "../components/Banner3";
import Banner4 from "../components/Banner4";
import ShopCategory from "../components/ShopCategory";
import { shopByConcern, shobByProduct } from "../data assets/ShobCategory";
import AyurvedicRemedie from "../components/AyurvedicRemedie";
import FilteredProduct from "../components/FilteredProduct";
import WhyFarm from "../components/WhyFarm";
import Gift from "../components/Gift";
import CustomerLove from "../components/CustomerLove";
import Greetings from "../components/Greetings";
import AmazonReview from "../components/AmazonReview";
import HappyCustomer from "../components/HappyCustomer";
import Instagram from "../components/Instagram";

const Home = () => {
  const banners = [<Banner1 />, <Banner2 />, <Banner3 />, <Banner4 />];
  useEffect(() => {
    document.title = "Your Wellness Partner – Farm Naturelle";
    return () => (document.title = "Your Wellness Partner – Farm Naturelle");
  }, []);

  return (
    <div className="pt-[135px]">
      <div>
        <SwiperComp sliderElements={banners} isClickable={true} view={1} />
        <ShopCategory products={shopByConcern} />
        <AyurvedicRemedie />
        <ShopCategory products={shobByProduct} />
        <div className="bg-[#f6f5f0]">
          <FilteredProduct
            heading="Pure Honey"
            title="Bee-produced, unprocessed honey from a farm, pure and natural."
          />
          <FilteredProduct
            heading="Cold Pressed Cooking Oils"
            title="Cold-pressed, natural cooking oils sourced from farm ingredients for healthier cuisine."
          />
          <FilteredProduct
            heading="Bilona A2 Ghee"
            title="Pure, farm-sourced, made through traditional method."
          />
          <WhyFarm />
          <FilteredProduct
            heading="Herbal Juices"
            title="Pure, Organic herbal juices sourced from farm ingredients has no added sugar."
          />
          <Gift />
          <CustomerLove />
        </div>
        <Greetings />
        <AmazonReview />
        <div className="bg-[#f6f5f0]">
          <HappyCustomer />
          <Instagram />
        </div>
      </div>
    </div>
  );
};

export default Home;
