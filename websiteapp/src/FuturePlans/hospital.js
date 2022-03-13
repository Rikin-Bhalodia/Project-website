import React from "react";
import Main from "../component/main.js";
import "../style/home.css";
import "../style/industrial.css";
import Footer from "../frontpage/footer.js";

const Hospital = () => {
  return (
    <>
      <Main />
      <div className="second3">

      <div className="hospital">
        <div className="hospital-title">
          <h2>Build the hospital of the future.</h2>
        </div>
      </div>
      </div>
      <div className="hospital-details">
        <h6>
          What’s Hospital <span> Automation?</span>
        </h6>

        <p>
          Hospital automation is a revolutionary technology that lets you
          automate all the functional elements in your hospital (lighting, HVAC,
          security, etc.) from your smartphone. Using our wireless automation
          concepts, hospitals can deliver extra-ordinary healthcare facilities
          to patients and their loved ones, while also improving scalability,
          trackability and profitability of their organization. While legacy
          automation providers offer limited smartphone integration, we support
          multiple touchpoints, like voice and gesture recognition to provide
          unmatched convenience and delight to our customers. Patients can now
          turn on room lights or call their loved ones by simply talking to an
          intelligent voice assistant or moving their hands. The best part? Our
          automation products are 100% wireless, retrofit devices, which means
          they can be plugged behind your existing switches and plugs at zero
          demolition or internal wiring costs.{" "}
        </p>
      </div>
      <Footer />
    </>
  );
};
export default Hospital;
