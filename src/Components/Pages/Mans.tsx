import React, { useState } from "react";
import man from "../Images/Man1.png";
import manh from "../Images/Manh1.png";
import man2 from "../Images/Man2.png";
import manh2 from "../Images/Manh2.png";
import man3 from "../Images/Man3.png";
import manh3 from "../Images/Manh3.png";

function Mans({ id, man, manh }: any) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      {isHovered ? (
        <div className="md:w-[20%] sm:w-[80%] flex justify-center">
          <img
            src={manh}
            alt=""
            className=""
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          />
        </div>
      ) : (
        <div className="md:w-[20%] sm:w-[80%] flex justify-center">
          <img
            src={man}
            alt=""
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          />
        </div>
      )}
    </>
  );
}

export default Mans;
