import React from "react";
import "../style/home.css";
import Pic from "../frontpage/pic.js";
import Main from "../component/main.js";

const Home = () => {
  return (
    <>
      <Main />
      <div className="container-main">
        <Pic />
      </div>
    </>
  );
};
export default Home;
