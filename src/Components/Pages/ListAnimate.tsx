import React, { useEffect, useState } from "react";
import Van from "../Images/icon1.png";
import Van2 from "../Images/icon2.png";
import Van3 from "../Images/icon3.png";
import Van4 from "../Images/icon5.png";
import Van5 from "../Images/icon6.png";
import Van6 from "../Images/icon8.png";
import Van7 from "../Images/icon1.png";

interface List {
  id: number;
  title: string;
  logo: string;
}

function ListAnimate() {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const lists: List[] = [
    {
      id: 1,
      title: "Commercial Fleet Wraps",
      logo: Van,
    },
    {
      id: 2,
      title: "Car & Truck Wraps",
      logo: Van2,
    },
    {
      id: 3,
      title: "Boat Wraps",
      logo: Van3,
    },
    {
      id: 4,
      title: "Partial Wraps & Graphics",
      logo: Van4,
    },
    {
      id: 5,
      title: "Car Magnets",
      logo: Van5,
    },
    {
      id: 6,
      title: "Print Graphics & Stickers",
      logo: Van6,
    },
    {
      id: 7,
      title: "Banners & Signs",
      logo: Van7,
    },
    {
      id: 8,
      title: "Graphic Design & Logos",
      logo: Van,
    },
  ];

  const handleMouseEnter = (itemId: number) => {
    setHoveredItem(itemId);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  const underlineStyle = {
    borderBottom: "",
    backgroundImage: "linear-gradient(to right, #E60B09, #E9D022)",
    backgroundSize: "100% 2px",
    backgroundPosition: "0 100%",
    backgroundRepeat: "no-repeat",
  };

  return (
    <>
      {lists.map((list) => (
        <div className="w-fit flex justify-center items-center" key={list.id}>
          <div
            className="flex items-center"
            onMouseEnter={() => handleMouseEnter(list.id)}
            onMouseLeave={handleMouseLeave}
          >
            {hoveredItem === list.id && (
              <div>
                <img src={list.logo} alt="" className="w-[80%]" />
              </div>
            )}
            <div className="text-[24px] font-sans text-white">
              <span style={hoveredItem === list.id ? underlineStyle : {}}>
                {list.title}
              </span>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default ListAnimate;
