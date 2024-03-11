import React, { useState } from "react";
import dot from "../Images/Ellipse 1.png";
import line from "../Images/Rectangle 2 (1).png";

function Button({ txt,Btn1,Btn2,myColor }:any) {
  const [isHovered, setIsHovered] = useState(false);
  console.log(txt);

  return (
    <div
      className="w-fit h-fit"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered ? (
        <div className="relative w-[140px]">
          <img src={Btn2} alt="" className="w-[140px]" />
          <div className="absolute text-white text-center align-items-center text-[16px] flex justify-center  top-[2px] cursor-pointer flex-col w-full leading-[35px] items-center font-peligro-stencil">
            {txt}
            {isHovered ? (
              <div className="flex gap-1 justify-center -mt-[10px] w-[100%]">
                <span>
                  <img src={line} alt="" className="w-[100%]" />
                </span>
                <span>
                  <img src={dot} alt="" className="w-[100%]" />
                </span>
                <span>
                  <img src={line} alt="" className="w-[100%] " />
                </span>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      ) : (
        <div className="relative w-[140px] flex justify-center">
          <img src={Btn1} alt="" className="w-[140px] h-[37px] flex " />
          <div className={`absolute text-center align-items-center flex justify-center w-full  text-[16px]  top-[2px] cursor-pointer  leading-[35px] items-center font-peligro-stencil text-uppercase text-${myColor} `}>
            {txt}
          </div>
        </div>
      )}
    </div>
  );
}

export default Button;
