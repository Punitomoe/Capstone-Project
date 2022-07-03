import React from "react";
import backgroundCS from "../../assets/backgroundCS.png";
import admin from "../../assets/admin.png";
import asker from "../../assets/asker.png";
import Avatar from "@mui/material/Avatar";
import "../../style/pages/CustomerService.css";
import { Link } from "react-router-dom";

function CustomerService() {
  return (
    <div>
      <div
        className="customerService"
        style={{ backgroundImage: `url(${backgroundCS})` }}
      >
        <h1 className="contactUs">Contact Us</h1>
        <div className="contained">
          <div className="csBox">
            <center>
              <Avatar alt="" src={admin} sx={{ width: 56, height: 56 }} />
            </center>
            <div>
              <h1>Hubungi Tim Pelayanan Kami</h1>
            </div>
            <div>
              <p>Kami akan membantu permasalahan yang kami hadapi.</p>
            </div>
            <div>
              <center>
                <button>
                  <a
                    href="https://wa.me/qr/T6OD62J5F7MYF1"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Contact Customer Service
                  </a>
                </button>
              </center>
            </div>
          </div>

          <div className="csBox">
            <center>
              <Avatar alt="" src={asker} sx={{ width: 56, height: 56 }} />
            </center>
            <div>
              <h1>FAQ</h1>
            </div>
            <div>
              <p>
                Lihat pertanyaan-pertayaan yang sering ditanyakan pengguna
                lain!.
              </p>
            </div>
            <center>
              <Link to="/error">
                <button>Go to Help Center</button>
              </Link>
            </center>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerService;
