import React from "react";
import "../style/footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <div className="btn">
        <svg width="100%" height="100%">
          <defs>
            <pattern
              id="polka-dots"
              x="0"
              y="0"
              width="50"
              height="50"
              patternUnits="userSpaceOnUse"
            ></pattern>
            <style>
              @import url("https://fonts.googleapis.com/css?
              family=Lora:400,400i,700,700i");
            </style>
          </defs>

          <rect x="0" y="0" width="100%" height="100%" fill="url(#polka-dots)">
            {" "}
          </rect>

          <text x="50%" y="60%" text-anchor="middle">
            Contact Us
          </text>
        </svg>
      </div>

      <div className="footer">
        <div className="part1">
          <h4>
            <Link to="/">Den-Z Automation</Link>
          </h4>
          <br />

          <h6>
            <Link to="/aboutus">About Us</Link>
          </h6>
          <h6>
            <Link to="/contactus">Contact Us</Link>
          </h6>
        </div>
        <div className="part2">
          <h4>
            <Link to="/automate">Automate</Link>
          </h4>
          <br />

          <h6>
            <Link to="/home">Home</Link>
          </h6>

          <h4>
            <Link to="/packages">Packages</Link>
          </h4>
        </div>
        <div className="part3">
          <h4>
            <Link to="/service">Service</Link>
          </h4>
          <br />

          <h6>
            {" "}
            <Link to="/on-off remotely">On-Off Remotely</Link>{" "}
          </h6>
          <h6>
            {" "}
            <Link to="/scheduling">Scheduling</Link>
          </h6>
          <h6>
            {" "}
            <Link to="/current status of house">Current Status Of House</Link>
          </h6>
        </div>

        <div className="part4">
          <h4>
            <Link to="/future plans">Future Plans</Link>
          </h4>
          <br />

          <h6>
            <Link to="/building">Building</Link>
          </h6>
          <h6>
            <Link to="/office">Office</Link>
          </h6>
          <h6>
            <Link to="/hotel">Hotel</Link>
          </h6>
          <h6>
            <Link to="/hospital">Hospital</Link>
          </h6>
          <h6>
            <Link to="/industrial">Industrial</Link>
          </h6>
        </div>
      </div>

      <div className="endpart">
        <div className="copy">Copyright © 2021 by DEN-Z Automation</div>
        <div className="copy2"></div>
      </div>
    </>
  );
};

export default Footer;
