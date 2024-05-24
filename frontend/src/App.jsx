import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Beranda from "./pages/beranda";
import Beridonasi from "./pages/Beridonasi";
import Pusatbantuan from "./pages/Pusatbantuan";
import Tentangkami from "./pages/Tentangkami";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Beranda />} />
        <Route path="/beridonasi" element={<Beridonasi />} />
        <Route path="/tentangkami" element={<Tentangkami />} />
        <Route path="/pusatbantuan" element={<Pusatbantuan />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
