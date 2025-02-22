'use client';
import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true,
    cssEase: 'ease-out',
    pauseOnHover: false
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <Image 
            src="/images/OIP.jpg" 
            alt="Finance 1" 
            width={1920} 
            height={600} 
            className="slider-image"
            priority
          />
        </div>
        <div>
          <Image 
            src="/images/GettyImages-1139932365-b62cdb147c194d3d8fddebd4fd289620.jpg" 
            alt="Finance 2" 
            width={1920} 
            height={600} 
            className="slider-image"
          />
        </div>
        <div>
          <Image 
            src="/images/download (2).jpg" 
            alt="Finance 3" 
            width={1920} 
            height={600} 
            className="slider-image"
          />
        </div>
      </Slider>
    </div>
  );
};

export default ImageSlider;