import React from "react";
import "../../style/pages/About.css";
import Nauris from "../../assets/about/Nauris.png";
import Dimas from "../../assets/about/Dimas.png";
import Roma from "../../assets/about/Roma.png";
import Rahmi from "../../assets/about/Rahmi.png";
import Yoram from "../../assets/about/Yoram.png";

function About() {
  return (
    <div>
      <div className="tentangIndex">
        <h1>About Us</h1>
        <div className="photoCard">
          <img src={Dimas} width="220" height="300" alt="" />
          <img src={Roma} width="220" height="300" alt="" />
          <img src={Nauris} width="220" height="300" alt="" />
          <img src={Rahmi} width="220" height="300" alt="" />
          <img src={Yoram} width="220" height="300" alt="" />
        </div>
      </div>
    </div>
  );
}

export default About;
