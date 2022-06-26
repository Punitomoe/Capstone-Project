import React from "react";
import ErrorBackground from "../assets/Error.jpg";
import Layout from "../layout/Layout";
import "../style/Error.css";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

function Error() {
  return (
    <div>
      <Layout>
        <div
          className="indexError"
          style={{ backgroundImage: `url(${ErrorBackground})` }}
        >
          <div className="indexGrid">
            <div className="gridItem item1">404 Page Not Found!</div>
            <div className="gridItem item2">
              We Can't Seem Find The Page You're Looking For
            </div>
            <Link to="/" className="gridItem item3">
              <Button variant="contained">Go Back</Button>
            </Link>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default Error;
