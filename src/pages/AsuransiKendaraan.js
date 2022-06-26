import React from "react";
import Layout from "../layout/Layout";
import "../style/pajakKendaraan.css";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Link } from "react-router-dom";

function Asuransi() {
  return (
    <div>
      <Layout>
        <div className="indexKendaraan">
          <div className="breadcrumbs">
            <Link to="/menu"> Menu </Link>
            <NavigateNextIcon />
            <Link to="/menu/asuransiKendaraan"> Asuransi </Link>
            <NavigateNextIcon />
            Asuransi Kendaraan
          </div>
          <div className="containing">
            <div className="judul">
              <h1>Asuransi Kendaraan</h1>
            </div>
            <div className="vidio">
              <iframe
                className="vidio"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/4ZzwwhLGBA4"
              ></iframe>
            </div>
            <div className="content">
              <h3>Bagaimana prosedur pendaftaran dan pembayaran?</h3>
              <p>
                Di Mana Mendapatkan Asuransi Ini? sobat dapat memperoleh
                asuransi ini melalui:
                <br></br>- Kantor cabang dari perusahaan asuransi.
                <br></br>- Agen perusahaan asuransi yang memiliki sertifikat
                keagenan yang diakui.
                <br></br>- Situs perusahaan asuransi.
                <br></br>- Pihak lainnya yang telah bekerjasama dengan
                perusahaan asuransi.
                <br></br>Nah untuk pembayarannya tentu tergantung dari penyedia
                asuransi, biasanya dapat dibayar secara daring melalui
                e-commerce ataupun transfer bank.
                <h3>
                  Apa itu asuransi kendaraan dan manfaat apa aja yang didapat
                  dari asuransi kendaraan?
                </h3>
                <p>
                  Asuransi kendaraan merupakan polis standar yang dikeluarkan
                  oleh AAUI yang digunakan di Indonesia dan dirancang untuk
                  menutup pertanggungan gabungan yakni: Pertanggungan atas
                  kendaraan bermotor itu sendiri. Pertanggungan tanggung jawab
                  hukum (TJH) terhadap pihak ketiga. Nah kemudian manfaat dan
                  tanggungan apa aja yang bakal didapetin sama sobat redi ketika
                  udah mendaftarkan kendaraan oleh asuransi?<br></br>
                  <b>Jenis Pertanggungan Asuransi Kendaraan Bermotor</b>
                  <br></br>
                  Terdapat dua jenis pertanggungan asuransi kendaraan bermotor
                  yaitu Comprehensive (All Risk) dan Total Loss Only (TLO).
                  <br></br> 1. Comprehensive (All Risk), menjamin risiko
                  kerugian secara keseluruhan baik kerugian kecil maupun besar
                  termasuk kehilangan.
                  <br></br> 2. TLO hanya memberikan jaminan penggantian apabila
                  kendaraan sobat mengalami kerusakan yang nilainya mencapai ≥
                  75% dari nilai kendaraan dan kerugian akibat kehilangan
                  kendaraan. Perluasan Jaminan Asuransi Kendaraan Bermotor
                  Selain menjamin risiko utama, asuransi kendaraan bermotor juga
                  dapat diperluas dengan jaminan tambahan, berupa:
                  <br></br>- Kerugian akibat kerusuhan dan huru-hara; kegiatan
                  terorisme; dan banjir.
                  <br></br>Kecelakaan diri pengemudi dan penumpang.
                  <br></br>Tanggung jawab hukum (TJH) terhadap kerugian pihak
                  ketiga.<br></br>
                  <b>
                    Manfaat Asuransi Kendaraan Bermotor Dengan memiliki asuransi
                    kendaraan bermotor,
                  </b>
                  <br></br>
                  Anda dapat memperoleh manfaat sebagai berikut:
                  <br></br>- Rasa tenang karena kendaraan bermotor sobat
                  terlindungi.
                  <br></br>- Memiliki dana untuk melakukan perbaikan/
                  penggantian saat terjadi peristiwa kerugian.
                </p>
                <b>Perhitungan Premi</b>
                <br>
                  Sebagai pemilik polis sobat redi memiliki kewajiban untuk
                  membayar sejumlah premi kepada perusahaan asuransi yang telah
                  menerima risiko Anda. Besarnya nilai premi ditetapkan oleh
                  perusahaan asuransi dengan memperhatikan kondisi kendaraan
                  bermotor Anda, antara lain:
                </br>
                <br></br>- Kondisi fisik kendaraan.
                <br></br>- Tipe kendaraan.
                <br></br>- Usia kendaraaan.
                <br></br>- Lokasi penggunaan.
                <br></br>- Fungsi dan penggunaannya.
                <br></br>- Pengalaman peristiwa kerugian yang pernah dialami.
                <br></br>- Jenis pertanggungan.
                <br></br>
                <b>Hal-hal yang Perlu Diperhatikan</b>
                <br></br>
                Asuransi ini tidak menjamin kerugian atau kerusakan kendaraan
                bermotor sebagai akibat antara lain:
                <br></br>- Tindakan sengaja dari tertanggung.
                <br></br>- elanggar rambu-rambu lalu-lintas.
                <br></br>- Melakukan balapan, karnaval, kampanye dan tindakan
                kejahatan.
                <br></br>- Menarik kendaraan lain.
                <br></br>- Dikemudikan oleh seseorang yang tidak memiliki Surat
                Izin Mengemudi (SIM).
                <br></br>- Dikemudikan oleh seorang yang berada di bawah
                pengaruh minuman keras atau obat terlarang
                <br></br>- Dikemudikan secara paksa walaupun kendaraan dalam
                keadaan rusak atau tidak layak jalan.
                <br></br>- Asuransi ini juga tidak menjamin kerugian dan
                kerusakan atas perlengkapan tambahan yang tidak disebutkan dalam
                polis seperti kunci, Surat Tanda Nomor Kendaraan (STNK), dan
                Buku Pemilik Kendaraan Bermotor (BPKB)
                <br></br> Nah itu tadi apa aja manfaat yang bakal sobat dapetin
                ketika sobat mendaftarkan kendaraan sobat ke polis asuransi
                kendaraan. Gimana, sudah daftarin kendaraan sobat ke polis
                kendaraan belum?
              </p>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}
export default Asuransi;
