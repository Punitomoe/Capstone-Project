import React from "react";
import "../style/Home.css";
import { Link } from "react-router-dom";
import WomenJurnal from "../assets/WomenJurnal.png";
import Layout from "../layout/Layout";

function Home() {
  return (
    <>
      <Layout>
        <div id="hero" className="hero d-flex align-items-center">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 d-flex flex-column justify-content-center">
                <h4>Halo Sobat!, Yuk</h4>
                <h1 data-aos="fade-up">
                  Makin Ready
                  <br />
                  bareng
                  <strong className="brand-name"> maturedi!</strong>
                </h1>
                <p data-aos="fade-up" data-aos-delay="400">
                  paham masalah perpajakan, asuransi, <br />
                  sampai mengurusi legal dokumen ga pake <br /> ribet di
                  meturedi.
                </p>
                <div data-aos="fade-up" data-aos-delay="600">
                  <div className="text-center text-lg-start">
                    <Link
                      to="/menu"
                      className="btn-highlight btn btn-danger scrollto d-inline-flex align-items-center justify-content-center align-self-center"
                    >
                      Belajar Sekarang!
                    </Link>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-6 hero-img"
                data-aos="zoom-out"
                data-aos-delay="200"
              >
                <img src={WomenJurnal} className="img-fluid animated" alt="" />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Home;
