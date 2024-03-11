import React from "react";
import image1 from "../Images/image1.png";
import image2 from "../Images/image2.png";
import image3 from "../Images/image3.png";
import image4 from "../Images/image4.png";
import image5 from "../Images/image5.png";
import image6 from "../Images/image6.png";
import image7 from "../Images/image7.png";
import image8 from "../Images/image8.png";
import hicon from "../Images/hicon.png";
import hicon1 from "../Images/hicon1.png";
import hicon2 from "../Images/hicon2.png";
import hicon3 from "../Images/hicon3.png";
import hicon4 from "../Images/hicon4.png";
import hicon5 from "../Images/hicon5.png";
import hicon6 from "../Images/hicon6.png";
import icon from "../Images/icon.png";
import icon1 from "../Images/icon (1).png";
import icon2 from "../Images/icon (2).png";
import icon3 from "../Images/icon (3).png";
import icon4 from "../Images/icon (4).png";
import icon5 from "../Images/icon (5).png";
import frame from "../Images/ServiceBox.png";
import frame2 from "../Images/frame2.png";
import HoverCard from "./HoverCard";

interface Car {
  id: number;
  title: string;
  logo: string;
  image: string;
  frame: string;
  hframe: string;
  hlogo:string;
}
function WorkwithUs() {
  const cars: Car[] = [
    {
      hframe: frame2,
      hlogo:hicon,
      frame: frame,
      id: 1,
      title: "Commercial Fleet Wraps",
      logo: icon,
      image: image1,
    },
    {
      hframe: frame2,
      hlogo:hicon1,
      frame: frame,
      id: 2,
      title: "Car & Truck Wraps",
      logo: icon1,
      image: image2,
    },
    {
      hframe: frame2,
      hlogo:hicon2,
      frame: frame,
      id: 3,
      title: "Boat Wraps",
      logo: icon2,
      image: image3,
    },
    {
      hframe: frame2,
      hlogo:hicon3,
      frame: frame,
      id: 4,
      title: "Partial Wraps & Graphics",
      logo: icon3,
      image: image4,
    },
    {
      hframe: frame2,
      hlogo:hicon4,
      frame: frame,
      id: 5,
      title: "Car Magnets",
      logo: icon4,
      image: image5,
    },
    {
      hframe: frame2,
      hlogo:hicon5,
      frame: frame,
      id: 6,
      title: "Print Graphics & Stickers",
      logo: icon5,
      image: image6,
    },
    {
      hframe: frame2,
      hlogo:hicon1,
      frame: frame,
      id: 7,
      title: "Banners & Signs",
      logo: icon1,
      image: image7,
    },
    {
      hframe: frame2,
      hlogo:hicon6,
      frame: frame,
      id: 8,
      title: "Graphic Design & Logos",
      logo: icon2,
      image: image8,
    },
    // Add more cars as needed
  ];

  return (
    <div className="md:pl-20 sm:px-2 flex flex-col gap-5">
      <div className="">
        <div className="bg-[url('./Components/Images/WorkWithUs.png')] bg-no-repeat ">
          <div className="text-[40px] font-peligro-stencil text-white  mt-14 pt-16">
            Work With Us
          </div>
        </div>
        <div className="text-[24px] font-sans line-clamp-[40px] text-white">
          We are located in Canton, Georgia, but we have served clients from
          Atlanta to San Diego and everywhere in between.
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 justify-items-center">
        {cars.map((car) => (
          <HoverCard id={car.id} frame={car.frame} title={car.title} logo={car.logo} image={car.image} hframe={car.hframe} hlogo={car.hlogo} />
        ))}
      </div>
    </div>
  );
}

export default WorkwithUs;
