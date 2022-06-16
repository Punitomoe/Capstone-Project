import React from "react";
import { Link } from "react-router-dom";

function MenuItem({ image, name, quote, btn, link }) {
  return (
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <center>
        <h1> {name} </h1>
        <p> {quote} </p>
        <Link to={link}>
          <button> {btn} </button>
        </Link>
      </center>
    </div>
  );
}

export default MenuItem;
