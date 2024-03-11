import Button from "./Button";
import Btn1 from "../Images/Vector (4).png";
import Btn2 from "../Images/Vector (5).png";

function ContactUs() {
  const myValue: string = "Submit";
  const myColor: string = "black";
  return (
    <>
      <div className="w-auto ">
        <div className="bg-[url('.\Components\Images\ContactUs.png')] w-fit bg-no-repeat mt-10 mx-6">
          <div className="text-[40px] text-white pt-10 font-peligro-stencil">
            Elevating Businesses Through our art and creativity
          </div>
        </div>
        <div className="xsm:grid xsm:grid-cols-12 gap-10 sm:flex sm:flex-col mx-6 pt-10 justify-content-center xms:w-full">
          <div className="xlg:col-span-5 sm:col-span-12 w-[100%] items-center flex flex-col gap-6 ">
            <div className="xsm:grid xsm:grid-cols-2 w-[99%] sm:flex sm:flex-col  gap-4">
              <div className="xms:text-[30px] sm:text-[20px] w-fit text-white font-peligro-stencil  col-span-1 xsm:translate-x-20">
                Mike Clark
              </div>
              <div className="font-sans text-[20px] text-white xsm:ml-20 font-light flex items-center col-span-1">
                Owner/Director
              </div>
            </div>
            <div className="xsm:grid xsm:grid-cols-2 w-[99%] sm:flex sm:flex-col  gap-4 ">
              <div className="xms:text-[30px] sm:text-[20px] text-white font-peligro-stencil w-fit xsm:translate-x-20">
                Shelly Clark
              </div>
              <div className="font-sans text-[20px] text-white xsm:ml-20 font-light items-center flex">
                Owner/Sales
              </div>
            </div>
            <div className="xsm:grid xsm:grid-cols-2 w-[99%] sm:flex sm:flex-col  gap-4">
              <div className="xms:text-[30px] sm:text-[20px] text-white font-peligro-stencil w-fit xsm:translate-x-20">
                Office Info
              </div>
              <div className="font-sans text-[20px] text-white w-auto xsm:ml-20 flex flex-col gap-4 font-light ">
                <div className="flex gap-6">
                  <div>Mon - Fri</div>
                  <div>9 AM - 5 PM</div>
                </div>
                <div className="flex gap-6">
                  <div>Saturday</div>
                  <div>Closed</div>
                </div>
                <div className="flex gap-6">
                  <div>Sunday</div>
                  <div>Closed</div>
                </div>
                <div>765 Ash St #100, Canton, GA 30114</div>
                <div>770-345-7448</div>
              </div>
            </div>
          </div>
          <div className="xlg:col-span-7 sm:col-span-12 flex flex-col gap-4 font-sans text-[24px] w-auto">
            <div className="xsm:grid xsm:grid-cols-2  font-light sm:flex sm:flex-col gap-4">
              <div className="w-full sm:w-auto">
                <div className="bg-[#D9D9D9] border rounded-[10px] opacity-[0.3] placeholder-[#fff] placeholder-opacity-100">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="bg-[#D9D9D9] border rounded-[10px] w-full sm:w-[100%] h-[70px] pl-4 placeholder-[#fff] placeholder-opacity-100"
                  />
                </div>
              </div>
              <div className="w-full sm:w-auto">
                <div className="bg-[#D9D9D9] rounded-[10px] opacity-[0.3]">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="bg-[#D9D9D9] border rounded-[10px] text-white w-full sm:w-[100%] h-[70px] pl-4 placeholder-[#fff] placeholder-opacity-100"
                  />
                </div>
              </div>
            </div>
            <div className="w-full sm:w-auto">
              <div className="bg-[#D9D9D9] rounded-[10px] opacity-[0.3] font-light">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="bg-[#D9D9D9] border rounded-[10px] w-full sm:w-[100%] h-[70px] pl-4 placeholder-[#fff] placeholder-opacity-100"
                />
              </div>
            </div>
            <div className="w-full sm:w-auto">
              <div className="bg-[#D9D9D9] rounded-[10px] opacity-[0.3] placeholder-[#fff] placeholder-opacity-100 font-light">
                <textarea
                  name="message"
                  id="message"
                  placeholder="Enter Your Message"
                  className="bg-[#D9D9D9] border rounded-[10px] w-full sm:w-[100%] h-[150px] pl-4 pt-4 placeholder-[#fff] placeholder-opacity-100"
                ></textarea>
              </div>
            </div>
            <div className="w-full sm:w-auto">
              <Button txt={myValue} Btn1={Btn1} Btn2={Btn2} myColor={myColor} />
            </div>
          </div>
        </div>
        <div className="relative bg-[url('.\Components\Images\Map.png')] bg-cover bg-no-repeat h-[50vh] top-[90px] z-1"></div>
      </div>
    </>
  );
}

export default ContactUs;
