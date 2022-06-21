import Layout from "../layout/Layout";
import "../style/kalkulatorPajak.css";
import PajakKendaraan from "../assets/PajakKendaraan.png";
import { useState } from "react";

function KalkulatorPajak() {
  const [penghasilan, setPenghasilan] = useState(0);
  const [bonus, setBonus] = useState(0);
  const [tanggungan, setTanggungan] = useState(0);
  const [hasil, setHasil] = useState(0);
  const [omzetValue, setOmzetValue] = useState(0);
  const [omzetResult, setOmzetResult] = useState(0)


  const handleTanggungan = (e) => {
    const jenis = e.target.value;
    switch (jenis) {
      case "TK/0":
        setTanggungan(0)
        break;
      case "K/0":
        setTanggungan(4500000)
        break;
      case "K/1":
        setTanggungan(9000000)
        break;
      case "K/2":
        setTanggungan(13500000)
        break;
      case "K/3":
        setTanggungan(18000000)
        break;
      default:
        setTanggungan(0)
        break;
    }
  }

  const hitungHasil = () => {
    let gajiBersih = (parseInt(penghasilan) + parseInt(bonus));
    let tanggunganAkhir = parseInt(tanggungan) + 54000000;
    let total = gajiBersih - tanggunganAkhir;


    if (gajiBersih < 54000000) {
      setHasil(0)
    }

    console.log(total);

    if (total <= 50000000) {
       setHasil(total * 0.05);
    }else if(total <= 300000000){
      setHasil((total - 50000000) * 0.15 + 2500000);
    }else if(total <= 750000000){
      setHasil((total - 300000000) * 0.25 + 25000000 + 37500000);
    }else{
      setHasil((total - 750000000) * 0.3 + 25000000 + 37500000 + 125000000);
    }

  }

  const handleOmzet = () => {
    if (omzetValue < 4800000000) {
      setOmzetResult(omzetValue * 0.5);
    }
  }



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
                  <input id="penghasilan" type="number" onChange={(e) => setPenghasilan(e.target.value)} />
                  <br />
                  <label>Bonus THR dsb</label><br />
                  <input id="thr" type="number" onChange={(e) => setBonus(e.target.value)} />
                  <br />
                  <label>Status Perkawinan/Tanggungan</label><br />
                  <select onChange={handleTanggungan}>
                    <option>TK/0</option>
                    <option>K/0</option>
                    <option>K/1</option>
                    <option>K/2</option>
                    <option>K/3</option>
                  </select><br />
                </div>
                <div className="btn">
                  <button onClick={hitungHasil}>Hitung</button>
                </div>
                <div>
                  <p>Jumlah Kisaran Pajak yang Harus dibayar:</p>
                  <br />
                  <div className="result">{hasil}</div>
                </div>
              </div>
            </div>
            <div className="box">
              <h1>Pajak UMKM</h1>
              <label>Omzet per tahun</label>
              <input type="number" onChange={(e) => setOmzetValue(e.target.value)} />
              <button onClick={handleOmzet}>Total</button>
              <div>
                  <p>Jumlah Kisaran Pajak yang Harus dibayar:</p>
                  <br />
                  <div className="result">{omzetResult}</div>
                </div>
            </div>
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

export default KalkulatorPajak;