import "./App.css";
import Home from "./Components/Pages/Home";
import About from "./Components/Pages/About";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Components/Pages/Layout";
import Service from "./Components/Pages/Service";
import ContactUs from "./Components/Pages/ContactUs";
import Gallery from "./Components/Pages/Gallery";
function App() {

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
