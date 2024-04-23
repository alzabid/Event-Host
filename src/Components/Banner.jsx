// import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
  Keyboard,
} from "swiper/modules";

const Banner = () => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      keyboard={true}
      modules={[Autoplay, EffectFade, Navigation, Pagination, Keyboard]}
      className=" my-10"
    >
      <SwiperSlide>
        <div className="relative ">
          <img
            className="h-[30vh] md:h-[50vh] lg:h-[65vh] w-7xl mx-auto "
            src="/img/Rectangle 8.png"
            alt=""
          />
          <div className="absolute h-[30vh] md:h-[50vh] lg:h-[65vh] flex items-center lg:left-40 lg:right-40 top-0 rounded-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className="text-white space-y-7 px-10 lg:pl-32 w-full md:w-1/2">
              <h1 className="text-2xl md:text-2xl lg:text-4xl font-bold">
                CMA Fest
              </h1>
              <p className="text-xs lg:text-base text-justify">
                Make memories that will last a lifetime. See your favorite
                artists live at CMA Fest!
              </p>
              <div className=" flex gap-5">
                <button className=" flex justify-center items-center gap-2 bg-violet-500 px-6 py-2 rounded-lg">
                  <div>
                    <img src="./icon/Vector.png" alt="" />
                  </div>
                  <p>Get Ticket</p>
                </button>
                <button className=" border border-violet-500 px-6 py-2 rounded-lg mr-5">
                  Explore All Events
                </button>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
