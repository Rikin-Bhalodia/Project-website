import React from "react";
import "../style/home.css";
import "../style/future.css";
import Footer from "../frontpage/footer.js";
import Main from "../component/main.js";
import Logo from "../component/logo.js";

const Building = () => {
  return (
    <>
      <Main />
      <div className="second3">
        <div className="building">
          <div className="building-title">
            <h2>Building the future of homes</h2>
            <p>
              Eliminate manual interactions. Reduce energy footprint. Deploy
              proactive security measures. The future of residential and
              commercial spaces is here.
            </p>
          </div>
        </div>
      </div>

      <div className="building-details">
        <h6>
          What’s a <span> Smart Building? </span>
        </h6>
        <br />
        <br />
        <p>
          Building automation is simply connecting all the functional elements
          (Lights, HVAC, CCTV cameras, etc.) of a residential/commercial
          building to a network, and configuring them to proactively take
          contextually relevant actions. For example, a smart building can sense
          parameters like temperature, humidity, smoke, etc., and automatically
          trigger an alarm. Or, it can sense the presence of an intruder, take
          their picture and notify the security personnel.
          <br />
          <br />
          While home automation is more about active control of functional
          elements in your home, building automation concepts are directed
          towards saving energy, optimizing resources and reducing down-time.
          Our core expertise lies in laying down the technology stack for
          residential/commerical spaces, configuring the hardware, and providing
          active support for the designed use-cases.
          <br />
          <br />
          All building automation solutions offered by DEN-Z are retrofit, which
          means you won’t need to change the existing wiring layout in your
          building to turn it into a smart building. It all happens in the
          background, without you even knowing it’s there. Just like…. magic.
          <br />
          <br />
        </p>
      </div>
      <div className="building-details2">
        <h6>
          Why do you need <span> Smart Building? </span>
        </h6>
        <br />
        <br />
        <p>
          With a smart building, you can elevate the collective lifestyle of
          residents, while saving energy, streamlining workflows and reducing
          operational costs. For instance, think about how much energy you can
          save by intelligently turning on lobbly lights only when a person is
          around. Or think about how much damage you can prevent by getting
          instant alerts in case of emergencies like fire, flood or burglary.
          <br />
          <br />
          The advantages of investing in a smart building infrastructure are
          often realized after prolonged use, which is the reason they are
          adapted by less than 1% of real-estate developers in India. However,
          with residents getting more tech-savvy and technology getting more
          affordable (Moore’s law), we would soon see a multifold increase in
          the adoption of smart building technology in India.
          <br />
        </p>
      </div>
      <Logo />
      <Footer />
    </>
  );
};

export default Building;
