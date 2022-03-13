import React from "react";
// import Slider from "../frontpage/images.js";

import logo1 from "../attribute/download_ccexpress.png";
import Box from "../frontpage/box.js";
import "../style/home.css";
<link
  href="https://fonts.googleapis.com/css?family=Arvo&display=swap"
  rel="stylesheet"
/>;

const About = () => {
  return (
    <>
     
          {/* <Slider /> */}
     
      <div className="picture">
        <div className="first">
          <h2>About Den-Z</h2>
          <p>
            DTI Automation Pvt Ltd was founded in 2011 with a vision to emerge
            as leading ntegration <br />
            research based automation solution company. DTI Automation has
            established excellence <br />
            in delivering quality and cost-effective solution in the world of
            automation by enhanced <br />
            efforts through unmatched teamwork.
          </p>
          <p>
            The ideology behind our progress is simple we believe in providing
            <br /> unparalleled customer service.
          </p>
        </div>
        <div className="third">
          <img src={logo1} alt="error" />
        </div>
      </div>

      <div className="conatiner1">
        <Box />
      </div>
    </>
  );
};
export default About;
