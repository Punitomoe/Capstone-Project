import React from "react";
import "../../style/Konten.css";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Link } from "react-router-dom";

const AsuransiBPJS = () => {
  return (
    <>
      <div className="indexKendaraan mb-5 pb-5">
        <div className="breadcrumbs">
          <Link to="/menu" className="breadcrumbs-link text-decoration-none">
            Menu
          </Link>
          <NavigateNextIcon />
          <Link to="/menu/asuransi" className="breadcrumbs-link">
            Asuransi
          </Link>
          <NavigateNextIcon />
          <p>Asuransi BPJS</p>
        </div>
        <div className="containing">
          <div className="text-center">
            <div className="judul">
              <h1>BPJS Kesehatan</h1>
            </div>
            <div className="vidio">
              <iframe
                title="Tips Memilih Asuransi Mobil Terbaik"
                width="724"
                height="385"
                src="https://www.youtube.com/embed/XwBX-VHX2Y8"
              />
            </div>
            <div className="content mt-2">
              <h3 className="mb-4">
                Bagaimana prosedur pendaftaran dan pembayaran?
              </h3>
              <p>
                BPJS atau Badan Penyelenggara Jaminan Sosial memiliki fungsi
                sebagai penyelenggara kesehatan masyarakat yang memiliki sistem
                yang kompleks dan bertingkat. Nah kalau sobat redi mau daftar,
                sobat harus tau sobat di sini sebagai apa? apakah pribadi?
                didaftarkan pemerintah? perusahaan? atau mendaftarkan anak sobat
                yang baru lahir? dari berbagai macam latar belakang dari
                pendaftaran BPJS ini, proses administrasi pendaftaran pada
                setiap kanal layanan administrasi dilakukan dengan ketentuan:
                <div className="mt-2">
                  1. Mengisi FDIPE (Formulir Daftar Isian Peserta Elektronik)
                </div>
                <div className="mt-1">
                  2. Melengkapi persyaratan administrasi sesuai dengan layanan
                  yang dibutuhkan; dan
                </div>
                <div className="mt-1">
                  3. Memberikan persetujuan layanan administrasi.
                </div>
                <p className="mt-4">
                  BPJS atau Badan Penyelenggara Jaminan Sosial memiliki fungsi
                  sebagai penyelenggara kesehatan masyarakat yang memiliki
                  sistem yang kompleks dan bertingkat. Nah kalau sobat redi mau
                  daftar, sobat harus tau sobat di sini sebagai apa? apakah
                  pribadi? didaftarkan pemerintah? perusahaan? atau mendaftarkan
                  anak sobat yang baru lahir? dari berbagai macam latar belakang
                  dari pendaftaran BPJS ini, proses administrasi pendaftaran
                  pada setiap kanal layanan administrasi dilakukan dengan
                  ketentuan:
                  <ul>
                    <li>
                      Mengisi FDIPE (Formulir Daftar Isian Peserta Elektronik);
                    </li>
                    <li>
                      Melengkapi persyaratan administrasi sesuai dengan layanan
                      yang dibutuhkan; dan
                    </li>
                    <li>Memberikan persetujuan layanan administrasi. .</li>{" "}
                    <br />
                  </ul>
                  <p>
                    Persyaratan administrasi kepesertaan sesuai dengan ketentuan
                    masing-masing jenis kepesertaan nah maturedi menyarankan
                    buat daftar melalui Mobile JKN aja! Mengutip dari CNBC.com,
                    pertama sobat unduh aplikasi Mobile JKN di smartphone, lalu
                    klik "Daftar", kemudian
                    <li className="mt-2">
                      Masukkan NIK KTP, ketik kode captcha. Halaman smartphone
                      akan menampilkan daftar data keluarga dan calon peserta
                      BPJS Kesehatan
                    </li>
                    <li>Isi data diri, lalu klik "Selanjutnya"</li>
                    <li>
                      Pilih fasilitas kesehatan (faskes) yang diinginkan,
                      termasuk dokter gigi
                    </li>
                    <li>Masukkan alamat email yang aktif, klik "Simpan"</li>
                    <li>
                      Kode verifikasi akan dikirimkan melalui alamat email yang
                      didaftarkan
                    </li>
                    <li>
                      Cek email masuk dan salin kode verifikasi tersebut ke
                      aplikasi Mobile JKN
                    </li>
                    <li>
                      Peserta akan mendapatkan virtual account untuk pembayaran
                      premi
                    </li>
                    <li className="mb-3">
                      Pembayaran iuran bisa dilakukan melalui e-commerce, mobile
                      banking, ATM, kantor pos, atau di berbagai merchant BPJS
                      Kesehatan seperti minimarket.
                    </li>
                    Jika sudah selesai mendaftar BPJS Kesehatan secara online
                    dan telah melakukan pembayaran, maka sobat udah resmi
                    terdaftar di BPJS Kesehatan! selamat berobat~
                  </p>
                </p>
                <h3>Apa saja manfaat dari bpjs kesehatan? </h3>
                <p>
                  Terus kenapa sih kok kita harus punya akun BPJS kesehatan? apa
                  sih manfaat yang bisa kita dapetin? dan sobat tau nggak kalau
                  BPJS Kesehatan udah jadi syarat buat jual beli tanah? 😱 Nah
                  mengutip dari Kompas dan Alinea id, manfaat dari BPJS itu
                  ragam banget! yaitu:
                  <div className="mt-3 mb-2">
                    <b>1. Semua penyakit ditanggung!</b>
                  </div>
                  Tidak terbatas pada penyakit a, b, c, atau penyakit apapun
                  tapi semua penyakit bakal ditanggung sama BPJS ini, berbeda
                  dengan asuransi swasta lain yang seringkali menciptakan
                  batasan-batasan hanya pada penyakit tertentu
                  <div className="mt-3 mb-2">
                    <b>2. Biaya ringan</b>
                  </div>
                  BPJS sendiri memiliki tiga tingkat kelas, I, II, dan III
                  tergantung nilai pembayarannya. per tahun 2022, pembayaran
                  BPJS kesehatan sesuai kelasnya adalah:
                  <div className="mt-1 mb-1">
                    Kelas I : Rp. 150.000 /peserta
                  </div>
                  <div className="mt-1 mb-1">
                    Kelas II : Rp. 100.000 /peserta
                  </div>
                  <div className="mt-1 mb-3">
                    Kelas III : Rp. 35.000 /peserta
                  </div>
                  jika sobat bandingkan dengan asuransi swasta lain, harga di
                  atas jauh lebih terjangkau dan bisa menjamin ke banyak
                  kalangan!.
                  <div className="mt-3 mb-2">
                    <b>3. Pembayaran yang fleksibel</b>
                  </div>
                  Pembayaran BPJS kesehatan sendiri memiliki banyak cara
                  pembayaran, tidak hanya membayar di tempat atau transfer bank
                  saja. Pembayaran BPJS kesehatan dapat dilakukan bahkan
                  menggunakan Tokopedia lho!
                  <div className="mt-3 mb-2">
                    <b>4. Fasilitas</b>
                  </div>
                  Terdapat pelayanan medis berupa fasilitas kesehatan tingkat
                  pertama yang bersifat non spesialis yang meliputi rawat inap
                  dan jalan, biasanya berupa puskesmas, unit kesehatan kampus,
                  dan klinik praktek mandiri dokter dan dokter gigi. Resep
                  dokter untuk dan obat dari apotek juga terfasilitasi. kemudian
                  sobat dapat pula memperoleh penyuluhan kesehatan maupun
                  imunisasi rutin pada pelayanan promosi kesehatan & pencegahan.
                  Tidak hanya itu, peserta BPJS juga dapat memanfaatkan
                  pelayanan keluarga berencana, meliputi konseling, pelayanan
                  kontrasepsi, screening medis, tubektomi dan vasektomi yang
                  dilakukan bersama BKKBN. gimana, lengkap banget kan? eits
                  belum sampai di situ aja, ada pelayanan lanjutan berupa rawat
                  inap tingkat pertama, rawat inap lanjutan, surat rujukan ke
                  rumah sakit, rawat jalan lanjutan, dan layanan medis rujukan.
                  bener-bener deh program kesehatan yang kompleks banget! belum
                  lagi buat berbagai fitur mulai dari antre, pembayaran, sampe
                  pelayanan online bisa kita akses secara mobile di JKN Mobile!
                  praktis banget.
                </p>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AsuransiBPJS;
