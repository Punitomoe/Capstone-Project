import React from "react";
import "../../style/Konten.css";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Link } from "react-router-dom";

const PajakKendaraan = () => {
  return (
    <>
      <div className="indexKendaraan mb-5 pb-5">
        <div className="breadcrumbs">
          <Link to="/menu"> Menu </Link>
          <NavigateNextIcon />
          <Link to="/menu/pajak"> Pajak </Link>
          <NavigateNextIcon />
          <p>Pajak Kendaraan</p>
        </div>
        <div className="containing">
          <div className="text-center">
            <div className="judul">
              <h1>Pajak Kendaraan</h1>
            </div>
            <div className="vidio">
              <iframe
                title="Vidio Edukasi Pajak Kendaraan Bermotor"
                width="724"
                height="385"
                src="https://www.youtube.com/embed/djxkz7lFx8A"
              />
            </div>
            <div className="content">
              <br />
              <h3>Mengapa perlu membayar pajak kendaraan?</h3>
              <p>
                Mungkin sobat Redi bertanya-tanya, kenapa sih kita haris
                membayar kendaraan bermotor kita? kan kita sudah bayar buat
                membeli kendaraan tersebut, kok masih ada ‘iuran’ tahunannya?
                jadi, kalau kita melihat pada Undang-Undang Nomor 28 tahun 2009
                tentang Pajak Daerah dan Retribusi Daerah pengertian kendaraan
                bermotor adalah semua kendaraan beroda beserta gandengannya yang
                digunakan di semua jenis jalan darat, dan digerakkan oleh
                peralatan teknik berupa motor atau peralatan lainnya yang
                berfungsi untuk mengubah suatu sumber daya energi tertentu
                menjadi tenaga gerak kendaraan bermotor yang bersangkutan,
                termasuk alat-alat berat dan alat-alat besar yang dalam
                operasinya menggunakan roda dan motor dan tidak melekat secara
                permanen serta kendaraan bermotor yang dioperasikan di air. Atas
                kepemilikan dan atau penguasaaan kendaraan bermotor maka
                masyarakat ini yang akan dikenai pajak berupa pajak kendaraan
                bermotor (PKB). Kemudian mengutip dari laman bapenda jabar
                (2017), hasil dari pajak bermotor kita itu dibagi jadi 5 manfaat
                yaitu:
                <br />
                <br />
                1. Merupakan salah satu sumber pendapatan daerah.
                <br />
                2. Berguna untuk membiayai penyelenggaraan pemerintahan daerah.
                <br />
                3. Berguna untuk pembangunan dan atau pemeliharaan jalan serta
                peningkatan moda dan sarana transportasi umum.
                <br />
                4. Membantu peningkatan pendapatan Kabupaten/Kota.
                <br />
                5. Meningkatkan ketenangan dan kepastian hukum bagi wajib pajak.
                <br />
                <br />
                Nah jadi karena sobat redi pakai kendaraan, maka diperlukan
                akses jalan yang optimal juga kan? PKB inilah yang dananya akan
                dialirkan salah satunya buat pembangunan infrastruktur buat
                pengguna kendaraan itu sendiri. Selain itu juga sobat redi ikut
                perperan juga nih buat jadi bagian pembangunan
                fasilitas-fasilitas tempat tinggal sobat redi. Oh iya karena PKB
                termasuk pajak daerah, jadi semakin tinggi PKB yang di dapat
                suatu daerah, atau makin banyak pengguna kendaraan yang bayar
                pajak di suatu daerah, maka akan makin tinggi juga fasilitas
                pengguna kendaraan makin optimal.{" "}
              </p>
              <h3>Kapan dan bagaimana saya membayar pajak kendaraan saya? </h3>
              <p>
                Pembayaran pajak kendaraan dibagi menjadi dua, yaitu pembayaran
                tahunan dan pembayaran lima tahun sekali yang sekaligus
                penggantian pelat kendaraan.
                <br />
                <b>Pajak Kendaraan Bermotor Tahunan</b>
                <br />
                Pajak Kendaraan Bermotor Tahunan adalah pajak rutin yang harus
                dibayarkan setiap tahunnya seperti layaknya Pajak Penghasilan
                (PPh). Bisa dibayarkan secara offline yaitu datang ke samsat
                yang sesuai dengan daerah dikeluarkannya STNK pemilik atau
                online melalui e-samsat, e-commerce, atau pembayaran mobile
                banking juga sudah tersedia. namun untuk kertas stnk tetap harus
                datang ke samsat untuk dapat yang baru.
                <br />
                <b>Pajak Kendaraan Bermotor</b>
                <br />
                Lima Tahunan Pajak Kendaraan Bermotor Lima Tahunan adalah pajak
                rutin yang harus dibayarkan setiap lima tahun sekali. Pajak ini
                ditandai dengan pergantian pelat nomor kendaraan dan STNK.
                Khusus PKB lima tahunan, setiap wajib pajak harus datang ke
                kantor SAMSAT untuk melakukan pembayaran.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default PajakKendaraan;
