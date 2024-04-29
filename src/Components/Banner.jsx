// import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import {
  Autoplay,
  EffectFade,
  Pagination,
  
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
      modules={[Autoplay, EffectFade, Pagination]}
      className=" max-w-7xl mx-auto mt-8 md:mt-10 px-3 md:px-6 lg:px-0"
    >
      <SwiperSlide>
        <div className="relative">
          <img
            className="h-[35vh] md:h-[60vh] lg:h-[65vh]"
            src="/img/Rectangle 8.png"
            alt=""
          />
          <div className="absolute h-[35vh] md:h-[60vh] lg:h-[65vh] flex items-center top-0 rounded-3xl bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className="text-white space-y-3 md:space-y-4 lg:space-y-7 px-8 lg:pl-32 w-full md:w-9/12">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
                CMA FEST
              </h1>
              <p className="text-xs md:text-base text-justify">
                Make memories that will last a lifetime. See your favorite
                artists live at CMA Fest!
              </p>
              <div className=" text-xs md:text-base flex gap-5">
                <button className=" flex justify-center items-center gap-2 bg-violet-500 px-3 py-2 md:px-6 md:py-2 rounded-lg">
                  <div>
                    <img src="/icon/ticket.png" alt="" />
                  </div>
                  <p>Get Ticket</p>
                </button>
                <button className=" border border-violet-500 px-3 py-2 md:px-6 md:py-2 rounded-lg mr-5">
                  Explore All Events
                </button>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative">
          <img
            className="h-[35vh] md:h-[60vh] lg:h-[65vh]"
            src="/img/Rectangle 8.png"
            alt=""
          />
          <div className="absolute h-[35vh] md:h-[60vh] lg:h-[65vh] flex items-center top-0 rounded-3xl bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className="text-white space-y-3 md:space-y-4 lg:space-y-7 px-8 lg:pl-32 w-full md:w-9/12">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
                CMA FEST
              </h1>
              <p className="text-xs md:text-base text-justify">
                Make memories that will last a lifetime. See your favorite
                artists live at CMA Fest!
              </p>
              <div className=" text-xs md:text-base flex gap-5">
                <button className=" flex justify-center items-center gap-2 bg-violet-500 px-3 py-2 md:px-6 md:py-2 rounded-lg">
                  <div>
                    <img src="/icon/ticket.png" alt="" />
                  </div>
                  <p>Get Ticket</p>
                </button>
                <button className=" border border-violet-500 px-3 py-2 md:px-6 md:py-2 rounded-lg mr-5">
                  Explore All Events
                </button>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative">
          <img
            className="h-[35vh] md:h-[60vh] lg:h-[65vh]"
            src="/img/Rectangle 8.png"
            alt=""
          />
          <div className="absolute h-[35vh] md:h-[60vh] lg:h-[65vh] flex items-center top-0 rounded-3xl bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className="text-white space-y-3 md:space-y-4 lg:space-y-7 px-8 lg:pl-32 w-full md:w-9/12">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
                CMA FEST
              </h1>
              <p className="text-xs md:text-base text-justify">
                Make memories that will last a lifetime. See your favorite
                artists live at CMA Fest!
              </p>
              <div className=" text-xs md:text-base flex gap-5">
                <button className=" flex justify-center items-center gap-2 bg-violet-500 px-3 py-2 md:px-6 md:py-2 rounded-lg">
                  <div>
                    <img src="/icon/ticket.png" alt="" />
                  </div>
                  <p>Get Ticket</p>
                </button>
                <button className=" border border-violet-500 px-3 py-2 md:px-6 md:py-2 rounded-lg mr-5">
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
