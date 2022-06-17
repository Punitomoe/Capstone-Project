import React from "react";
import "../style/Home.css";
import WomenJurnal from "../assets/WomenJurnal.jpg";
import { Link } from "react-router-dom";
import Layout from "../layout/Layout";
function Home() {
  return (
    <div>
      <Layout>
        <div className="home">
          <img src={WomenJurnal} />
          <div className="headerContainer">
            <h2>Halo Sahabat! Yuk</h2>
            <h1>Makin Ready</h1>
            <h1>Bareng Maturedi!</h1>
            <p>
              paham masalah perpajakan, asuransi,
              <br /> sampai mengurusi legal dokumen ga pake
              <br /> ribet di maturedi.
            </p>
            <Link to="/menu">
              <button>Belajar Sekarang!</button>
            </Link>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default Home;
