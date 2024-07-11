import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/navigation";

const SwiperComp = ({
  sliderElements,
  slidesPerGroup,
  view,
  isClickable = false,
}) => {
  return (
    <Swiper
      modules={[Pagination, Navigation]}
      spaceBetween={50}
      navigation
      slidesPerGroup={slidesPerGroup}
      slidesPerView={view}
      pagination={{ clickable: isClickable }}
    >
      {sliderElements.map((curSlider, index) => (
        <SwiperSlide key={index}>{curSlider}</SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperComp;
