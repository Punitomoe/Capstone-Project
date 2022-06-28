import React from "react";
import "../style/Footer.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import logoFooter from "../assets/logoFooter.png";

function Footer() {
  return (
    <div className="footer bg-dark ">
      <div class="container font-small pt-2 pb-2">
        <div class="container text-center text-md-left ">
          <div className="row footer-grid">
            <div className="content-left">
              <img src={logoFooter} className="footer-img" alt=""/>
              <h6> &copy; 2022 maturedi.com </h6>
            </div>

            <div class="content-right">
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
}

export default Footer;
