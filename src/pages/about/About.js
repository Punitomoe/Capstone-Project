import React from "react";
import "../../style/pages/About.css";
import Nauris from "../../assets/about/Nauris.png";
import Dimas from "../../assets/about/Dimas.png";
import Roma from "../../assets/about/Roma.png";
import Rahmi from "../../assets/about/Rahmi.png";
import Yoram from "../../assets/about/Yoram.png";
import Layout from "../../layout/Layout";

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
