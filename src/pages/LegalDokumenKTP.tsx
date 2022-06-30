import React from "react";
import Layout from "../layout/Layout";
import "../style/Konten.css";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Link } from "react-router-dom";

function LegalDokumenKTP() {
  return (
    <>
      <Layout>
        <div className="indexKendaraan">
          <div className="breadcrumbs">
            <Link to="/menu"> Menu </Link>
            <NavigateNextIcon />
            <Link to="/menu/dokumen"> Legal Dokumen </Link>
            <NavigateNextIcon />
            <p>KTP</p>
          </div>
          <div className="containing">
          <center>
            <div className="judul">
              <h1>Sistem pembuatan KTP</h1>
            </div>
            <div className="vidio">
              <iframe
                  title="Sering Diminta Fotokopi, Apa Saja Sih Teknologi di e-KTP | Tech It Easy"
                width="724"
                height="385"
                src="https://www.youtube.com/embed/QXmVaZZMg8E"
                alt="Sering Diminta Fotokopi, Apa Saja Sih Teknologi di e-KTP | Tech It Easy"
              />
            </div>
            <div className="content">
              <h3>
                Berkas apa saja yang perlu dibawa ketika melakukan pendaftaran?
              </h3>
              <p>
                Berkas yang perlu dibawa ketika hendak membuat KTP adalah:
                <br/>1. Datang ke kelurahan dengan membawa fotokopi Kartu
                Keluarga dan surat pengantar dari RT/RW.
                <br/>2. Mengambil nomor antrean atau menunggu dipanggil
                petugas.
                <br/>3. Petugas akan memasukkan data dan foto secara
                digital.
                <br/>4. Membubuhkan tanda tangan di alat yang disediakan.
                <br/>5. Melakukan pemindaian retina di alat yang disediakan.
                <br/>6. Petugas menandatangani surat panggilan KTP.
                <br/>7. Menunggu percetakan selesai, sekitar dua minggu,
                namun biasanya bisa lebih cepat.
                <br/>
                <p>
                  {" "}
                  Nah kalau sobat hendak memproses dengan cara yang online
                  dilakukan dengan sebagai berikut:
                  <li>Mengakses aplikasi Dukcapil Online resmi.</li>
                  <li>Memilih layanan “Kartu Tanda Penduduk”.</li>
                  <li>Mengisi data yang dibutuhkan.</li>
                  <li>
                    Mengunggah dokumen yang dibutuhkan sesuai persyaratan.
                  </li>
                  <li>Menunggu proses verifikasi berkas pemohonan.</li>
                  <li>Tunggu sampai mendapatkan notifikasi status layanan.</li>
                  <li>
                    Menyerahkan KTP lama dan mengambil KTP baru di kecamatan
                    setempat.
                  </li>
                  Berikut syarat umum membuat KTP baru:
                  <br></br>- Berusia minimal 17 tahun Fotokopi Kartu Keluarga
                  (KK).
                  <br/>
                  <br/>Sedangkan syarat penduduk asing yang memiliki izin
                  tinggal tetap, sebagai berikut:
                  <br></br>- Telah berusia 17 tahun atau sudah kawin/pernah
                  kawin
                  <br/>- Membawa KK
                  <br/>- Dokumen perjalanan
                  <br/>- Kartu izin tetap tinggal.
                </p>
              </p>
              <h3>Mengapa kita harus membuat ktp? </h3>
              <p>
                Kenapa sih kita harus membuat KTP jika sudah berusia 17 tahun?
                Berikut adalah alasan mengapa KTP itu perlu
                <br/>1. Sebagai tanda pengenal atau bukti yang sah.
                <br/>2. Mencegah data ganda dan pemalsuan KTP sehingga
                tercipta keakuratan data penduduk sehingga mendukung program
                pembangunan.
                <br/>3. Ikut pilkada serentak dan pemilihan umum (Pemilu).
                <br/>4. Mempermudah masyarakat mendapatkan pelayanan dari
                lembaga pemerintah atau swasta.
                <br/>5. Syarat menikah dan mengurus dokumen kependudukan
                lainnya.
                <br/>6. Mengurus Surat Ijin Mengemudi dan STNK.
                <br/>7. Mengurus Paspor dan Imigrasi.
                <br/>8. Mengurus tabungan, pembukaan rekening bank, kartu
                kredit, dll.
                <br/>9. Membuat BPJS kesehatan dan BPJS ketenagakerjaan.
              </p>
            </div>
            </center>
          </div>
        </div>
      </Layout>
    </>
  );
}
export default LegalDokumenKTP;
