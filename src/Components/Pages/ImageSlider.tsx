import { useState } from "react";
import S1 from "../Images/Sliderp1.png";
import arrowup from "../Images/arrowup.svg";
import arrowdown from "../Images/arrowdown.svg";
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
      <div className="mx-5">
        <div className="bg-[url('./Components/Images/SWG.png')] bg-no-repeat">
          <div className="text-[50px] font-peligro-stencil text-white pt-20">
            Services & Work Galleries
          </div>
        </div>
        <div className="grid grid-cols-12  gap-4 pt-10 xmd:flex-col-reverse">
          <div className="slg:col-span-4  xmd:col-span-4 xs:col-span-12 items-center justify-between xmd:pt-0  sm:pt-10 ">
            <div className="flex flex-col gap-5 ">
              <ListAnimate />
            </div>
          </div>
          <div className="relative slg:col-span-8 xmd:col-span-8 xmd:order-last xs:order-first xs:col-span-12 h-[100%] w-[100%] justify-items-center items-center grid grid-cols-12">
            <div className="col-span-10">
              <img src={selectedImage} alt="" className="w-[100%]" />
            </div>
            <div className="w-[47%] h-[20%] rotate-90 z-100 absolute xmd:-right-[17%] sm:-right-[17%] xlg:top-[40%] slg:top-[175px] lg:top-[180px] xmd:top-[170px] md:top-[160px] xsm:top-[130px] 5sm:top-[128px] 4sm:top-[85px] 3sm:top-[60px] sm:top-[60px] overflow-hidden col-span-2">
              <Slide
                nextArrow={
                  <button
                    style={{
                      background: "#171e2e",
                      border: "2px",
                      width: "25px",
                      height: "70px",
                      marginRight: "-4px",
                    }}
                  >
                    <img
                      src={arrowup}
                      alt=""
                      className="rotate-90 w-[70%] ml-1"
                    />
                  </button>
                }
                prevArrow={
                  <button
                    style={{
                      background: "#171e2e",
                      border: "0px",
                      width: "20px",
                      height: "85px",
                      marginRight: "20px",
                    }}
                  >
                    <img src={arrowdown} alt="" className="rotate-90 " />
                  </button>
                }
                slidesToScroll={1}
                slidesToShow={4} // Adjust this value to display more images simultaneously
                indicators={false} // Hide dots
                autoplay={true}
                arrows={true}
                dots={false}
                responsive={[
                  {
                    breakpoint: 800,
                    settings: {
                      slidesToShow: 4,
                      slidesToScroll: 2,
                    },
                  },
                  {
                    breakpoint: 500,
                    settings: {
                      slidesToShow: 4,
                      slidesToScroll: 2,
                    },
                  },
                ]}
                // Adjust CSS for slider container to increase height
                className="react-slideshow-image-wrapper"
                style={{ width: "50%" }} // Adjust the width here to reduce gap between images
              >
                {thumbnailImages.map((thumbnail, index) => (
                  <div
                    key={index}
                    onClick={() => handleThumbnailClick(thumbnail, index)}
                    className={`w-[110%] cursor-pointer object-cover flex rotate-180 ${
                      index === activeIndex ? "filter-none" : "grayscale"
                    }`}
                  >
                    <img
                      src={thumbnail}
                      alt=""
                      className="w-[120%] object-contain rotate-90"
                    />
                  </div>
                ))}
              </Slide>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ImageSlider;
