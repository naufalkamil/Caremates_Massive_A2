import React, { useState, useEffect } from 'react';

const Buatakun1 = ({ onNavigate }) => {
  const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value);
  };

  useEffect(() => {
    // Add the no-scroll class to the body element
    document.body.classList.add('no-scroll');

    // Remove the no-scroll class when the component unmounts
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, []);
  
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
            <div className="row" style={rowStyle}>
                <div className="col" style={{display: 'flex', justifyContent: 'center', alignItems: 'center',padding:'1%',background: 'linear-gradient(90deg, rgba(15, 180, 170, 0.60) 0.02%, rgba(9, 135, 183, 0.60) 69.01%)', margin: '0', borderRadius: '20px 63px 0px 0px'}}>
                    <p style={pnoStyle}>1</p>
                    <p style={{fontWeight: '400', fontSize:'24px', margin:'0'}}>Data Lembaga</p>
                </div>
                <div className="col"  onClick={() => onNavigate('Buatakun3')} style={{display: 'flex', justifyContent: 'center', alignItems: 'center', padding:'1%'}}>
                  <p style={pnoStyle}>2</p>
                    <p style={{fontWeight: '400', fontSize:'24px',color: '#4D96B6',margin:'0'}}>Verifikasi Data</p>
                </div>
                <div className="col"  onClick={() => onNavigate('Buatakun3')} style={{display: 'flex', justifyContent: 'center', alignItems: 'center', padding:'1%'}}>
                    <p style={pnoStyle}>3</p>
                    <p style={{fontWeight: '400', fontSize:'24px',color: '#4D96B6',margin:'0'}}>Data PJ Lembaga</p>
                </div>
            </div>
            <div className="col">
              <p style={{ textAlign:'center', fontSize:'18px',marginBottom:'0', marginTop:'0', fontWeight: '400'}}>Tahap 1</p>
            </div>
            <div className="col">
              <p style={{ textAlign:'center', fontSize:'28px',marginBottom:'0', fontWeight: '400'}}>Data Lembaga</p>
            </div>
            <div className="row" style={{ display: 'flex', justifyContent: 'space-between', margin:'1%'}}>
              <div className="col-5">
                <p style={{margin:'0 0 0 1%', fontSize: '18px'}}>Nama Lembaga</p>
                <input style={{padding:'10px',border:'0', borderColor: 'transparent', outline:'none', borderRadius:'40px', width:'100%' }} type="text" name="nama" id="" placeholder= "Masukkan Nama Lembaga" />
              </div>
              <div className="col-5">
                <p style={{margin:'0 0 0 1%', fontSize:'18px'}}>Alamat Lembaga</p>
                <input style={{padding:'10px',border:'0', borderColor: 'transparent', outline:'none', borderRadius:'40px', width: '100%'}} type="text" name="nama" id="" placeholder= "Masukkan Alamat Lembaga" />
              </div>
            </div>
            <div className="row" style={{ display: 'flex', justifyContent: 'space-between', margin:'1%'}}>
              <div className="col-5">
                <p style={{margin:'0 0 0 1%', fontSize: '18px'}}>Alamat Email Resmi Lembaga</p>
                <input style={{padding:'10px',border:'0', borderColor: 'transparent', outline:'none', borderRadius:'40px', width:'100%' }} type="text" name="nama" id="" placeholder= "Masukkan Email Lembaga" />
              </div>
              <div className="col-5">
                <p style={{margin:'0 0 0 1%', fontSize:'18px'}}>Nomor Telepon Lembaga</p>
                <input style={{padding:'10px',border:'0', borderColor: 'transparent', outline:'none', borderRadius:'40px', width: '100%'}} type="text" name="nama" id="" placeholder= "Masukkan Alamat Lembaga" />
              </div>
            </div>
            <div className="row" style={{ display: 'flex', justifyContent: 'space-between', margin:'1%'}}>
              <div className="col-5">
                <p style={{margin:'0 0 0 1%', fontSize: '18px'}}>Website Lembaga</p>
                <input style={{padding:'10px',border:'0', borderColor: 'transparent', outline:'none', borderRadius:'40px', width:'100%' }} type="text" name="nama" id="" placeholder= "Alamat Website Lembaga" />
              </div>
              <div className="col-5">
                <p style={{margin:'0 0 0 1%', fontSize:'18px'}}>Media Sosial Lembaga</p>
                <input style={{padding:'10px',border:'0', borderColor: 'transparent', outline:'none', borderRadius:'40px', width: '100%'}} type="text" name="nama" id="" placeholder= "Nama Media Sosial" />
              </div>
            </div>
            <div className="row" style={{ display: 'flex', justifyContent: 'space-between', margin:'1%'}}>
              <div className="col-5">
                <p style={{margin:'0 0 0 1%', fontSize: '18px'}}>Buat Kata Sandi</p>
                <input style={{padding:'10px',border:'0', borderColor: 'transparent', outline:'none', borderRadius:'40px', width:'100%' }} type="text" name="nama" id="" placeholder= "Buat Kata Sandi" />
              </div>
              <div className="col-5">
                <p style={{margin:'0 0 0 1%', fontSize:'18px'}}>Konfirmasi Kata Sandi</p>
                <input style={{padding:'10px',border:'0', borderColor: 'transparent', outline:'none', borderRadius:'40px', width: '100%'}} type="text" name="nama" id="" placeholder= "Konfimasi Kata Sandi" />
              </div>
            </div>
        </div>
      </section>
      <section style={buttonContainerStyle}>
      <div className="row" style={{width: '100%',justifyContent:'space-between'}}>
          <div className="col-2" style={{display:'flex', justifyContent:'center'}}>
            <button style={button1Style}>Sudah Buat Akun</button>
          </div>
          <div className="col-2" style={{display:'flex', justifyContent:'center'}}>
          <button style={button2Style}>Selanjutnya</button>
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
  height: '77%',
  margin: 0,
  padding: 0,
  borderRadius: '20px',
  backgroundColor: '#ffffff6b',
  zIndex: 2,
};

const rowStyle = {
  width: '100%', 
  margin:'0',  
  padding:'0', 
  background: '#BFF9F3', 
  borderRadius: '20px 20px 0px 0px'
};

const pnoStyle = {
  fontWeight: '400', 
  fontSize:'24px', 
  margin:'0', 
  color: '#4D96B6', 
  backgroundColor:'#fff', 
  width: '40px', 
  height: '40px', 
  borderRadius:'50%', 
  justifyContent:'center', 
  textAlign:'center',
  marginRight: '2%'
};

const buttonContainerStyle = {
  marginTop: 'auto', // Pushes the button container to the bottom
  width: '100%',
  display: 'flex',
  justifyContent: 'space-around',
  padding: '10px 0',
  marginBottom:'1%'
};

const button1Style = {
  padding: '10px 20px',
  border: 'none',
  borderRadius: '40px',
  backgroundColor: '#4D96B6',
  color: 'white',
  cursor: 'pointer',
  fontSize: '20px'
};
const button2Style = {
  padding: '10px 20px',
  border: 'none',
  borderRadius: '40px',
  backgroundColor: '#fff',
  color: '#4D96B6',
  cursor: 'pointer',
  fontSize: '20px'
};

export default Buatakun1;
