import React from 'react'
import './Google.css'

// import Logo from '../Assets/monal.png'
// import Kashif from '../About/kashif.png'


import adil from '../Assets/adil.jpg'

import umair from '../Assets/umair.jpg'

import kashif from '../Assets/kashif.png'

import imran from '../Assets/imran.jpg'

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import { Pagination, Navigation } from "swiper";

import { Autoplay, Pagination, Navigation } from "swiper";



function Google() {
  return (
    <div className=' background'>
        <h1 className='texxt px-1 py-5'> GOOGLE TESTIMONIALS</h1>

<div className='container swipers'>
<Swiper

centeredSlides={true}
autoplay={{
  delay: 1500,
  disableOnInteraction: false,
}}



        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={1}
        

        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay,Pagination, Navigation]}
        className="mySwiper">
        <SwiperSlide>
        <img src={imran} className=" immg col-6 col-md-3 col-lg-2" alt=""  />

        </SwiperSlide>
        <SwiperSlide>
        <img src={kashif} className=" immg col-6 col-md-3 col-lg-2" alt=""  />

        </SwiperSlide>
        <SwiperSlide>
        <img src={umair} className=" immg col-6 col-md-3 col-lg-2" alt=""  />

        </SwiperSlide>
        <SwiperSlide>
        <img src={imran} className=" immg col-6 col-md-3 col-lg-2" alt=""  />

        </SwiperSlide>
        <SwiperSlide>
        <img src={adil} className=" immg col-6 col-md-3 col-lg-2" alt=""  />

        </SwiperSlide>
        <SwiperSlide>
        <img src={umair} className=" immg col-6 col-md-3 col-lg-2" alt=""  />

        </SwiperSlide>
   
      </Swiper>

</div>

      
    </div>
  )
}

export default Google