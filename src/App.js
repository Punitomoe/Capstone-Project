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
import PajakKendaraan from "./pages/PajakKendaraan";

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
          <Route path="menu/asuransi" element={<Asuransi />} />
          <Route path="menu/dokumen" element={<LegalDokumen />} />
          <Route
            path="/menu/pajak/pajakKendaraan"
            element={<PajakKendaraan />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
