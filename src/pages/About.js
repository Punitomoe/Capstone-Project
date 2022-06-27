import React from "react";
import "../style/About.css";
import Photo from "../assets/Photo.jpg";
import Nauris from "../assets/Nauris.JPG";
import Dimas from "../assets/Dimas.jpg";
import Roma from "../assets/Roma.jpeg";
import Rahmi from "../assets/Rahmi.jpeg";
import AboutUs from "../assets/AboutUs.jpg";
import Avatar from "@mui/material/Avatar";
import Layout from "../layout/Layout";

function About() {
  return (
    <div>
      <Layout>
        <div className="title"> Tentang Kami </div>
        <div className="index">
          <div className="RowTop">
            <div className="benner1">
              <div className="photoProfil">
                <Avatar alt="" src={Rahmi} sx={{ width: 76, height: 76 }} />
                <p>
                  {" "}
                  Nama : <br />
                  Social Media : <br />
                  About Me :{" "}
                </p>
              </div>
            </div>

            <img className="background" src={AboutUs} alt=""/>

            <div className="benner2">
              <div className="photoProfil">
                <Avatar alt="" src={Roma} sx={{ width: 76, height: 76 }} />
                <p>
                  {" "}
                  Nama : <br />
                  Social Media : <br />
                  About Me :{" "}
                </p>
              </div>
            </div>
          </div>

          <div className="RowBottom">
            <div className="color3">
              <div className="benner3">
                <div className="photoProfil">
                  <Avatar alt="" src={Dimas} sx={{ width: 76, height: 76 }} />
                  <p>
                    {" "}
                    Nama : <br />
                    Social Media : <br />
                    About Me :{" "}
                  </p>
                </div>
              </div>
            </div>

            <div className="benner4">
              <div className="photoProfil">
                <Avatar alt="" src={Nauris} sx={{ width: 76, height: 76 }} />
                <p>
                  {" "}
                  Nama : <br />
                  Social Media : <br />
                  About Me :{" "}
                </p>
              </div>
            </div>

            <div className="benner5">
              <div className="photoProfil">
                <Avatar alt="" src={Photo} sx={{ width: 76, height: 76 }} />
                <p>
                  {" "}
                  Nama : <br />
                  Social Media : <br />
                  About Me :{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default About;
