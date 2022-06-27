import React from "react";
import "../style/Footer.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import logoFooter from "../assets/logoFooter.png";

function Footer() {
  return (
    <div className="footerr">
      {/* <div className="footer_left">
        <img src={logoFooter} />
        <p>Media Social Kami</p>
      </div>

      <div className="footer_right">
        <InstagramIcon />
        <FacebookIcon />
        <LinkedInIcon />
        <p> &copy; 2022 maturedi.com </p>
      </div> */}

      {/* <!-- Footer --> */}
      <div class="page-footer font-small bg-dark pt-4">
        <div class="container-fluid text-center text-md-left ">
          <div className="row footer-grid">
            <div className="content-left">
              <img src={logoFooter} className="footer-img" alt=""/>
              <p className="footer-year"> &copy; 2022 maturedi.com </p>
            </div>

            <div class=" content-right">
              <p>Media Social Kami</p>
              <div className="footer-icon">
                <InstagramIcon />
                <WhatsAppIcon />
                <LinkedInIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
