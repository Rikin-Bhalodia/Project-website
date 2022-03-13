import React from "react";
import logo from "../attribute/Untitled design.png";
import "../style/home.css";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <>
      <div className="main">
        <div className="container">
          <Link to="/">
            <img src={logo} alt="error" height="100rem" width="100rem" />
          </Link>
          <Link to="/">
            <link
              href="https://fonts.googleapis.com/css?family=Lato"
              rel="stylesheet"
            />
            <div class="patterns">
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

                <rect
                  x="0"
                  y="0"
                  width="100%"
                  height="100%"
                  fill="url(#polka-dots)"
                >
                  {" "}
                </rect>

                <text x="50%" y="60%" text-anchor="middle">
                  DenZ Automation
                </text>
              </svg>
            </div>
          </Link>
        </div>

        <link
          href="https://fonts.googleapis.com/css?family=Arvo&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <div className="main1">
          <nav role="navigation" className="primary-navigation">
            <ul>
              <li>
                <Link to="/aboutus">About Us</Link>
              </li>
              <li>
                <Link to="/">Automate</Link>
                <i className="fa fa-caret-down"></i>
                <ul className="dropdown">
                  <li>
                    <Link to="/home">Home</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/">Service</Link>
                <i className="fa fa-caret-down"></i>
                <ul className="dropdown">
                  <li>
                    <Link to="/on-offremotely">
                      On-Off <br /> Remotely
                    </Link>
                  </li>
                  <li>
                    <Link to="/scheduling">Scheduling</Link>
                  </li>
                  <li>
                    <Link to="/currentstatusofhouse">
                      Current Status <br /> Of House
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/packages">Packages</Link>
              </li>
              <li>
                <Link to="/">Future Plans</Link>
                <i className="fa fa-caret-down"></i>
                <ul className="dropdown">
                  <li>
                    <Link to="/building">Building</Link>
                  </li>
                  <li>
                    <Link to="/office">Office</Link>
                  </li>
                  <li>
                    <Link to="/hotel">Hotel</Link>
                  </li>
                  <li>
                    <Link to="/hospital">Hospital</Link>
                  </li>
                  <li>
                    <Link to="/industrial">Industrial</Link>
                  </li>
                </ul>
              </li>

              <li>
                <Link to="/contactus">Contact Us</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};
export default Main;
