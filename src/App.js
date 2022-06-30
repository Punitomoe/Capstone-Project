import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Menu from "./pages/menu/Menu";
import About from "./pages/about/About";
import Error from "./pages/Error";
import CustomerService from "./pages/cs/CustomerService";
import KalkulatorPajak from "./pages/calculator/kalkulatorPajak";
import Perpajakan from "./pages/menu/submenu/Perpajakan";
import Asuransi from "./pages/menu/submenu/Asuransi";
import LegalDokumen from "./pages/menu/submenu/LegalDokumen";
import PajakKendaraan from "./pages/PajakKendaraan.tsx";
import PajakKaryawan from "./pages/PajakKaryawan.tsx";
import PajakUsaha from "./pages/PajakUsaha.tsx";
import AsuransiKendaraan from "./pages/AsuransiKendaraan.tsx";
import AsuransiBPJS from "./pages/AsuransiBPJS.tsx";
import KTP from "./pages/LegalDokumenKTP.tsx";
import SIM from "./pages/LegalDokumenSIM.tsx";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/customerService" element={<CustomerService />} />
          <Route path="/kalkulatorPajak" element={<KalkulatorPajak />} />
          <Route path="/error" element={<Error />} />
          <Route path="/menu/pajak" element={<Perpajakan />} />
          <Route path="/menu/asuransi" element={<Asuransi />} />
          <Route path="/menu/dokumen" element={<LegalDokumen />} />
          <Route
            path="/menu/pajak/PajakKendaraan"
            element={<PajakKendaraan />}
          />
          <Route path="/menu/pajak/PajakKaryawan" element={<PajakKaryawan />} />
          <Route path="/menu/pajak/PajakKUsaha" element={<PajakUsaha />} />
          <Route
            path="/menu/asuransi/AsuransiKendaraan"
            element={<AsuransiKendaraan />}
          />
          <Route
            path="/menu/asuransi/AsuransiBPJS"
            element={<AsuransiBPJS />}
          />
          <Route path="/menu/dokumen/KTP" element={<KTP />} />
          <Route path="/menu/dokumen/SIM" element={<SIM />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
