import { useState } from "react";
import S1 from "../Images/Sliderp1.png";
import S2 from "../Images/Sliderp2.png";
import S3 from "../Images/Sliderp3.png";
import S4 from "../Images/Sliderp4.png";
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
import ListAnimate from "./ListAnimate";
function ImageSlider() {
  const [selectedImage, setSelectedImage] = useState(S1);
  const [activeIndex, setActiveIndex] = useState(0);

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
