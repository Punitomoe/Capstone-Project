import React from "react";
import Layout from "../layout/Layout";
import "../style/Konten.css";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Link } from "react-router-dom";

function AsuransiKendaraan() {
  return (
    <>
      <Layout>
        <div className="indexKendaraan">
          <div className="breadcrumbs">
            <Link to="/menu"> Menu </Link>
            <NavigateNextIcon />
            <Link to="/menu/asuransi"> Asuransi </Link>
            <NavigateNextIcon />
            <p>Asuransi Kendaraan</p>
          </div>
          <div className="containing">
            <center>
              <div className="judul">
                <h1>Asuransi Kendaraan</h1>
              </div>
              <div className="vidio">
                <iframe
                  title="Vidio Edukasi Pajak Kendaraan Bermotor"
                  width="724"
                  height="385"
                  src="https://www.youtube.com/embed/4ZzwwhLGBA4"
                  url="/"
                />
              </div>
              <div className="content">
                <h3>Bagaimana prosedur pendaftaran dan pembayaran?</h3>
                <p>
                  {" "}
                  Di Mana Mendapatkan Asuransi Ini? sobat dapat memperoleh
                  asuransi ini melalui:
                  <br />
                  <br />
                  <ul>
                    <li>Kantor cabang dari perusahaan asuransi. </li>
                    <li>
                      Agen perusahaan asuransi yang memiliki sertifikat keagenan
                      yang diakui.
                    </li>
                    <li>Situs perusahaan asuransi. </li>
                    <li>
                      Pihak lainnya yang telah bekerjasama dengan perusahaan
                      asuransi.
                    </li>
                  </ul>
                  Nah untuk pembayarannya tentu tergantung dari penyedia
                  asuransi, biasanya dapat dibayar secara daring melalui
                  e-commerce ataupun transfer bank.
                </p>
                <h3>
                  Apa itu asuransi kendaraan dan manfaat apa aja yang didapat
                  dari asuransi kendaraan?
                </h3>
                <p>
                  Asuransi kendaraan merupakan polis standar yang dikeluarkan
                  oleh AAUI yang digunakan di Indonesia dan dirancang untuk
                  menutup pertanggungan gabungan yakni: Pertanggungan atas
                  kendaraan bermotor itu sendiri. Pertanggungan tanggung jawab
                  hukum (TJH) terhadap pihak ketiga.
                </p>
                <p>
                  Nah kemudian manfaat dan tanggungan apa aja yang bakal
                  didapetin sama sobat redi ketika udah mendaftarkan kendaraan
                  oleh asuransi?
                </p>
                <b>Jenis Pertanggungan Asuransi Kendaraan Bermotor</b>
                <p>
                  {" "}
                  Terdapat dua jenis pertanggungan asuransi kendaraan bermotor
                  yaitu Comprehensive (All Risk) dan Total Loss Only (TLO).
                </p>
                <ul>
                  <li>
                    Comprehensive (All Risk), menjamin risiko kerugian secara
                    keseluruhan baik kerugian kecil maupun besar termasuk
                    kehilangan.
                  </li>
                  <li>
                    TLO hanya memberikan jaminan penggantian apabila kendaraan
                    sobat mengalami kerusakan yang nilainya mencapai ≥ 75% dari
                    nilai kendaraan dan kerugian akibat kehilangan kendaraan.
                    Perluasan{" "}
                  </li>
                  Jaminan Asuransi Kendaraan Bermotor Selain menjamin risiko
                  utama, asuransi kendaraan bermotor juga dapat diperluas dengan
                  jaminan tambahan, berupa:
                  <li>
                    Kerugian akibat kerusuhan dan huru-hara; kegiatan terorisme;
                    dan banjir.
                  </li>
                  <li> Kecelakaan diri pengemudi dan penumpang.</li>
                  <li>
                    Tanggung jawab hukum (TJH) terhadap kerugian pihak ketiga.
                  </li>
                </ul>
                <b>
                  Manfaat Asuransi Kendaraan Bermotor Dengan memiliki asuransi
                  kendaraan bermotor
                </b>
                <p>                  Anda dapat memperoleh manfaat sebagai berikut:</p>
                <ul>
                  <li>
                    Rasa tenang karena kendaraan bermotor sobat terlindungi.
                  </li>
                  <li>
                    Memiliki dana untuk melakukan perbaikan/ penggantian saat
                    terjadi peristiwa kerugian.
                  </li>
                </ul>
                <b>Perhitungan Premi</b>
                <p>
                  {" "}
                  Sebagai pemilik polis sobat redi memiliki kewajiban untuk
                  membayar sejumlah premi kepada perusahaan asuransi yang telah
                  menerima risiko Anda. Besarnya nilai premi ditetapkan oleh
                  perusahaan asuransi dengan memperhatikan kondisi kendaraan
                  bermotor Anda, antara lain:
                </p>
                <ul>
                  <li>Kondisi fisik kendaraan.</li>
                  <li>Tipe kendaraan.</li>
                  <li>Usia kendaraaan.</li>
                  <li>Lokasi penggunaan.</li>
                  <li>Fungsi dan penggunaannya.</li>
                  <li>Pengalaman peristiwa kerugian yang pernah dialami.</li>
                  <li>Jenis pertanggungan.</li>
                </ul>
                <b>Hal-hal yang Perlu Diperhatikan</b>
                <ul>
                  <li>Tindakan sengaja dari tertanggung.</li>
                  <li>Melanggar rambu-rambu lalu-lintas.</li>
                  <li>
                    Melakukan balapan, karnaval, kampanye dan tindakan
                    kejahatan.
                  </li>
                  <li>Menarik kendaraan lain.</li>
                  <li>
                    Dikemudikan oleh seseorang yang tidak memiliki Surat Izin
                    Mengemudi (SIM).
                  </li>
                  <li>
                    Dikemudikan oleh seorang yang berada di bawah pengaruh
                    minuman keras atau obat terlarang.
                  </li>
                  <li>
                    Dikemudikan secara paksa walaupun kendaraan dalam keadaan
                    rusak atau tidak layak jalan.
                  </li>
                  <li>
                    Asuransi ini juga tidak menjamin kerugian dan kerusakan atas
                    perlengkapan tambahan yang tidak disebutkan dalam polis
                    seperti kunci, Surat Tanda Nomor Kendaraan (STNK), dan Buku
                    Pemilik Kendaraan Bermotor (BPKB).
                  </li>
                </ul>
                <p>
                  Nah itu tadi apa aja manfaat yang bakal sobat dapetin ketika
                  sobat mendaftarkan kendaraan sobat ke polis asuransi
                  kendaraan. Gimana, sudah daftarin kendaraan sobat ke polis
                  kendaraan belum?
                </p>
              </div>
            </center>
          </div>
        </div>
      </Layout>
    </>
  );
}
export default AsuransiKendaraan;
