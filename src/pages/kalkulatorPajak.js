import React from "react";
import Layout from "../layout/Layout";
import "../style/kalkulatorPajak.css";
import PajakKendaraan from "../assets/PajakKendaraan.png";

function kalkulatorPajak() {
  return (
    <div>
      <Layout>
        <div className="indexPajak">
          <div className="textPajak">
            <h1> Kalkulator Pajak </h1>
            <p>
              {" "}
              Hitung kisaran pajak yang harus kamu bayarkan di Kalkulator Pajak!{" "}
            </p>
          </div>
          <div className="container">
            <div className="box"></div>
            <div className="box"></div>
            <div className="box" style={{ backgroundImage: `url(${PajakKendaraan})` }}></div>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default kalkulatorPajak;
