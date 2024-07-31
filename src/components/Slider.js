import React, { useRef } from "react";
import Slider from "react-slick";

export default function Slider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const sliderRef = useRef(null);

  return (
    <Slider ref={sliderRef} {...settings}>
        {recentJobs.map((job) => (
            
        ))}


    
    </Slider>
  );
}
