import React, { useState } from "react";
import van from "../Images/ServiceBox.png";
import icon from "../Images/icon.png";
import car from "../Images/Car1.png";
import line from "../Images/Rectangle 2 (1).png";
import { IoSend } from "react-icons/io5";
interface Car {
  id: number;
  brand: string;
  model: string;
  year: number;
  imageName: string;
  logo: string;
}

interface HoverCard {
  cars: Car[];
}
function HoverCard({ id, frame, title, logo, image, hframe, hlogo }: any) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      key={id}
      className="w-fit"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered ? (
        <div className="relative  max-w-2xl overflow-hidden group rounded-3xl ">
          <img
            src={hframe}
            alt="hframe"
            className="w-[880px] h-[360px] object-cover absolute  z-10 inset-0 transform transition-transform duration-700 group-hover:scale-110 "
          />
          <img
            src={image}
            alt="Content"
            className="w-full h-auto z-10 p-4 rounded-3xl  inset-0 transform transition-transform duration-800 group-hover:scale-125"
          />
          <div className="flex flex-col gap-20">
            <div className="w-32 md:w-48 xs:w-28 xs:top-[30px] xsm:top-[50px] xs:left-[60px] text-[10px] md:left-[100px] absolute xlg:top-[70px] left-[80px] z-10 transform -translate-x-1/2 -translate-y-1/2 text-white font-peligro-stencil xlg:text-[26px] xsm:text-[16px]">
              {title}
            </div>
            <div className="xsm:w-14 xs:top-[70px]  xs:left-6 xsm:top-[120px] xsm:left-9 xlg:w-24 xs:w-16 absolute lg:left-8 lg:top-[120px] xlg:top-[170px] p-2 xlg:left-12 z-10 transform -translate-x-1/2 -translate-y-1/2">
              <img src={hlogo} alt="" className="" />
            </div>
            {/* <div className="absolute lg:top-[150px] md:top-[180px] xsm:top-[170px] sm:top-[100px] z-10 flex text-center text-white gap-1 text-xs justify-center">
              <div className="flex flex-col justify-center ">
                <img src={line} alt="" className="w-2 "/>
              </div>
              <div>
                Go
              </div>
              <div className="">
                <IoSend/>
              </div>
            </div> */}
          </div>
        </div>
      ) : (
        <div className="relative  max-w-2xl overflow-hidden group rounded-3xl ">
          <img
            src={frame}
            alt="Frame"
            className="w-[880px] h-[360px] object-cover absolute  z-10 "
          />
          <img
            src={image}
            alt="Content"
            className="w-full h-auto z-10 p-4 rounded-3xl  inset-0 transform transition-transform duration-700 group-hover:scale-125"
          />
          <div className="flex flex-col gap-10 ">
            <div className="w-32 md:w-48 xs:w-28 xs:top-[50px] xs:left-[60px] text-[10px] md:left-[100px] absolute xlg:top-[70px] left-[80px] z-10 transform -translate-x-1/2 -translate-y-1/2 text-black font-peligro-stencil xlg:text-[26px] xsm:text-[16px]">
              {title}
            </div>
            <div className="xsm:w-14 xs:top-[85px] xs:left-6 xsm:top-[150px] xsm:left-9 xlg:w-24 xs:w-16 absolute lg:left-8 lg:top-[120px] xlg:top-[170px] p-2 xlg:left-12 z-10 transform -translate-x-1/2 -translate-y-1/2">
              <img src={logo} alt="" className="" />
            </div>
            <div></div>
          </div>
        </div>
      )}
    </div>
  );
}

export default HoverCard;
