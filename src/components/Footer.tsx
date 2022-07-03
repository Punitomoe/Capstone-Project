import React from "react";
import "../style/components/Footer.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <div className="footer bg-dark">
      <div className="container font-small pt-3 pb-3">
        <div className="container text-center text-md-left ">
          <div className="row footer-grid">
            <div className="content-left">
              <img
                src={require("../assets/logoFooter.png")}
                className="footer-img"
                height="40"
                width="60"
                alt=""
              />
              <h6> &copy; 2022 maturedi.com </h6>
            </div>

            <div className="content-right">
              <h6 className="footer-h6">Media Social Kami</h6>
              <div>
                <InstagramIcon className="footer-icon" />
                <WhatsAppIcon className="footer-icon" />
                <LinkedInIcon className="footer-icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
