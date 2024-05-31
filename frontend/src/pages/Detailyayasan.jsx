import React, { useState } from 'react';
import Navbarfirst from '../components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import galeri1 from '../img/img-galeri/galeri1.jpg';

const Detailyayasan = () => {
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

          .no-scrollbar {
            -ms-overflow-style: none;  /* Internet Explorer 10+ */
            scrollbar-width: none;  /* Firefox */
          }
          
          .no-scrollbar::-webkit-scrollbar {
            display: none;  /* Safari and Chrome */
          }

          .image-container img {
            max-height: 90%;
            width: 90%;
            display: block;
            margin: 0 auto;
          }
        `}
      </style>

      <Navbarfirst />

      <section className="home pt-4 mb-0" style={DetailyayasanStyle}>
        <div className="row m-2" style={{ height: '400px' }}>
          <div className="col-5 p-0 m-0">
            <p style={{ fontSize: '30px', fontWeight: 700 }}>Yayasan Yatim Piatu Roudlotul Jannah</p>
            <div className="row">
              <div className="col-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="37" height="32" viewBox="0 0 37 32" fill="none">
                  <path d="M18.5 15.3333C17.4779 15.3333 16.4975 14.9821 15.7747 14.357C15.0519 13.7319 14.6459 12.884 14.6459 12C14.6459 11.1159 15.0519 10.2681 15.7747 9.64297C16.4975 9.01785 17.4779 8.66666 18.5 8.66666C19.5222 8.66666 20.5026 9.01785 21.2253 9.64297C21.9481 10.2681 22.3542 11.1159 22.3542 12C22.3542 12.4377 22.2545 12.8712 22.0608 13.2756C21.8671 13.68 21.5832 14.0475 21.2253 14.357C20.8675 14.6665 20.4426 14.9121 19.975 15.0796C19.5074 15.2471 19.0062 15.3333 18.5 15.3333ZM18.5 2.66666C15.6379 2.66666 12.893 3.64999 10.8692 5.40033C8.84535 7.15067 7.70837 9.52464 7.70837 12C7.70837 19 18.5 29.3333 18.5 29.3333C18.5 29.3333 29.2917 19 29.2917 12C29.2917 9.52464 28.1547 7.15067 26.1309 5.40033C24.1071 3.64999 21.3622 2.66666 18.5 2.66666Z" fill="white"/>
                </svg>
              </div>
              <div className="col">
                <p>HM4C+26X, Salam, Suko, Kec. Sidoarjo, Kabupaten Sidoarjo, Jawa Timur 61224</p>
              </div>
            </div>
            <div className="col image-container" style={{ height: '300px', overflow: 'hidden' }}>
              <img style={{borderRadius:'30px'}} src={galeri1} alt="" />
            </div>
          </div>
          <div className="col p-0 rounded-4 no-scrollbar" style={textColStyle}>
            <p style={{ fontWeight: '400', fontSize: '18px', margin: '3%' }}>
              Yayasan Panti Asuhan Roudlotul Jannah adalah sebuah rumah amal yang menjadi tempat perlindungan dan pembinaan bagi anak-anak yang kurang beruntung di kabupaten Sidoarjo. Panti asuhan ini didirikan dengan tujuan memberikan perlindungan, pendidikan, dan kasih sayang kepada anak-anak yatim dan kurang mampu dari berbagai latar belakang. 
              <br />Di Yayasan Panti Asuhan Roudlotul Jannah, saat ini terdapat 30 anak asuh yang tinggal di sini. Mereka memiliki rentang usia antara 5 hingga 15 tahun. Anak-anak ini berasal dari berbagai latar belakang, seperti yatim piatu, anak jalanan, dan dari keluarga miskin di sekitar wilayah. Setiap anak mendapatkan perawatan yang holistik, termasuk akses pendidikan formal, pelayanan kesehatan, serta bimbingan spiritual.
              <br />Sumber pendapatan panti asuhan ini berasal dari sumbangan sukarela dan dana bantuan dari individu, perusahaan, dan lembaga amal. Selain itu, panti asuhan juga mengadakan kegiatan penggalangan dana seperti lelang amal dan acara amal lainnya.
              <br />Donatur sangat dibutuhkan untuk memastikan kelangsungan operasional panti asuhan ini. Donasi dapat berupa uang tunai, pakaian, perlengkapan sekolah, dan makanan. Setiap sumbangan dari donatur dianggap sebagai bantuan berharga yang membantu menciptakan masa depan yang lebih baik bagi anak-anak ini.
              <br />Yayasan Panti Asuhan Roudlotul Jannah berkomitmen untuk memberikan cinta dan perhatian kepada setiap anak asuh, membimbing mereka untuk memiliki masa depan yang lebih cerah, dan terus berupaya memberikan pengaruh positif bagi komunitas sekitar.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

// Objek gaya untuk latar belakang
const backgroundStyle = {
  height: '100vh',
  background: 'linear-gradient(45deg, #00cbb7, #0098d9, #00baa7, #0081b8)',
  animation: 'colorChange 12s ease-in-out infinite',
  backgroundSize: '200% 200%',
  backgroundPosition: '0',
  fontFamily: '"Open Sans", sans-serif',
  margin: 0,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  color: 'white',
};

const DetailyayasanStyle = {
  padding: '10px',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '88%',
  height: '85%',
  marginTop: '3%',
  borderRadius: '20px',
  zIndex: 2,
};

const textColStyle = {
  background: 'rgba(255, 255, 255, 0.25)',
  overflowY: 'scroll',
  height: '100%',
  padding: '10px',
  borderRadius: '20px',
};

export default Detailyayasan;
