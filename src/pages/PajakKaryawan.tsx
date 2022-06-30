import React from "react";
import Layout from "../layout/Layout";
import "../style/Konten.css";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Link } from "react-router-dom";

function PajakKaryawan() {
  return (
    <>
      <Layout>
        <div className="indexKendaraan">
          <div className="breadcrumbs">
            <Link to="/menu"> Menu </Link>
            <NavigateNextIcon />
            <Link to="/menu/pajak"> Pajak </Link>
            <NavigateNextIcon />
            <p>Pajak Karyawan</p>
          </div>
          <div className="containing">
          <center>
            <div className="judul">
              <h1>Pajak Karyawan</h1>
            </div>
            <div className="vidio">
              <iframe
                title="Penghitungan PPh Orang Pribadi Karyawan"
                width="724"
                height="385"
                src="https://www.youtube.com/embed/ix5rKLxXH2s"
                alt="Penghitungan PPh Orang Pribadi Karyawan"
              />
            </div>
            <div className="content">
              <h3>Mengapa perlu membayar pajak karyawan?</h3>
              <p>
                Kenapa ya kita udah susah-susah kerja, capek berangkat kerja dan
                pulang malem, eh akhirnya gaji yang kita dapet harus terpotong
                juga. pernah kepikiran gitu gak sobat redi? kalau kita telisik
                lagi, dasar undang-undang seorang karyawan harus bayar pajak itu
                berdasar pada Undang-Undang Nomor 36 Tahun 2008, yaitu orang
                yang emang berdomisili atau berniat untuk tinggal di Indonesia
                dan telah menjadi karyawan setidaknya 12 bulan. Lalu apa sih
                manfaat dari membayar pajak. secra umum tentu menyumbang
                pendapatan negara kita, yang berimbas pada perbaikan pelayanan
                publik tentunya. dan pajak karyawan adalah salah satu pendapatan
                yang bisa didapetin dari negara. jadi makin banyak orang taat
                bayar pajak, makin banyak manfaat yang bisa didapetin buat
                membangun negara ini. jadi gimana, kamu udah jadi bagian
                membangun negara ini belum?
              </p>
              <h3>
                Kapan dan bagaimana saya sebagai karyawan membayar pajak saya?{" "}
              </h3>
              <p>
                pajak karyawan, baru diberlakukan setelah 12 bulan terhitung
                menjadi karyawan. Pembayaran pajaknya pun dilakukan setahun
                sekali dan terdapat minimum nilai yang dicapai baru seseorang
                tersebut dikenakan pajak, yaitu lebih dari 54juta pertahunnya.
                Tempat untuk membayar pajak tentu bisa dilakukan secara langsung
                di dirjen pajak terdekat atau online melalui
                djponline.pajak.go.id
              </p>
            </div>
            </center>
          </div>
        </div>
      </Layout>
    </>
  );
}
export default PajakKaryawan;
