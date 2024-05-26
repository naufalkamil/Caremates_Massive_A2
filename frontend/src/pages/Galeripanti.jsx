import React, { useState } from 'react';
import Navbarfirst from '../components/Navbar';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion'; // tambahkan ini

const Galeripanti = () => {
  const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div style={backgroundStyle}>
      <style>
        {`
          @keyframes colorChange {
            0% { background-position: 0% 50%; }
            25% { background-position: 25% 50%; }
            50% { background-position: 100% 50%; }
            75% { background-position: 75% 50%; }
            100% { background-position: 0% 50%; }
          }

          .search-input {
            font-size: 16px;
            font-family: 'Open Sans';
            color: #333;
            margin-right: 0;
            outline: none;
            border: none;
            background: transparent;
            padding-right: 0;
            font-size: 20px
          }
          .search-input:focus {
            font-size: 20px; /* Ukuran font lebih besar saat fokus */
          }
        `}
      </style>

      {/* Komponen Navbar */}
      <Navbarfirst />

      <section className="home" style={GaleripantiStyle}>
        <div className="row justify-content-center text-center">
          <div className="col justify-content-center">
          </div>
        </div>
        <div className="row">
          <h2 style={{fontWeight: '700', fontSize: '36px', margin:'0', padding:'1% 2% 1% 2%'}}>Galeri Kami</h2>
        </div>
      </section>
      <section style={cardgaleriStyle}>
          
      </section>
    </div>
  );
};

// Objek gaya untuk latar belakang
const backgroundStyle = {
  height: '100vh', // Memastikan latar belakang menutupi seluruh tinggi viewport
  background: 'linear-gradient(45deg, #00cbb7, #0098d9, #00baa7, #0081b8)',
  animation: 'colorChange 12s ease-in-out infinite',
  backgroundSize: '200% 200%',
  backgroundPosition: '0',
  fontFamily: '"Open Sans", sans-serif',
  margin: 0, // Menghapus margin default dari body
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  color: 'white',
};

const GaleripantiStyle = {
    position: 'fixed',
    top: '60%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '88%',
    height: '88%',
    margin: 0,
    borderRadius: '20px',
    zIndex: 2,
    marginBottom:'100%'
};

const cardgaleriStyle = {
    width: '100%',
}
export default Galeripanti;
