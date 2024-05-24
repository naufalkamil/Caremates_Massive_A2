import React, { useState } from 'react';

const Buatakun1 = () => {
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
          body.no-scroll {
            overflow: hidden;
          }
        `}
      </style>
      {/* Bagian home dengan slideshow dan ikon */}
      <section style={{width: '100%'}}>
        <div className="row" style={{paddingTop:'1%'}}>
            <div className="col-1 justify-content-end align-content-center" style={{marginLeft: '20px'}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
                <path d="M12.5 30L27.5 15M12.5 30L27.5 45M12.5 30H47.5" stroke="white" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            </div>
            <div className="col-10" style={{alignContent: 'center', justifyContent:'center', textAlign: 'center'}}>
                <p style={{fontSize: '36px', fontWeight: '800', justifyContent: 'center', alignContent: 'center'}}>Buat Akun Lembaga</p>
            </div>
        </div>
      </section>
      <section className="home" style={Buatakun1Style}>
        <div className="container" style={{width: '100%',  padding:'0', margin:'0'}}>
            <div className="row" style={{width: '100%', margin:'0',  padding:'0', background: '#BFF9F3', borderRadius: '20px 20px 0px 0px'}}>
                <div className="col" style={{padding:'1%',background: 'linear-gradient(90deg, rgba(15, 180, 170, 0.60) 0.02%, rgba(9, 135, 183, 0.60) 69.01%)', margin: '0', borderRadius: '20px 63px 0px 0px'}}>
                    <p style={{fontWeight: '400', fontSize:'24px'}}>Data Lembaga</p>
                </div>
                <div className="col" style={{ padding:'1%'}}>
                    <p style={{fontWeight: '400', fontSize:'24px',color: '#4D96B6'}}>Data PJ Lembaga</p>
                </div>
                <div className="col" style={{ padding:'1%'}}>
                    <p style={{fontWeight: '400', fontSize:'24px',color: '#4D96B6'}}>Verifikasi Data</p>
                </div>
            </div>
        </div>
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

const Buatakun1Style = {
    position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '77%',
  height: '75%',
  margin: 0,
  padding: 0,
  borderRadius: '20px',
  backgroundColor: '#ffffff6b',
  zIndex: 2,
};

export default Buatakun1;
