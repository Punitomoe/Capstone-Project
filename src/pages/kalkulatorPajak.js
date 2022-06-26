import React from "react";
import Layout from "../layout/Layout";
import "../style/kalkulatorPajak.css";
import PajakKendaraan from "../assets/PajakKendaraan.png";
import { useState } from "react";

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
            <div className="box">
              <div className="pajakSection">
                <h1>Pajak Karyawan</h1>
                <div>
                  <label>Penghasilan dalam Setahun</label>
                  <input id="penghasilan" />
                  <br />
                  <label>Bonus THR dsb</label>
                  <br />
                  <input id="thr" />
                  <br />
                  <label>Status Perkawinan/Tanggungan</label>
                  <br />
                  <select>
                    <option value="tk0">TK/0</option>
                    <option value="k0">K/0</option>
                    <option value="k1">K/1</option>
                    <option value="k2">K/2</option>
                    <option value="k3">K/3</option>
                  </select>
                  <br />
                </div>
                <div>
                  <p>Jumlah Kisaran Pajak yang Harus dibayar:</p>
                  <br />
                  <div className="result"></div>
                </div>
              </div>
            </div>
            <div className="box"></div>
            <div
              className="box"
              style={{ backgroundImage: `url(${PajakKendaraan})` }}
            ></div>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default kalkulatorPajak;
