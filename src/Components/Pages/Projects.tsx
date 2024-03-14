import carpic from "../Images/ProjectCar.png";
import mask from "../Images/Maskgroup.png";
import Button from "./Button";
import Btn1 from "../Images/Button.png";
import Btn2 from "../Images/Vector (5).png";
import L1 from "../Images/Client Logos.png";
import L1h from "../Images/L1 (2).png";
import L2 from "../Images/Client Logos-1.png";
import L2h from "../Images/eco-clear.png";
import L3 from "../Images/Client Logos-2.png";
import L3h from "../Images/Property 1=Servpro H.png";
import L4 from "../Images/Client Logos-3.png";
import L4h from "../Images/Property 1=Mesmer H.png";
import L5 from "../Images/Client Logos-4.png";
import L5h from "../Images/Property 1=Sheriff H.png";
import L6 from "../Images/Client Logos-5.png";
import L6h from "../Images/Property 1=Fire H.png";

import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Logos from "./Logos";
interface logoimg {
  id: number;
  logo: string;
  hlogo: string;
  w: string;
  h: string;
}
function Projects() {
  const myValue: string = "View More";
  const myColor: string = "white";
  const logos: logoimg[] = [
    {
      id: 1,
      logo: L1,
      hlogo: L1h,
      w: "110.357px",
      h: "134.068px",
    },
    {
      id: 2,
      logo: L2,
      hlogo: L2h,
      w: "207px",
      h: "61px",
    },
    {
      id: 3,
      logo: L3,
      hlogo: L3h,
      w: "198px",
      h: "43px",
    },
    {
      id: 4,
      logo: L4,
      hlogo: L4h,
      w: "108px",
      h: "81px",
    },
    {
      id: 5,
      logo: L5,
      hlogo: L5h,
      w: "142px",
      h: "136px",
    },
    {
      id: 6,
      logo: L6,
      hlogo: L6h,
      w: "121px",
      h: "134px",
    },
  ];
  // const customPrevArrow = (props: any) => (
  //   <div {...props} style={{ display: "none" }}></div>
  // );
  // const customNextArrow = (props: any) => (
  //   <div {...props} style={{ display: "none" }}></div>
  // );

  return (
    <div>
      <div className="md:pl-20">
        <div className="bg-[url('.\Components\Images\Projectsbglogo.png')] w-fit mx-2  bg-repeat">
          <div className="font-peligro-stencil text-white text-[40px] flex justify-center text-center pt-28">
            Featured Projects & Clients
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-20">
        <div className="relative ">
          <img src={mask} alt="" className="w-[100%] h-[400px] object-cover" />
          <div className="absolute lg:top-20  md:top-16 xs:top-14 left-0 w-full h-full ">
            <Slide
              slidesToScroll={1}
              slidesToShow={1}
              indicators={true}
              autoplay={false}
              // prevArrow={customPrevArrow}
              // nextArrow={customNextArrow}
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
              <div className="">
                <div className=" lg:w-[90%] xsm:w-[90%] xs:w-[100%] justify-center items-center flex xsm:flex-row xs:flex-col gap-2">
                  <div className="object-cover flex justify-center ">
                    <img
                      src={carpic}
                      alt=""
                      className=" lg:w-[80%] xsm:w-[69%] xs:w-[40%] img-fluid  "
                    />
                  </div>
                  <div className="flex flex-col  text-justify w-[100%] justify-center">
                    <div className="lg:text-[30px] xmd:text-[20px] xsm:text-[20px]  font-normal font-peligro-stencil flex xsm:justify-start xs:justify-center ">
                      <p> Project name</p>
                    </div>
                    <div className="lg:text-[20px] xmd:text-[14px]  xsm:text-[14px] lg:leading-9 flex flex-wrap xsm:text-start xs:text-center items-center">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Curabitur sit amet urna ut dolor luctus dapibus in id
                        massa. In suscipit lorem at molestie ornare. Sed purus
                        sem, finibus a fermentum id, fringilla at enim.
                      </p>
                    </div>
                    <div className="flex xsm:justify-start xs:justify-center">
                      <Button
                        txt={myValue}
                        Btn1={Btn1}
                        Btn2={Btn2}
                        myColor={myColor}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="">
                <div className=" lg:w-[90%] xsm:w-[90%] sm:w-[100%] justify-center items-center flex xsm:flex-row sm:flex-col gap-2">
                  <div className="object-cover flex justify-center ">
                    <img
                      src={carpic}
                      alt=""
                      className=" lg:w-[80%] xsm:w-[69%] sm:w-[40%] img-fluid  "
                    />
                  </div>
                  <div className="flex flex-col  text-justify w-[100%] justify-center">
                    <div className="lg:text-[30px] xmd:text-[20px] xsm:text-[20px]  font-normal font-peligro-stencil flex xsm:justify-start sm:justify-center ">
                      <p> Project name</p>
                    </div>
                    <div className="lg:text-[20px] xmd:text-[14px]  xsm:text-[14px] lg:leading-9 flex flex-wrap xsm:text-start sm:text-center items-center">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Curabitur sit amet urna ut dolor luctus dapibus in id
                        massa. In suscipit lorem at molestie ornare. Sed purus
                        sem, finibus a fermentum id, fringilla at enim.
                      </p>
                    </div>
                    <div className="flex xsm:justify-start sm:justify-center">
                      <Button
                        txt={myValue}
                        Btn1={Btn1}
                        Btn2={Btn2}
                        myColor={myColor}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="">
                <div className=" lg:w-[90%] xsm:w-[90%] sm:w-[100%] justify-center items-center flex xsm:flex-row sm:flex-col gap-2">
                  <div className="object-cover flex justify-center ">
                    <img
                      src={carpic}
                      alt=""
                      className=" lg:w-[80%] xsm:w-[69%] sm:w-[40%] img-fluid  "
                    />
                  </div>
                  <div className="flex flex-col  text-justify w-[100%] justify-center">
                    <div className="lg:text-[30px] xmd:text-[20px] xsm:text-[20px]  font-normal font-peligro-stencil flex xsm:justify-start sm:justify-center ">
                      <p> Project name</p>
                    </div>
                    <div className="lg:text-[20px] xmd:text-[14px]  xsm:text-[14px] lg:leading-9 flex flex-wrap xsm:text-start sm:text-center items-center">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Curabitur sit amet urna ut dolor luctus dapibus in id
                        massa. In suscipit lorem at molestie ornare. Sed purus
                        sem, finibus a fermentum id, fringilla at enim.
                      </p>
                    </div>
                    <div className="flex xsm:justify-start sm:justify-center">
                      <Button
                        txt={myValue}
                        Btn1={Btn1}
                        Btn2={Btn2}
                        myColor={myColor}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Slide>
          </div>
        </div>
        <div className="flex justify-around items-center my-5">
          {logos.map((logo) => (
            <Logos
              id={logo.id}
              logo={logo.logo}
              logoh={logo.hlogo}
              w={logo.w}
              h={logo.h}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
