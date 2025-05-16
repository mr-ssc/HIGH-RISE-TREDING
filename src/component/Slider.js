// Slider.js
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Slider.css";
import slide1 from './Img/slide-1.png'
import slide2 from './Img/slide-2.png'
import slide3 from './Img/slide-3.png'
import slide4 from './Img/slide-4.png'
import slide5 from './Img/slide-5.png'
import slide6 from './Img/slide-6.png'
import slide7 from './Img/slide-7.png'
import slide8 from './Img/slide-8.png'
import slide9 from './Img/slide-9.png'
import slide10 from './Img/slide-10.png'
import slide11 from './Img/slide-11.png'

// Replace these with your image URLs
const images = [
  slide1,
  slide2,
  slide3,
  slide4,
  slide5,
  slide6,
  slide7,
  slide8,
  slide9,
  slide10,
  slide11,



];

const Slider = () => {
  return (
    <div className="slider-container">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        navigation
        pagination={{ clickable: true }}
        className="mySwiper"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img src={img} alt={`Slide ${index}`} className="slider-image" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
