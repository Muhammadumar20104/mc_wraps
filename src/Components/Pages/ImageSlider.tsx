import React, { useState } from "react";
import SL1 from "../Images/SL1.png";
import SL2 from "../Images/SL2.png";
import SL3 from "../Images/SL3.png";
import SL4 from "../Images/SL4.png";
import S1 from "../Images/Sliderp1.png";
import S2 from "../Images/Sliderp2.png";
import S3 from "../Images/Sliderp3.png";
import S4 from "../Images/Sliderp4.png";
import Van from "../Images/icon1.png";
import Van2 from "../Images/icon2.png";
import Van3 from "../Images/icon3.png";
import Van4 from "../Images/icon5.png";
import Van5 from "../Images/icon6.png";
import Van6 from "../Images/icon8.png";
import Van7 from "../Images/icon1.png";
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
import ListAnimate from "./ListAnimate";

interface List {
  id: number;
  title: string;
  logo: string;
}
function ImageSlider() {
  const [selectedImage, setSelectedImage] = useState(S1);
  const [activeIndex, setActiveIndex] = useState(0);
  const lists: List[] = [
    {
      id: 1,
      title: "Commercial Fleet Wraps",
      logo: Van,
    },
    {
      id: 2,
      title: "Car & Truck Wraps",
      logo: Van2,
    },
    {
      id: 3,
      title: "Boat Wraps",
      logo: Van3,
    },
    {
      id: 4,
      title: "Partial Wraps & Graphics",
      logo: Van4,
    },
    {
      id: 5,
      title: "Car Magnets",
      logo: Van5,
    },
    {
      id: 6,
      title: "Print Graphics & Stickers",
      logo: Van6,
    },
    {
      id: 7,
      title: "Banners & Signs",
      logo: Van7,
    },
    {
      id: 8,
      title: "Graphic Design & Logos",
      logo: Van,
    },
  ];

  const handleThumbnailClick = (imageSrc: any, index: any) => {
    setSelectedImage(imageSrc);
    setActiveIndex(index);
  };

  const thumbnailImages = [S1, S2, S3, S4];
  return (
    <>
      <div className=" grid grid-cols-12 mx-8  pt-10  xmd:flex-col-reverse">
        <div className="slg:col-span-4 xmd:col-span-6 sm:col-span-12 items-center justify-between lg:translate-x-28">
          <div className="flex flex-col gap-5">
            <ListAnimate />
          </div>
        </div>
        <div className="slg:col-span-8 xmd:col-span-6 xmd:order-last sm:order-first sm:col-span-12 h-[100%] w-[100%]  justify-items-end ">
          <div className="">
            <img
              src={selectedImage}
              alt=""
              className="w-[100%] slg:object-contain md:object-cover"
            />
          </div>
          <div className="w-[100%] ">
            <Slide
              slidesToScroll={1}
              slidesToShow={3}
              indicators={true}
              autoplay={true}
              arrows={false}
              responsive={[
                {
                  breakpoint: 800,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                  },
                },
                {
                  breakpoint: 500,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                  },
                },
              ]}
            >
              {thumbnailImages.map((thumbnail, index) => (
                <div
                  key={index}
                  onClick={() => handleThumbnailClick(thumbnail, index)}
                  className={`w-[80%] cursor-pointer ${
                    index === activeIndex ? "filter-none" : "grayscale"
                  }`}
                >
                  <img
                    src={thumbnail}
                    alt=""
                    className="w-[80%] object-cover"
                  />
                </div>
              ))}
            </Slide>
          </div>
        </div>
      </div>
    </>
  );
}

export default ImageSlider;
