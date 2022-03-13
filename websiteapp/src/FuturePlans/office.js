import React from "react";
import "../style/home.css";
import Footer from "../frontpage/footer.js";
import "../style/future.css";
import Main from "../component/main.js";
import Logo from "../component/logo.js";

const Office = () => {
  return (
    <>
      <Main />
      <div className="second3">

      <div className="office">
        <div className="office-title">
          <h2>Build the geekiest workplace.</h2>
          <p>
            Exclusively for startups and businesses, looking to make a bold
            statement.
          </p>
        </div>
      </div>
      </div>
      <div className="office-details">
        <h6>
          What’s Office <span> Automation?</span>
        </h6>

        <p>
          Office automation is connecting all the functional elements in your
          workplace (lights, fans, AC, projector screens, etc.,) to a network
          and putting them to work for you. For instance, you can automatically
          turn down the passage lights when no one’s around, or even configure
          complex scenarios for different events like meetings, presentations,
          birthday celebrations, client visit, etc. The best part? Our retrofit,
          wireless automation infrastructure require no internal wiring or
          demolition, and can be easily setup in an existing office, with
          minimum hassle.
        </p>
      </div>

      <Logo />
      <Footer />
    </>
  );
};
export default Office;
