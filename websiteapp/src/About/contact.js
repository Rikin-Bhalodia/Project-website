import React from "react";
import Main from "../component/main.js";
import "../style/home.css";
import Footer from "../frontpage/footer.js";
import "../style/contact.css";

const Contact = () => {
  return (
    <>
      <Main />
      <div className="second3">

      <div className="contact-page">
        <h3>Contact Us</h3>
        <p>
          Just send us your questions or concerns by sending a proposal and we
          will give you the help you need.
        </p>
        <button>INQUIRY NOW</button>
      </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
