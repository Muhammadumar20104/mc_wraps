import img1 from "../Images/image (1).png";
import comma from "../Images/Comma.png";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Button from "./Button";
import Btn1 from "../Images/Vector (4).png";
import Btn2 from "../Images/Vector (5).png";

function Testimonial() {
  const myValue: string = "Get Started";
  const myColor: string = "black";
  const customPrevArrow: any = (props: any) => (
    <div {...props} style={{ display: "none" }}></div>
  );
  const customNextArrow: any = (props: any) => (
    <div {...props} style={{ display: "none" }}></div>
  );
  return (
    <>
      <Slide
        slidesToScroll={1}
        slidesToShow={1}
        indicators={true}
        autoplay={false}
        prevArrow={customPrevArrow}
        nextArrow={customNextArrow}
        arrows={false}
        // dots={false}
        responsive={[
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 500,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ]}
      >
        <div className="px-1 flex justify-center items-center ">
          <div className="flex   justify-center  lg:flex-row  sm:flex-col  md:w-[70%] xsm:w-[75%] sm:w-[80%]">
            <div className="font-sans lg:text-[24px] xmd:text-[16px] font-light lg:leading-8 xmd:leading-2 md:w-[100%] sm:w-[100%] flex flex-col justify-center items-center text-white relative">
              <img
                src={comma}
                alt=""
                className="w-fit h-fit flex flex-col top-20 z-0 left-0  absolute "
              />
              So happy with the work done, and level of service. Mike worked
              with me on several versions of the design to make sure it was
              exactly what I wanted. The finished product exceeded my
              expectations, by far. Not only do I now have the best looking
              truck in the state, possibly the country, but the service from
              everyone was second to none. Thank you to everyone at MC Wraps for
              the amazing work. I will be back.
              <img
                src={comma}
                alt=""
                className="w-fit h-fit flex flex-col bottom-10 right-0  absolute "
              />
            </div>
            <div className="w-auto flex justify-center object-cover">
              <img
                src={img1}
                alt=""
                className=" img-fluid flex justify-center "
              />
            </div>
          </div>
        </div>
        <div className="px-1 flex justify-center items-center ">
          <div className="flex   justify-center  lg:flex-row  xs:flex-col  md:w-[70%] xsm:w-[75%] sm:w-[80%]">
            <div className="font-sans lg:text-[24px] xmd:text-[16px] font-light lg:leading-8 xmd:leading-2 md:w-[100%] sm:w-[100%] flex flex-col justify-center items-center text-white relative">
              <img
                src={comma}
                alt=""
                className="w-fit h-fit flex flex-col top-20 z-0 left-0  absolute "
              />
              So happy with the work done, and level of service. Mike worked
              with me on several versions of the design to make sure it was
              exactly what I wanted. The finished product exceeded my
              expectations, by far. Not only do I now have the best looking
              truck in the state, possibly the country, but the service from
              everyone was second to none. Thank you to everyone at MC Wraps for
              the amazing work. I will be back.
              <img
                src={comma}
                alt=""
                className="w-fit h-fit flex flex-col bottom-10 right-0  absolute "
              />
            </div>
            <div className="w-auto flex justify-center object-cover">
              <img
                src={img1}
                alt=""
                className=" img-fluid flex justify-center "
              />
            </div>
          </div>
        </div>
        <div className="px-1 flex justify-center items-center ">
          <div className="flex   justify-center  lg:flex-row  xs:flex-col  md:w-[70%] xsm:w-[75%] sm:w-[80%]">
            <div className="font-sans lg:text-[24px] xmd:text-[16px] font-light lg:leading-8 xmd:leading-2 md:w-[100%] sm:w-[100%] flex flex-col justify-center items-center text-white relative">
              <img
                src={comma}
                alt=""
                className="w-fit h-fit flex flex-col top-20 z-0 left-0  absolute "
              />
              So happy with the work done, and level of service. Mike worked
              with me on several versions of the design to make sure it was
              exactly what I wanted. The finished product exceeded my
              expectations, by far. Not only do I now have the best looking
              truck in the state, possibly the country, but the service from
              everyone was second to none. Thank you to everyone at MC Wraps for
              the amazing work. I will be back.
              <img
                src={comma}
                alt=""
                className="w-fit h-fit flex flex-col bottom-10 right-0  absolute "
              />
            </div>
            <div className="w-auto flex justify-center object-cover">
              <img
                src={img1}
                alt=""
                className=" img-fluid flex justify-center "
              />
            </div>
          </div>
        </div>
      </Slide>
      <div className="bg-[url('.\Components\Images\IYC.png')] bg-no-repeat md:mx-20 mx-2 flex justify-between">
        <div className="pt-28  flex lg:flex-row xs:flex-col justify-between gap-5">
          <div className="lg:w-[85%] sm:w-full flex flex-col justify-center gap-6 ">
            <div className="text-[40px]  xsm:text-start sm:text-center font-peligro-stencil text-white ">
              It’s Time to Improve Your Company Image
            </div>
            <div className="xsm:text-[24px]  xsm:text-start sm:text-justify sm:text-[20px] font-sans text-white leading-9">
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
    </>
  );
}

export default Testimonial;
