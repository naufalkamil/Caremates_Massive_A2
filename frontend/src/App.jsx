import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Beranda from "./pages/beranda";
import Beridonasi from "./pages/Beridonasi";
import Pusatbantuan from "./pages/Pusatbantuan";
import Tentangkami from "./pages/Tentangkami";
import Buatakun1 from "./pages/Buatakun1";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Beranda />} />
        <Route path="/beridonasi" element={<Beridonasi />} />
        <Route path="/tentangkami" element={<Tentangkami />} />
        <Route path="/pusatbantuan" element={<Pusatbantuan />} />
        <Route path="/buatakun1" element={<Buatakun1 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
