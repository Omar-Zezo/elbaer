import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules

export default function GallerySlider() {
  return (
    <div className='container'>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        className="mySwiper w-full"
      >
        <SwiperSlide>
        <div className='h-[300px] bg-green-500'>
            sssss
        </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
