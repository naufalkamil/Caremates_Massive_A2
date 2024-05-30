import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Beranda from "./pages/beranda";
import Beridonasi from "./pages/Beridonasi";
import Pusatbantuan from "./pages/Pusatbantuan";
import Tentangkami from "./pages/Tentangkami";
import Buatakun1 from "./pages/Buatakun1";
import Buatakun2 from "./pages/Buatakun2";
import Buatakun3 from "./pages/Buatakun3";
import Galeripanti from "./pages/Galeripanti";
import Transaksi2 from "./pages/transaksi2";
import FungsiPopup from "./pages/login";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Beranda />} />
        <Route path="/beridonasi" element={<Beridonasi />} />
        <Route path="/tentangkami" element={<Tentangkami />} />
        <Route path="/pusatbantuan" element={<Pusatbantuan />} />
        <Route path="/buatakun1" element={<Buatakun1 />} />
        <Route path="/buatakun2" element={<Buatakun2 />} />
        <Route path="/buatakun3" element={<Buatakun3 />} />
        <Route path="/galeripanti" element={<Galeripanti />} />
        <Route path="/transaksi2" element={<Transaksi2 />} />
        <Route path="/login" element={<FungsiPopup />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
