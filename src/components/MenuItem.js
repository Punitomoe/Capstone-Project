import React from "react";
import { Link } from "react-router-dom";

function MenuItem({ image, name, quote, btn, link, menu1, menu2, menu3 }) {
  return (
    <div className="menuItem">
      <div
        className="menuItem-img"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="text-center">
        <h1> {name} </h1>
        <p className="mt-3 pb-4"> {quote} </p>
        <Link to={link}>
          <button className="btn btn-danger mb-3"> {btn} </button>
        </Link>
      </div>
    </div>
  );
}

export default MenuItem;
