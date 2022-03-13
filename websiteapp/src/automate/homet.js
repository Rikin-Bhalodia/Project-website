import React from "react";
import Footer from "../frontpage/footer.js";
import Main from "../component/main.js";
import logo from "../attribute/circuit.jpeg";
// import "../style/home.css";
import "../style/homet.css";
// import "../style/future.css";

const Homet = () => {
  return (
    <>
      <Main />

      <div className="home-automation">
        <div className="second2">
          <div className="automation-concept">
            <div className="h22">
              <h2> Home Automation Concept</h2>
            </div>
            <br />

            <div className="pp">
              <p>
                Wondering where to get started? Browse through our home
                automation concepts to get a feel of smart home experience.
              </p>
            </div>
          </div>
        </div>
        <div className="detail">
          <div className="circuit">
            <img src={logo} alt="error" />
          </div>
          <h4> Home Automation Concept</h4>
          <p className="home-detail">
            Home automation or domotics is building automation for a home,
            called a smart home or smart house. A home automation system will
            monitor and/or control home attributes such as lighting, climate,
            entertainment systems, and appliances. It may also include home
            security such as access control and alarm systems. When connected
            with the Internet, home devices are an important constituent of the
            Internet of Things ("IoT").
            <br />
            <br />
            A home automation system typically connects controlled devices to a
            central smart home hub (sometimes called a "gateway"). The user
            interface for control of the system uses either wall-mounted
            terminals, tablet or desktop computers, a mobile phone application,
            or a Web interface that may also be accessible off-site through the
            Internet.
            <br />
            <br />
            While there are many competing vendors, there are increasing efforts
            towards open source systems. However, there are issues with the
            current state of home automation including a lack of standardized
            security measures and deprecation of older devices without backwards
            compatibility.
            <br />
            <br />
            Home automation has high potential for sharing data between family
            members or trusted individuals for personal security and could lead
            to energy saving measures with a positive environmental impact in
            the future.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Homet;
