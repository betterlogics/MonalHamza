import React from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

import "./Landing.css";

// import required modules
import { EffectCube, Pagination,Autoplay,Navigation } from "swiper";
import { Fade } from 'react-bootstrap';
function Landing() {
  return (
    <>
    <Swiper
      spaceBetween={30}
      effect={"fade"}
      navigation={true}
        pagination={{
         
        }}
     
      autoplay={{
        delay:2500,
        disableOnInteraction: false,
        
        
      }}
     
      
      modules={[Autoplay, Pagination, Navigation ,EffectCube]}
      className="mySwiper"
      
      
    >
      <SwiperSlide>
        <img src="view.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="view.jpg" />
      </SwiperSlide>
      {/* <SwiperSlide>
        <img src="night.jpg" />
      </SwiperSlide> */}
     
    </Swiper>
  </>
  )
}

export default Landing