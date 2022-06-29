import React from "react";
import "../style/About.css";
import Nauris from "../assets/Nauris.png";
import Dimas from "../assets/Dimas.png";
import Roma from "../assets/Roma.png";
import Rahmi from "../assets/Rahmi.png";
import Yoram from "../assets/Yoram.png";
import Layout from "../layout/Layout";

function About() {
  return (
    <div>
      <Layout>
        <div className="tentangIndex">
          <h1>About Us</h1>
          <div className="photoCard">
            <img src={Dimas} alt="" />
            <img src={Roma} alt="" />
            <img src={Nauris} alt="" />
            <img src={Rahmi} alt="" />
            <img src={Yoram} alt="" />
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default About;
