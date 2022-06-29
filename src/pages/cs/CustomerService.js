import React from "react";
import Layout from "../../layout/Layout";
import backgroundCS from "../../assets/backgroundCS.png";
import admin from "../../assets/admin.png";
import asker from "../../assets/asker.png";
import Avatar from "@mui/material/Avatar";
import "../../style/pages/CustomerService.css";
import { Link } from "react-router-dom";

function CustomerService() {
  return (
    <div>
      <Layout>
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
                <h1>Talk to a member of our service team</h1>
              </div>
              <div>
                <p>We will help you with any obstacle you faced.</p>
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
                <h1>Frequently Asked Questions</h1>
              </div>
              <div>
                <p>
                  You are not the only one who asking this, take a look the
                  answer for your questions.
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
      </Layout>
    </div>
  );
}

export default CustomerService;
