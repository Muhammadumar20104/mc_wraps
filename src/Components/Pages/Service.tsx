import React from "react";
import { Slide } from "react-slideshow-image";
import Slider from "./Slider";
import Button from "./Button";
import Btn1 from "../Images/Vector (4).png";
import Btn2 from "../Images/Vector (5).png";
import ImageSlider from "./ImageSlider";

function Service() {
    const myValue: string = "Get Started";
  const myColor: string = "black";
  return (
    <div>
      <ImageSlider/>
      <div className="bg-[url('.\Components\Images\IYC.png')] bg-no-repeat px-4 flex justify-between">
        <div className="pt-28  flex lg:flex-row sm:flex-col gap-8 justify-between">
          <div className="lg:w-[85%] sm:w-full flex flex-col gap-8 justify-center ">
            <div className="text-[40px]  xsm:text-start sm:text-center font-peligro-stencil text-white ">
              It’s Time to Improve Your Company Image
            </div>
            <div className="text-[24px]  xsm:text-start sm:text-justify font-sans text-white leading-9">
              Here at MC Wraps & Signs we offer everything you need for your
              business and personal needs. Mike and his team take pride in what
              they do because they want to make your product stand out from all
              others. Let us shape and design your thoughts into something that
              will be remembered.
            </div>
          </div>
          <div className="flex justify-center items-center ">
            <Button txt={myValue} Btn1={Btn1} Btn2={Btn2} myColor={myColor} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
