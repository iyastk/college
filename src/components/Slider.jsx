import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination} from "swiper";

// Import Swiper styles
import "swiper/css";

// import slides
import SliderFirst from "../images/slide 1.png";
import SliderTwo from "../images/slide 2.jpg";
import SliderThree from "../images/slide 3.png";
import SlideContainer from "./Utilities/SlideContainer";

function Slider() {
  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <SlideContainer slideNumber={SliderFirst}></SlideContainer>
        </SwiperSlide>
        <SwiperSlide>
          <SlideContainer slideNumber={SliderTwo}></SlideContainer>
        </SwiperSlide>
        <SwiperSlide>
          <SlideContainer slideNumber={SliderThree}></SlideContainer>
        </SwiperSlide>
        
      </Swiper>
    </div>
  );
}

export default Slider;
