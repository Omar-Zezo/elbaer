import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { Slide1, Slide2 } from "../../images/imgs";


export default function HeroSlider() {
  return (
    <div className="bg-orange-500 h-[500px] mt-[-35px]">
      <Swiper className="mySwiper size-full">
        <SwiperSlide className="size-full">
            <div style={{background: `url('${Slide1}')`, backgroundSize:"cover"}} className="size-full">

            </div>
        </SwiperSlide>

        <SwiperSlide className="size-full">
            <div style={{background: `url('${Slide2}')`, backgroundSize:"cover"}} className="size-full">

            </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}