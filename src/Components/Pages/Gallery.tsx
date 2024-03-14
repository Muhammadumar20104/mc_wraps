import React, { Component } from "react";
import Slider from "react-slick";
// import { baseUrl } from "./config";
import S2 from "../Images/Sliderp2.png";
import S3 from "../Images/Sliderp3.png";
import S4 from "../Images/Sliderp4.png";

function Gallery() {
  const settings = {
    customPaging: function(i) {
      return (
        <a>
          <img src={`${S2}+${i}`} />
        </a>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img src={S2} />
        </div>
        <div>
          <img src={S3} />
        </div>
        <div>
          <img src={S4} />
        </div>
        <div>
          <img src={S2} />
        </div>
      </Slider>
    </div>
  );
}

export default Gallery;
