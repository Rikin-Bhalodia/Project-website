import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./frontpage/home.js";
import Homet from "./automate/homet.js";
import Building from "./FuturePlans/building.js";
import Office from "./FuturePlans/office.js";
import Hotel from "./FuturePlans/hotel.js";
import Hospital from "./FuturePlans/hospital.js";
import Industrial from "./FuturePlans/industrial.js";
import Onoffremote from "./servicepage/onoffremote.js";
import Currentstatus from "./servicepage/currentstatus.js";
import Scheduling from "./servicepage/scheduiling.js";
import About from "./About/about.js";
import Contact from "./About/contact.js";
import Packages from "./About/packages.js";

const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/home" element={<Homet />} />
        <Route exact path="/building" element={<Building />} />
        <Route exact path="/hotel" element={<Hotel />} />
        <Route exact path="/office" element={<Office />} />
        <Route exact path="/hospital" element={<Hospital />} />
        <Route exact path="/industrial" element={<Industrial />} />
        <Route exact path="/on-offremotely" element={<Onoffremote />} />
        <Route exact path="/currentstatusofhouse" element={<Currentstatus />} />
        <Route exact path="/scheduling" element={<Scheduling />} />
        <Route exact path="/aboutus" element={<About />} />
        <Route exact path="/packages" element={<Packages />} />
        <Route exact path="/contactus" element={<Contact />} />
      </Routes>
    </>
  );
};
export default App;
