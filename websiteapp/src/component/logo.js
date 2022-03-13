import React from "react";
import "../style/home.css";
import "../style/future.css";
import "../style/logo.css";
import { FaRegLightbulb } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";
import { AiOutlineCamera } from "react-icons/ai";
import { SiReacttable } from "react-icons/si";
import { GiCheckedShield } from "react-icons/gi";
import { BsBuilding } from "react-icons/bs";
import { BsFillLightningChargeFill } from "react-icons/bs";
import { FiAlertTriangle } from "react-icons/fi";
const Logo = () => {
  return (
    <>
      <div className="oconcept">
        <div className="pconcept">
          <div className="individual1">
            <div className="bulb">
              <FaRegLightbulb className="bulbq" />
            </div>
            <h1>
              Smart <br /> Lighting
            </h1>
          </div>
          <div className="individual1">
            <div className="youtube">
              <BsYoutube className="youtubeq" />
            </div>
            <h1>
              Intelligent <br /> Scenes
            </h1>
          </div>

          <div className="individual1">
            <div className="camera">
              <AiOutlineCamera className="cameraq" />
            </div>
            <h1>
              Proactive <br /> Surveillance
            </h1>
          </div>

          <div className="individual1">
            <div className="star">
              <SiReacttable className="starq" />
            </div>
            <h1>
              Climate <br /> Control
            </h1>
          </div>
        </div>

        <div className="ppconcept">
          <div className="individual1">
            <div className="shield">
              <GiCheckedShield className="shieldq" />
            </div>
            <h1>
              Access <br /> Control
            </h1>
          </div>
          <div className="individual1">
            <div className="sbuilding">
              <BsBuilding className="sbuildingq" />
            </div>
            <h1>
              Water <br /> Management
            </h1>
          </div>
          <div className="individual1">
            <div className="energy">
              <BsFillLightningChargeFill className="energyq" />
            </div>
            <h1>
              Energy <br /> Efficiency
            </h1>
          </div>
          <div className="individual1">
            <div className="danger">
              <FiAlertTriangle className="dangerq" />
            </div>
            <h1>
              Fire/Flood <br /> Protection
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Logo;
