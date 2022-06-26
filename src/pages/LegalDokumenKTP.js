import React from "react";
import Layout from "../layout/Layout";
import "../style/pajakKendaraan.css";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Link } from "react-router-dom";

function LegalDokumenKTP() {
  return (
    <div>
      <Layout>
        <div className="indexKendaraan">
          <div className="breadcrumbs">
            <Link to="/menu"> Menu </Link>
            <NavigateNextIcon />
            <Link to="/menu/asuransi"> Asuransi </Link>
            <NavigateNextIcon />
            Legal Dokumen
          </div>
          <div className="containing">
            <div className="judul">
              <h1>Sistem pembuatan KTP</h1>
            </div>
            <div className="vidio">
              <iframe
                className="vidio"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/QXmVaZZMg8E"
              ></iframe>
            </div>
            <div className="content">
              <h3>
                Berkas apa saja yang perlu dibawa ketika melakukan pendaftaran?
              </h3>
              <p>
                Berkas yang perlu dibawa ketika hendak membuat KTP adalah:
                <br></br>1. Datang ke kelurahan dengan membawa fotokopi Kartu
                Keluarga dan surat pengantar dari RT/RW.
                <br></br>2. Mengambil nomor antrean atau menunggu dipanggil
                petugas.
                <br></br>3. Petugas akan memasukkan data dan foto secara
                digital.
                <br></br>4. Membubuhkan tanda tangan di alat yang disediakan.
                <br></br>5. Melakukan pemindaian retina di alat yang disediakan.
                <br></br>6. Petugas menandatangani surat panggilan KTP.
                <br></br>7. Menunggu percetakan selesai, sekitar dua minggu,
                namun biasanya bisa lebih cepat.
                <br></br>
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
                  <br></br>
                  <br></br>Sedangkan syarat penduduk asing yang memiliki izin
                  tinggal tetap, sebagai berikut:
                  <br></br>- Telah berusia 17 tahun atau sudah kawin/pernah
                  kawin
                  <br></br>- Membawa KK
                  <br></br>- Dokumen perjalanan
                  <br></br>- Kartu izin tetap tinggal.
                </p>
              </p>
              <h3>Mengapa kita harus membuat ktp? </h3>
              <p>
                Kenapa sih kita harus membuat KTP jika sudah berusia 17 tahun?
                Berikut adalah alasan mengapa KTP itu perlu
                <br></br> 2. Mencegah data ganda dan pemalsuan KTP sehingga
                tercipta keakuratan data penduduk sehingga mendukung program
                pembangunan.
                <br></br>3. Ikut pilkada serentak dan pemilihan umum (Pemilu).
                <br></br>4. Mempermudah masyarakat mendapatkan pelayanan dari
                lembaga pemerintah atau swasta.
                <br></br>5. Syarat menikah dan mengurus dokumen kependudukan
                lainnya.
                <br></br>6. Mengurus Surat Ijin Mengemudi dan STNK.
                <br></br>7. Mengurus Paspor dan Imigrasi.
                <br></br>8. Mengurus tabungan, pembukaan rekening bank, kartu
                kredit, dll.
                <br></br>9. Membuat BPJS kesehatan dan BPJS ketenagakerjaan.
              </p>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}
export default LegalDokumenKTP;
