import React from "react";
import Layout from "../layout/Layout";
import "../style/pajakKendaraan.css";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Link } from "react-router-dom";

function PajakKaryawan() {
  return (
    <div className="content2">
      <Layout>
        <div className="indexKendaraan">
          <div className="breadcrumbs">
            <Link to="/menu"> Menu </Link>
            <NavigateNextIcon />
            <Link to="/menu/pajak"> Pajak </Link>
            <NavigateNextIcon />
            Pajak Karyawan
          </div>
          <div className="containing">
            <div className="judul">
              <h1>Pajak Karyawan</h1>
            </div>
            <div className="vidio">
              <iframe
                className="vidio"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/ix5rKLxXH2s"
              ></iframe>
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
          </div>
        </div>
      </Layout>
    </div>
  );
}
export default PajakKaryawan;
