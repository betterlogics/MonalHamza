import React from 'react'
import "./About.css"

import pic from '../Assets/view.jpg'

import night  from '../Assets/night.jpg'
import karihi from '../Assets/karihi.png'
import kabab from '../Assets/kabab.png'
import vater from '../Assets/vater.png'
import palte from "../Assets/plate.jpg"

import leman from '../Assets/leman.jpg'


import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";

function About() {
  return (

    <div className='back'>
    

<div class="container py-5 ">
  <div class="row justify-content-between ">
 

    <div class="col-lg-5">
        <h3 className='about text-start mb-3 txxt'>ABOUT US</h3>
        <div className='font text-white'>The Monal Restaurant Pir Sohawa situated at the Margallah hills offers indoor
         & outdoor dining with an extensive view of the Capital. Monal Islamabad is a perfect blend of traditional & contemporary cuisine. It offers a vitalizing experience in fine-dining that attracts locals and tourists alike. Monal Islamabad is the flagship restaurant of The Monal Group of Companies. Since 2006,
         Monal Islamabad is serving its guests with the best fine dining experiences.
      </div>
         <div className='d-flex justify-content-start my-4'> 
         <a href="#" class="btn colo  btn-lg" tabindex="-1" role="button" aria-disabled="true">Read More </a>
         </div>
   
         </div>

         
      
    <div class="col-lg-6 bg-drak">
      
    <Swiper

centeredSlides={true}
autoplay={{
  delay: 3000,
  disableOnInteraction: false,
}}

loop={true}
navigation={true}
modules={[Autoplay,Pagination, Navigation]}
className="mySwiper"
>
<SwiperSlide>

<img src={pic}  alt="Never"  className='pic'/>

</SwiperSlide>
<SwiperSlide>

<img src={night}  alt="Never"  className='pic'/>
</SwiperSlide>
<SwiperSlide>

<img src={ karihi}  alt="Never"  className='pic'/>

</SwiperSlide>
<SwiperSlide>
<img src={kabab}  alt="Never"  className='pic'/>
</SwiperSlide>

<SwiperSlide>
<img src={leman}  alt="Never"  className='pic'/>
</SwiperSlide>

<SwiperSlide>
<img src={vater}  alt="Never"  className='pic'/>
</SwiperSlide>

<SwiperSlide>
<img src={palte}  alt="Never"  className='pic'/>
</SwiperSlide>

</Swiper>


</div>
  </div>
    </div>
    </div>

  )
}

export default About