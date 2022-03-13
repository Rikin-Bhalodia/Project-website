import React from "react";
import "../style/home.css";
import Footer from "../frontpage/footer.js";
import Main from "../component/main.js";
import "../style/future.css";
import Logo from "../component/logo.js";

const Hotel = () => {
  return (
    <>
      <Main />
      <div className="second3">

      <div className="hotel">
        <div className="hotel-title">
          <h2>Delight your customers.</h2>
          <p>
            Create mood lighting. Save energy with intelligent sensing. Unlock
            doors and open curtains from a touch-screen interface. Welcome to
            the future of hotels.
          </p>
        </div>
      </div>
      </div>
      <div className="hotel-details">
        <h6>
          What’s Hotel <span> Automation?</span>
        </h6>

        <p>
          Hotel automation is connecting all the functional elements, like,
          lighting, HVAC, multimedia, security, curtains etc. to a network and
          accessing it from your smartphone, tablet or computer device. Our
          retrofit automation concepts fit easily behind your existing
          electrical sockets, and require no internal wiring. From controlling
          lights in the comfort of your bed to automating the curtains at
          sunset, we help hotels deliver futuristic customer experiences. All
          our concepts and use-cases come backed by premium brands (Philips,
          Zipato, Fibaro, Nest, Amazon, etc.), and we offer lifetime customer
          support to make sure you have a hassle-free automation experience.{" "}
        </p>
      </div>

      <Logo />
      <Footer />
    </>
  );
};
export default Hotel;
