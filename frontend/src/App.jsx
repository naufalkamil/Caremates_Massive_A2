import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Beranda from "./pages/beranda";
import Beridonasi from "./pages/Beridonasi";
import Pusatbantuan from "./pages/Pusatbantuan";
import Tentangkami from "./pages/Tentangkami";
import Buatakun1 from "./pages/Buatakun1";
import Buatakun2 from "./pages/Buatakun2";
import Buatakun3 from "./pages/Buatakun3";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Beranda />} />
        <Route path="/beridonasi" element={<BeriDonasi />} />
        <Route path="/tentangkami" element={<Tentangkami />} />
        <Route path="/pusatbantuan" element={<Pusatbantuan />} />
        <Route path="/buatakun1" element={<Buatakun1 />} />
        <Route path="/buatakun2" element={<Buatakun2 />} />
        <Route path="/buatakun3" element={<Buatakun3 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;