import { useState } from "react";
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
      logo: Van,
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
  // const logoStyle = {
  //   transition: "width 0.6s ease-in-out", // Adjust transition properties for logo width
  //   width: hoveredItem ? "10%" : "0%", // Initially hide the logo
  // };

  // const underlineStyle = {
  //   transition: "background-size 0.6s ease-in-out", // Adjust transition properties for underline
  //   borderBottom: "0", // Remove default border
  //   backgroundImage: "linear-gradient(to right, #E60B09, #E9D022)",
  //   backgroundSize: hoveredItem ? "100% 2px" : "0% 2px", // Initially hide the underline
  //   backgroundPosition: "0 100%",
  //   backgroundRepeat: "no-repeat",
  // };

  // const textStyle = {
  //   transition: "color 0.6s ease-in-out", // Adjust transition properties for text color
  //   fontSize: "24px",
  //   fontFamily: "sans-serif",
  //   color: "white",
  // };

  return (
    <>
      {lists.map((list) => (
        <div className="xmd:w-[100%] sm:w-[70%] " key={list.id}>
          <div
            className="flex items-center"
            onMouseEnter={() => handleMouseEnter(list.id)}
            onMouseLeave={handleMouseLeave}
          >
            <div
              style={{
                transition: "width 0.6s ease-in-out",
                width: hoveredItem === list.id ? "15%" : "0%",
              }}
            >
              <img src={list.logo} alt="" className="w-fit h-auto mr-4" />
            </div>
            <div
              className="text-[24px] font-sans"
              style={{
                fontSize: "24px",
                fontFamily: "sans-serif",
                color: "white",
              }}
            >
              <span
                style={{
                  borderBottom: "0",
                  backgroundImage:
                    "linear-gradient(to right, #E60B09, #E9D022)",
                  backgroundSize:
                    hoveredItem === list.id ? "100% 2px" : "0% 2px",
                  backgroundPosition: "0 100%",
                  backgroundRepeat: "no-repeat",
                  transition: "background-size 0.6s ease-in-out",
                }}
              >
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
