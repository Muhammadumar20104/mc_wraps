import React, { useState } from "react";
import Logo from "../Images/Logo (3).png";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import Logo2 from "../Images/Logo (2).png";
import Facebook from "../Images/Navigation Link.png";
import FacebookO from "../Images/Property 1=FB H.png";
import Youtube from "../Images/Navigation Link (1).png";
import YoutubeO from "../Images/Property 1=YT H.png";
import Twitter from "../Images/Navigation Link (2).png";
import TwitterO from "../Images/Property 1=T H.png";
import Btn1 from "../Images/Vector (4).png";
import Btn2 from "../Images/Vector (5).png";
import btnbg from "../Images/Vector (4).png";
import Button from "./Button";
import dot from "../Images/Ellipse 1.png";
import line from "../Images/Rectangle 2 (1).png";
import { TiThMenu, TiTimes } from "react-icons/ti";
import { Link, NavLink } from "react-router-dom";
interface SidebarItem {
  text: string;
}
function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isHoveredH, setIsHoveredh] = useState(false);
  const [isHoveredA, setIsHovereda] = useState(false);
  const [isHoveredS, setIsHovereds] = useState(false);
  const [isHoveredF, setIsHoveredF] = useState(false);
  const [isHoveredY, setIsHoveredY] = useState(false);
  const [isHoveredT, setIsHoveredT] = useState(false);
  let [isOpen, setIsOpen] = useState(true);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  const myValue: string = "Get Started";
  const myColor: string = "black";
  const sidebarItems: SidebarItem[] = [
    { text: "Home" },
    { text: "About" },
    { text: "Services" },
  ];
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className="relative flex justify-between px-20 sm:px-2 xsm:px-10 pt-4 lg:items-start  sm:items-center">
      <div className="flex  w-fit ">
        <img
          src={Logo2}
          alt="Logo Not Found"
          className="xlg:w-[100%] xsm:w-[70%]  sm:w-[50%]  "
        />
      </div>
      <div className="block text-center lg:hidden">
        {isSidebarOpen ? (
          <TiTimes
            className="text-5xl text-white cursor-pointer"
            onClick={toggleSidebar}
          />
        ) : (
          <TiThMenu
            className="text-5xl text-white cursor-pointer"
            onClick={toggleSidebar}
          />
        )}
      </div>
      <div
        className={`absolute  gap-3 ${
          isSidebarOpen ? "flex" : "hidden"
        } z-10 left-0  top-[100px] h-[100vh] w-full  bg-[url('./Components/Images/bgtexture1.png')] lg:hidden`}
      >
        <div className="flex flex-col justify-center font-peligro-stencil items-center w-full bg-slate-900/80 backdrop-brightness-50">
          <ul className="flex flex-col gap-16 text-[18px] justify-center items-center  font-normal items-start">
            <li onClick={toggleSidebar}>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-2xl bg-gradient-to-r underline-offset-auto	 from-[#E60B09] bg-white to-[#E9D022] cursor-pointer inline-block text-transparent bg-clip-text font-peligro-stencil"
                    : "hover:bg-gradient-to-r underline-offset-auto	 from-[#E60B09] bg-white to-[#E9D022] cursor-pointer inline-block text-transparent bg-clip-text text-center"
                }
              >
                Home
              </NavLink>
            </li>
            <li onClick={toggleSidebar}>
              <NavLink
                to="/About"
                className={({ isActive }) =>
                  isActive
                    ? "text-2xl bg-gradient-to-r underline-offset-auto	 from-[#E60B09] bg-white to-[#E9D022] cursor-pointer inline-block text-transparent bg-clip-text font-peligro-stencil"
                    : "hover:bg-gradient-to-r underline-offset-auto	 from-[#E60B09] bg-white to-[#E9D022] cursor-pointer inline-block text-transparent bg-clip-text text-center"
                }
              >
                About
              </NavLink>
            </li>
            <li onClick={toggleSidebar}>
              <NavLink
                to="/Service"
                className={({ isActive }) =>
                  isActive
                    ? "text-2xl bg-gradient-to-r underline-offset-auto	 from-[#E60B09] bg-white to-[#E9D022] cursor-pointer inline-block text-transparent bg-clip-text font-peligro-stencil"
                    : "hover:bg-gradient-to-r underline-offset-auto	 from-[#E60B09] bg-white to-[#E9D022] cursor-pointer inline-block text-transparent bg-clip-text text-center"
                }
              >
                Service
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="hidden flex-col gap-3 lg:flex ">
        <div className="flex gap-4 justify-end cursor-pointer">
          {/* {isHovered &&} */}
          {isHoveredF ? (
            <div>
              <img
                src={FacebookO}
                alt=""
                className="object-contain"
                onMouseEnter={() => setIsHoveredF(true)}
                onMouseLeave={() => setIsHoveredF(false)}
              />
            </div>
          ) : (
            <div>
              <img
                src={Facebook}
                alt=""
                className="object-contain"
                onMouseEnter={() => setIsHoveredF(true)}
                onMouseLeave={() => setIsHoveredF(false)}
              />
            </div>
          )}
          {isHoveredY ? (
            <div className="flex flex-col justify-center">
              <img
                src={YoutubeO}
                alt=""
                className="object-contain"
                onMouseEnter={() => setIsHoveredY(true)}
                onMouseLeave={() => setIsHoveredY(false)}
              />
            </div>
          ) : (
            <div className="flex flex-col justify-center">
              <img
                src={Youtube}
                alt=""
                className="object-contain"
                onMouseEnter={() => setIsHoveredY(true)}
                onMouseLeave={() => setIsHoveredY(false)}
              />
            </div>
          )}
          {isHoveredT ? (
            <div className="flex flex-col justify-center">
              <img
                src={TwitterO}
                alt=""
                className="object-contain"
                onMouseEnter={() => setIsHoveredT(true)}
                onMouseLeave={() => setIsHoveredT(false)}
              />
            </div>
          ) : (
            <div className="flex flex-col justify-center">
              <img
                src={Twitter}
                alt=""
                className="object-contain"
                onMouseEnter={() => setIsHoveredT(true)}
                onMouseLeave={() => setIsHoveredT(false)}
              />
            </div>
          )}
        </div>
        <div className="flex flex-col justify-center font-peligro-stencil items-center">
          <ul className="flex gap-16 text-[18px] font-normal items-center">
            <li
              onMouseEnter={() => setIsHoveredh(true)}
              onMouseLeave={() => setIsHoveredh(false)}
              className="bg-gradient-to-r underline-offset-auto	 from-[#E60B09] bg-white to-[#E9D022] cursor-pointer inline-block text-transparent bg-clip-text text-center"
            >
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "bg-gradient-to-r underline-offset-auto	 from-[#E60B09] bg-white to-[#E9D022] cursor-pointer inline-block text-transparent bg-clip-text font-peligro-stencil"
                    : "hover:bg-gradient-to-r underline-offset-auto	 from-[#E60B09] bg-white to-[#E9D022] cursor-pointer inline-block text-transparent bg-clip-text text-center"
                }
              >
                Home
              </NavLink>

              {isHoveredH ? (
                <div className="flex gap-1 justify-center ">
                  <span>
                    <img src={line} alt="" className="w-5 h-[2px]" />
                  </span>
                  <span>
                    <img src={dot} alt="" className="w-auto" />
                  </span>
                  <span>
                    <img src={line} alt="" className="w-5 h-[2px]" />
                  </span>
                </div>
              ) : (
                ""
              )}
            </li>
            <li
              onMouseEnter={() => setIsHovereda(true)}
              onMouseLeave={() => setIsHovereda(false)}
              className="hover:bg-gradient-to-r underline-offset-auto	 from-[#E60B09] bg-white to-[#E9D022] cursor-pointer inline-block text-transparent bg-clip-text  "
            >
              <NavLink
                to="/About"
                className={({ isActive }) =>
                  isActive
                    ? "bg-gradient-to-r underline-offset-auto	 from-[#E60B09] bg-white to-[#E9D022] cursor-pointer inline-block text-transparent bg-clip-text font-peligro-stencil"
                    : "hover:bg-gradient-to-r underline-offset-auto	 from-[#E60B09] bg-white to-[#E9D022] cursor-pointer inline-block text-transparent bg-clip-text text-center"
                }
              >
                About
              </NavLink>

              {isHoveredA ? (
                <div className="flex gap-1 justify-center ">
                  <span>
                    <img src={line} alt="" className="w-6 h-[2px]" />
                  </span>
                  <span>
                    <img src={dot} alt="" className="w-auto" />
                  </span>
                  <span>
                    <img src={line} alt="" className="w-6 h-[2px]" />
                  </span>
                </div>
              ) : (
                ""
              )}
            </li>
            <li
              onMouseEnter={() => setIsHovereds(true)}
              onMouseLeave={() => setIsHovereds(false)}
              className="hover:bg-gradient-to-r underline-offset-auto	 from-[#E60B09] bg-white to-[#E9D022] cursor-pointer inline-block text-transparent bg-clip-text "
            >
              <NavLink
                to="/Service"
                className={({ isActive }) =>
                  isActive
                    ? "bg-gradient-to-r underline-offset-auto	 from-[#E60B09] bg-white to-[#E9D022] cursor-pointer inline-block text-transparent bg-clip-text font-peligro-stencil"
                    : "hover:bg-gradient-to-r underline-offset-auto	 from-[#E60B09] bg-white to-[#E9D022] cursor-pointer inline-block text-transparent bg-clip-text text-center"
                }
              >
                Service
              </NavLink>
              {isHoveredS ? (
                <div className="flex gap-1 justify-center ">
                  <span>
                    <img src={line} alt="" className="w-8 h-[2px]" />
                  </span>
                  <span>
                    <img src={dot} alt="" className="w-auto" />
                  </span>
                  <span>
                    <img src={line} alt="" className="w-8 h-[2px]" />
                  </span>
                </div>
              ) : (
                ""
              )}
            </li>
            <li>
              <Button txt={myValue} Btn1={Btn1} Btn2={Btn2} myColor={myColor} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
