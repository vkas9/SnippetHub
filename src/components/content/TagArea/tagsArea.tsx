"use client";
import { useAppSelector } from "@/lib/store/hooks";
import React from "react";
// Import Swiper React components

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { FreeMode } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
const TagsArea = () => {

 const {AllTags}= useAppSelector(state=>state.quicklink)
  return (
    <div className="flex items-center w-full  gap-3 pr-3 bg-white/10  rounded-xl">
      <div className="w-full flex items-center p-2 overflow-x-auto h-fit">
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={10}
          freeMode={true}
          modules={[FreeMode]}
          className="mySwiper  rounded-lg "
        >
          {
            AllTags.map((item,index)=>
              <SwiperSlide className=" hover:bg-white/20 ">{item.name}</SwiperSlide>
          )
          }
          
         
        </Swiper>
      </div>

      <button className="whitespace-nowrap">Add Tag</button>
    </div>
  );
};

export default TagsArea;
