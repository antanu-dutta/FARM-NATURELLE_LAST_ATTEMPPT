import React from "react";
import FarmHeader from "../components/FarmHeader";
import AboutFarm from "../components/AboutFarm";
import FarmNatureGoodNess from "../components/FarmNaturelleGoodNess";
import CultivatingWellness from "../components/CultivatingWellness";
import StayAtFarmHouse from "../components/StayAtFarmHouse";
import BookFarm from "../components/BookFarm";
import BeautyOfFruitFarm from "../components/BeautiFarm";

const Farms = () => {
  return (
    <div className="pt-[130px]">
      <FarmHeader />
      <AboutFarm />
      <FarmNatureGoodNess />
      <CultivatingWellness />
      <StayAtFarmHouse />
      <BookFarm />
      <BeautyOfFruitFarm />
    </div>
  );
};

export default Farms;
