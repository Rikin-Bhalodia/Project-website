import React from "react";
import "../style/home.css";
import Footer from "../frontpage/footer.js";
import Main from "../component/main.js";
import "../style/industrial.css";


const Industrial = () => {
  return (
    <>
      <Main />
      <div className="second3">

      <div className="industrial">
        <div className="industrial-title">
          <h2>The Fourth Industrial Revolution has begun.</h2>
        </div>
      </div>
      </div>
      <div className="industrial-details">
        <h6>
          What’s Industrial <span> Automation?</span>
        </h6>

        <p>
          When Industrial revolution began in 1760, it transformed the world,
          shifting the focus from skilled man-power to special-purpose
          machinery. We could now manufacture goods more quickly, reliably and
          cost-efficiently. It paved way for thousands of new industries that
          leveraged the power of machines to produce goods at scale. While
          machines became good at eliminating repetitive jobs, industries still
          needed highly-qualified professionals, who could control, monitor and
          maintain the complicated manufacturing workflows. Industrial
          automation aims at bringing complete autonomy to the manufacturing
          sector, allowing businesses to take decisions based on data, rather
          than intuition. Using M2M (machine-to-machine) communication and
          network of intelligent sensors, industries can now create
          fully-automated processes that can take contextual decisions, with
          minimal human intervention. It’s estimated that industrial automation
          would massively reduce the operational costs of businesses, while
          improving the cumulative throughput and turnaround time.
        </p>
      </div>
      <Footer />
    </>
  );
};
export default Industrial;
