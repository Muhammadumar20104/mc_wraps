import Carlogo from "../Images/image.png";
import LogoSimple from "../Images/Vector (6).png";
import Btn1 from "../Images/Vector (4).png";
import Btn2 from "../Images/Vector (5).png";

import Button from "./Button";
import WorkwithUs from "./WorkwithUs";
import Projects from "./Projects";
import Testimonial from "./Testimonial";

function Home() {
  const myValue: string = "Get A Quote";
  const myColor: string = "black";
  return (
    <>
      <div className="relative flex lg:flex-row xs:flex-col sm:px-2 md:pl-20 lg:gap-8 xmd:gap-14 sm:gap-16 pt-44">
        <div className="h-fit w-fit absolute top-16 left-[40%] hidden md:block">
          <img src={LogoSimple} alt="" />
        </div>
        <div className="w-auto  lg:w-[690px] flex-col flex xs:flex-col  gap-4">
          <div className="font-peligro-stencil text-[50px] xsm:text-[60px] text-white xsm:text-start sm:text-center">
            Custom Vehicle Wraps & Signs
          </div>
          <div className="font-sans text-white sm:text-justify">
            We specialize in unique and innovative designs for every type of
            business. Our office is ready to help you with any size project that
            you may have, from the small and simple to the large and intricately
            detailed, we can do it all!
          </div>
          <div className="flex xsm:justify-start sm:justify-center">
            <Button txt={myValue} Btn1={Btn1} Btn2={Btn2} myColor={myColor} />
          </div>
        </div>
        <div className="xl:-mt-28 lg:mt-0  lg:w-[50%]">
          <img src={Carlogo} alt="" className="" />
        </div>
      </div>
      <div>
        <WorkwithUs/>
      </div>
      <div>
        <Projects/>
      </div>
      <div>
        <Testimonial/>
      </div>
    
    </>
  );
}

export default Home;
