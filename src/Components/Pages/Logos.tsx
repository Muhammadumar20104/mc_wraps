import React, { useState } from "react";

function Logos({ id, logo, logoh, h, w }: any) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div key={id} className="w-[8%]">
      <div className="grayscale hover:grayscale-0">
        <img
          src={logoh}
          alt=""
          className="w-full"
        />
      </div>
    </div>
  );
}

export default Logos;
