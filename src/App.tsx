import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import bgtexture from "./Components/Images/Vector (6).png";
import "./App.css";
import Navbar from "./Components/Pages/Navbar";
import Button from "./Components/Pages/Button";
import Home from "./Components/Pages/Home";
import WorkwithUs from "./Components/Pages/WorkwithUs";
import Projects from "./Components/Pages/Projects";
import Testimonial from "./Components/Pages/Testimonial";
import About from "./Components/Pages/About";
import Mans from "./Components/Pages/Mans";
import Slider from "./Components/Pages/Slider";
import ImageSlider from "./Components/Pages/ImageSlider";
import Footer from "./Components/Pages/Footer";
import ContactUs from "./Components/Pages/ContactUs";
import ListAnimate from "./Components/Pages/ListAnimate";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Components/Pages/Layout";
import Service from "./Components/Pages/Service";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div
        className="  h-auto bg-[url('./Components/Images/bgtexture1.png')]"
        style={
          {
            // backgroundImage: `url(${bgtexture})`,
          }
        }
      >
        <div className="h-auto  bg-slate-900/80 backdrop-brightness-50  ">
          <Router>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route path="" element={<Home />} />
                <Route path="About" element={<About />} />
                <Route path="Service" element={<Service />} />
                <Route path="Contact" element={<ContactUs />} />

                {/* <Route path="Service" element={<Service />} /> */}
              </Route>
            </Routes>
          </Router>
          {/* <div>
            <Navbar />
          </div> */}
          {/* <div>
            <ListAnimate/>
          </div> */}
          {/* <div>
            <Mans/>
          </div> */}
          {/* <div>
            <ImageSlider />
          </div> */}
          {/* <Button/> */}
          {/* <div>
            <Home />
          </div> */}
          {/* <div>
            <ContactUs />
          </div> */}
          {/* <div>
            <About />
          </div> */}
          {/* <div>
            <Footer />
          </div> */}
          {/* <div>
            <WorkwithUs />
          </div>
          <div>
            <Projects />
          </div>
          <div>
            <Testimonial/>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default App;
