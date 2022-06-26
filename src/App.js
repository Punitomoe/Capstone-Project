import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Error from "./pages/Error";
import CustomerService from "./pages/CustomerService";
import KalkulatorPajak from "./pages/kalkulatorPajak";
import PajakKendaraan from "./pages/PajakKendaraan";
import Asuransi from "./pages/Asuransi";
import LegalDokumenKTP from "./pages/LegalDokumenKTP";
import AsuransiBPJS from "./pages/AsuransiBPJS";

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
          <Route path="/menu/pajak" element={<PajakKendaraan />} />
          <Route path="/menu/asuransi" element={<AsuransiBPJS />} />
          <Route path="/menu/dokumen" element={<LegalDokumenKTP />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
