import React from "react";
import Footerlogo from "../Images/Logo (2).svg";
import FooterF from "../Images/facebook.png";
import FooterT from "../Images/twitter.png";
import FooterY from "../Images/youtube.png";
import Footerbg from "../Images/footerbg.png";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <div className="h-fit">
      <div className="relative bg-[url('.\Components\Images\footerbg.png')]  bg-no-repeat object-contain bg-cover ">
        <div className="  pt-36 flex justify-between xlg:flex-row  sm:flex-col gap-6 lg:gap-10 xlg:gap-44 mx-4 xms:mx-16 ">
          <div className="flex justify-between md:flex-row sm:flex-col gap-10 w-full ">
            <div className="w-[100%]">
              <img
                src={Footerlogo}
                alt=""
                className="w-[130px] h-[101px] img-fluid"
              />
            </div>
            <div className="flex flex-col gap-4 w-[100%]">
              <div className="text-[22px] font-normal font-peligro-stencil">
                Explore
              </div>
              <div className="flex justify-between md:flex-row sm:flex-col gap-8 font-sans text-[18px]">
                <div className="cursor-pointer">
                  <NavLink
                    to={"/"}
                    className={({ isActive }) =>
                      isActive
                        ? "bg-gradient-to-r underline-offset-auto	 from-[#E60B09] bg-white to-[#E9D022] cursor-pointer inline-block text-transparent bg-clip-text font-peligro-stencil"
                        : "text-black"
                    }
                  >
                    Home
                  </NavLink>
                </div>
                <div className="cursor-pointer">
                  <NavLink
                    to={"/Service"}
                    className={({ isActive }) =>
                      isActive
                        ? "bg-gradient-to-r underline-offset-auto	 from-[#E60B09] bg-white to-[#E9D022] cursor-pointer inline-block text-transparent bg-clip-text font-peligro-stencil"
                        : "text-black"
                    }
                  >
                    Services
                  </NavLink>
                </div>
                <div className="cursor-pointer">
                  <NavLink
                    to={"/About"}
                    className={({ isActive }) =>
                      isActive
                        ? "bg-gradient-to-r underline-offset-auto	 from-[#E60B09] bg-white to-[#E9D022] cursor-pointer inline-block text-transparent bg-clip-text font-peligro-stencil"
                        : "text-black"
                    }
                  >
                    About
                  </NavLink>
                </div>
                <div className="cursor-pointer">
                <NavLink
                    to={"/Contact"}
                    className={({ isActive }) =>
                      isActive
                        ? "bg-gradient-to-r underline-offset-auto	 from-[#E60B09] bg-white to-[#E9D022] cursor-pointer inline-block text-transparent bg-clip-text font-peligro-stencil"
                        : "text-black"
                    }
                  >
                    Contact
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between md:flex-row sm:flex-col w-full   gap-10 ">
            <div className="flex flex-col gap-4 md:w-[100%]">
              <div className="text-[22px] font-normal font-peligro-stencil">
                Get in Touch
              </div>
              <div className="flex gap-10 font-sans text-[18px]">
                765 Ash St #100, Canton, GA 30114 | (770) 345-7448
              </div>
            </div>
            <div className="flex flex-col   gap-4 w-[100%] xlg:w-[50%] ">
              <div className="text-[22px] font-normal font-peligro-stencil">
                Socialize
              </div>
              <div className="flex gap-4">
                <div className="cursor-pointer">
                  <img src={FooterF} alt="" />
                </div>
                <div className="cursor-pointer">
                  <img src={FooterT} alt="" />
                </div>
                <div className="cursor-pointer">
                  <img src={FooterY} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-[12px] leading-5 font-sans pt-4 px-4">
          Copyright © 2023 MC Wraps | All Rights Reserved
        </div>
      </div>
    </div>
  );
}
