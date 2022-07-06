import React from "react";
import ErrorBackground from "../assets/Error.jpg";
import "../style/Error.css";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

function Error() {
  return (
    <div>
      <div
        className="indexError"
        style={{ backgroundImage: `url(${ErrorBackground})` }}
      >
        <div className="indexGrid">
          <div className="gridItem item1">404 Page Under Construction!</div>
          <div className="gridItem item2">
            The Page You're Looking For is Under Construction
          </div>
          <Link to="/" className="gridItem item3">
            <Button variant="contained">Go Back</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Error;
