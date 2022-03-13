import React, { useState } from "react";
import Footer from "./footer.js";
import { Link } from "react-router-dom";
import "../style/box.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineSchedule } from "react-icons/ai";
import { MdOutlineSettingsRemote } from "react-icons/md";

const Box = () => {
  return (
    <>
      <div className="head">
        <h2>We Help You To Grow</h2>
      </div>
      <div className="box">
        <div className="box-main">
          <div className="box1">
            <MdOutlineSettingsRemote className="font" />
            <h3>On-Off Remotely</h3>
            <p>
              BuildTrack is a leading brand of Smart Automation and Internet of
              Things solutions for ...
            </p>
            <Link to="/on-offremotely">
              <button class="button-57" role="button">
                <span class="text">Details Of</span>
                <span>On-Off Remotely</span>
              </button>
            </Link>
          </div>
          <div className="box2">
            <AiOutlineSchedule className="font" />
            <h3>Scheduling</h3>
            <p>
              BuildTrack is a leading brand of Smart Automation and Internet of
              Things solutions for ...
            </p>
            <Link to="/scheduling">
              <button class="button-57" role="button">
                <span class="text">Details of</span>
                <span>Scheduling in DenZ</span>
              </button>
            </Link>
          </div>
          <div className="box3">
            <AiOutlineHome className="font" />
            <h3>Current Status Of House</h3>
            <p>
              BuildTrack is a leading brand of Smart Automation and Internet of
              Things solutions for ...
            </p>
            <Link to="/currentstatusofhouse">
              <button class="button-57" role="button">
                <span class="text">Details Of</span>
                <span>Current Status Of House</span>
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="head">
        <h2>Future Plans</h2>
      </div>
      <div className="box">
        <div className="box-main">
          <div className="box1">
            <MdOutlineSettingsRemote className="font" />
            <h3>Building</h3>
            <p>
              BuildTrack is a leading brand of Smart Automation and Internet of
              Things solutions for ...
            </p>
            <Link to="/on-offremotely">
              <button class="button-57" role="button">
                <span class="text">Details Of</span>
                <span>On-Off Remotely</span>
              </button>
            </Link>
          </div>
          <div className="box2">
            <AiOutlineSchedule className="font" />
            <h3>Hotel</h3>
            <p>
              BuildTrack is a leading brand of Smart Automation and Internet of
              Things solutions for ...
            </p>
            <Link to="/scheduling">
              <button class="button-57" role="button">
                <span class="text">Details of</span>
                <span>Scheduling in DenZ</span>
              </button>
            </Link>
          </div>
          <div className="box3">
            <AiOutlineHome className="font" />
            <h3>Hospital</h3>
            <p>
              BuildTrack is a leading brand of Smart Automation and Internet of
              Things solutions for ...
            </p>
            <Link to="/currentstatusofhouse">
              <button class="button-57" role="button">
                <span class="text">Details Of</span>
                <span>Current Status Of House</span>
              </button>
            </Link>
          </div>
          <div className="box3">
            <AiOutlineHome className="font" />
            <h3>Industrial</h3>
            <p>
              BuildTrack is a leading brand of Smart Automation and Internet of
              Things solutions for ...
            </p>
            <Link to="/currentstatusofhouse">
              <button class="button-57" role="button">
                <span class="text">Details Of</span>
                <span>Current Status Of House</span>
              </button>
            </Link>
          </div>
          <div className="box3">
            <AiOutlineHome className="font" />
            <h3>Office</h3>
            <p>
              BuildTrack is a leading brand of Smart Automation and Internet of
              Things solutions for ...
            </p>
            <Link to="/currentstatusofhouse">
              <button class="button-57" role="button">
                <span class="text">Details Of</span>
                <span>Current Status Of House</span>
              </button>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};
export default Box;
