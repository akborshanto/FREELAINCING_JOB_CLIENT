import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Mousewheel, Pagination } from 'swiper/modules';
import Sliders from '../../slider/Slider';
/* img */
import caro1 from '../../../assets/img/carousel1.jpg'
import caro2 from '../../../assets/img/carousel2.jpg'
import caro3 from '../../../assets/img/carousel3.jpg'


const Banner = () => {

  return (
    <div>

    <Swiper
    direction={'vertical'}
    slidesPerView={3}
    spaceBetween={30}
    mousewheel={true}
    pagination={{
      clickable: true,
    }}
    modules={[Mousewheel, Pagination]}
    className="mySwiper"
  >
    <SwiperSlide><Sliders Heading='HOW ARE YOUR' img={caro1}></Sliders></SwiperSlide>
    <SwiperSlide><Sliders Heading='HOW ARE YOUR' img={caro1}> </Sliders></SwiperSlide>
    <SwiperSlide><Sliders Heading='HOW ARE YOUR' img={caro1}> </Sliders></SwiperSlide>

  </Swiper>
    </div>
  )
}

export default Banner
