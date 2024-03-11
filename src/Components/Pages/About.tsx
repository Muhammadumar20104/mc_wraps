import frame1 from "../Images/Group (1).png";
import mask from "../Images/Maskgroup.png";
import man from "../Images/Man.png";
import comma from "../Images/Comma.png";
import man1 from "../Images/Man1.png";
import manh1 from "../Images/Manh1.png";
import man2 from "../Images/Man2.png";
import manh2 from "../Images/Manh2.png";
import man3 from "../Images/Man3.png";
import manh3 from "../Images/Manh3.png";
import Mans from "./Mans";
import Button from "./Button";
import Btn1 from "../Images/Vector (4).png";
import Btn2 from "../Images/Vector (5).png";

interface Manimg {
  id: number;
  man: string;
  manh: string;
}
function About() {
  const myValue: string = "Get Started";
  const myColor: string = "black";
  const Manslogo: Manimg[] = [
    {
      id: 1,
      man: man1,
      manh: manh1,
    },
    {
      id: 2,
      man: man2,
      manh: manh2,
    },
    {
      id: 3,
      man: man3,
      manh: manh3,
    },
  ];
  return (
    <>
      <div className="bg-[url('.\Components\Images\Aboutbg.png')] bg-no-repeat">
        <div className="xsm:text-[40px] sm:text-[30px] text-white xsm:text-start sm:text-center font-peligro-stencil pt-28">
          Atlanta Metro’s Premier Vehicle Wrap Specialist
        </div>
      </div>
      <div>
        <img src={frame1} alt="" />
      </div>
      <div className="bg-[url('.\Components\Images\MTT.png')] bg-no-repeat px-2">
        <div className="text-[40px] text-white  xsm:text-start sm:text-center font-peligro-stencil pt-28">
          Meet The Team
        </div>
        <div className="font-sans text-[24px]  xsm:text-start sm:text-justify font-normal text-white">
          MC Wraps & Signs is a business that understands that the customer
          comes first and takes the time to listen to their needs and goals.
          With over a decade in operation, Mike and his team have the
          experience, talent and dedication to ensure you get the most out of
          your experience.
        </div>
      </div>
      <div>
        <div className="relative flex ">
          <img src={mask} alt="" className="w-[100%] h-[400px] object-cover" />
          <div className="absolute top-10  flex   md:gap-10 sm:gap-4 xlg:top-10">
            <div>
              <img src={man} alt="" className="w-[100%] h-[100%] object-fill" />
            </div>
            <div className="flex flex-col justify-center md:gap-10 sm:gap-2  ">
              <div className="flex gap-4 items-center ">
                <div className="xsm:text-[30px] sm:text-[20px] font-peligro-stencil text-black">
                  Mike Clark
                </div>
                <div className=" text-center ">Owner/Director</div>
              </div>
              <div className="xsm:text-[20px] sm:text-[14px] leading-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur sit amet urna ut dolor luctus dapibus in id massa. In
                suscipit lorem at molestie ornare.
              </div>
              <div className="font-sans lg:text-[20px] sm:text-[14px] xmd:text-[16px]  lg:leading-8 xmd:leading-2 md:w-[100%] sm:w-[100%] flex flex-col justify-center items-center text-black relative">
                <img
                  src={comma}
                  alt=""
                  className="w-fit h-fit flex flex-col top-10 z-10 right-20  absolute "
                />
                I set the bar high for myself and my employees as well. We will
                do whatever is necessary to make your vision become something
                surreal.
                <img
                  src={comma}
                  alt=""
                  className="w-fit h-fit flex flex-col bottom-10 left-0  absolute "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-evenly md:flex-row sm:flex-col gap-4 items-center mt-8 flex-wrap">
        {Manslogo.map((man) => (
          <Mans id={man.id} man={man.man} manh={man.manh} />
        ))}
      </div>
      <div className="bg-[url('.\Components\Images\IYC.png')] bg-no-repeat px-4 flex justify-between">
        <div className="pt-28  flex lg:flex-row sm:flex-col gap-8 justify-between">
          <div className="lg:w-[85%] sm:w-full flex flex-col gap-8 justify-center ">
            <div className="text-[40px]  xsm:text-start sm:text-center font-peligro-stencil text-white ">
              It’s Time to Improve Your Company Image 
            </div>
            <div className="text-[24px]  xsm:text-start sm:text-justify font-sans text-white leading-9">
              Here at MC Wraps & Signs we offer everything you need for your
              business and personal needs. Mike and his team take pride in what
              they do because they want to make your product stand out from all
              others. Let us shape and design your thoughts into something that
              will be remembered.
            </div>
          </div>
          <div className="flex justify-center items-center ">
            <Button txt={myValue} Btn1={Btn1} Btn2={Btn2} myColor={myColor} />
          </div>
        </div>
      </div>
    </>
  );
}

export default About;

{
  /* <div className="mb-10 relative">
        <img
          src={frame2}
          alt=""
          className="object-cover   z-10 w-[100%] "
        />
        <div className=" absolute top-0 flex justify-around w-auto pt-8">
          <div>
            <img
              src={image1}
              alt=""
              className="xxl:w-[400px] lg:w-[350px]  h-[390px] img-fluid object-fill"
            />
          </div>
          <div>
            <img
              src={image2}
              alt=""
              className="xxl:w-[400px] lg:w-[350px] h-[390px] img-fluid object-fill"
            />
          </div>
          <div>
            <img
              src={image3}
              alt=""
              className="xxl:w-[400px] lg:w-[350px] h-[390px] img-fluid object-fill"
            />
          </div>
        </div> */
}
