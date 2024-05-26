import React from 'react';
import Navbarfirst from '../components/Navbar';
import { BsEnvelope, BsInstagram, BsWhatsapp  } from "react-icons/bs";
import logo from '../img/img-tentangkami/logo.png'

const tentangkami = () => {
  
  React.useEffect(() => {

  }, []);

  const iconStyle = {
    color: '#4D96B6',
    fontSize: '50px',
    backgroundColor: 'white',
    padding: '10px',
    borderRadius: '40%',
    display: 'inline-block',
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

        }

        `}
      </style>

      {/* Komponen Navbar */}
      <Navbarfirst />

      {/* Bagian logo dan tentang kami */}
      <section className="about">
        <div style={{ display: 'flex', paddingTop: '15%'}}>
            <div className='row'>
                <div className=" logo col-md-4">
                    <img src={logo} alt="logo" style={{marginTop : '30px', marginRight : '200px',
                        marginLeft : '300px'}}/>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '50px', paddingLeft:'15%' }}>
                    <BsEnvelope style={iconStyle} />
                    <BsInstagram style={iconStyle} />
                    <BsWhatsapp style={iconStyle} />
                </div>
            </div>
            <div style={{display:'flex'}}>
                <p style={{color: 'white', fontFamily: 'Open Sans',
                    textAlign:'justify',
                    fontSize: '25px',
                    fontStyle: 'normal',
                    fontWight: '400',
                    lineHeight: 'normal',
                    marginBottom: '0',
                    paddingRight: '20%'}}> Caremates adalah sebuah inisiatif yang lahir dari tekad untuk membangun jaringan 
                    kemanusiaan yang inklusif dan berkelanjutan. Kami hadir sebagai platform yang menghubungkan 
                    para dermawan dengan lebih dari 150 lembaga panti asuhan di seluruh Indonesia, dengan tujuan 
                    utama menciptakan kesejahteraan bagi saudara-saudara kita yang membutuhkan. Melalui kolaborasi 
                    yang kuat dengan lembaga-lembaga tersebut, kami memastikan bahwa donasi Anda disalurkan secara 
                    efisien dan efektif kepada mereka yang membutuhkan. Caremates tidak hanya sekadar sebuah wadah 
                    untuk memberikan bantuan, tetapi juga sebuah wadah untuk menginspirasi dan mendorong perubahan 
                    positif dalam masyarakat. Dengan semangat kebersamaan dan komitmen yang teguh, kami berupaya 
                    menjadi agen perubahan yang membawa manfaat bagi seluruh komunitas.</p>
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
  backgroundPosition: '0% 50%',
  fontFamily: '"Open Sans", sans-serif',
  margin: 0, // Menghapus margin default dari body
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  color: 'white',
};

export default tentangkami;
