import React from 'react';
import Navbarfirst from '../components/Navbar';
import slide1 from '../img/img-home/slide 1.png';
import slide2 from '../img/img-home/slide 2.png';
import slide3 from '../img/img-home/slide 3.png';
import donate1 from '../img/img-home/donate 1.png';

const Beranda = () => {
  // Fungsi untuk menampilkan slide secara otomatis
  const showSlides = () => {
    const slides = document.querySelectorAll('.slide');
    let slideIndex = 0;

    setInterval(() => {
      slides.forEach((slide) => {
        slide.classList.remove('active');
      });

      slides[slideIndex].classList.add('active');

      slideIndex++;
      if (slideIndex >= slides.length) {
        slideIndex = 0;
      }
    }, 3500);
  };

  // Jalankan fungsi showSlides setelah konten dimuat
  React.useEffect(() => {
    showSlides();
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

          /* Tambahkan gaya CSS untuk slideshow dan ikon */
          .home {
            width: 90%;
            margin-top: 0%;
            z-index: 2;
            align-item: center;
            justify-content: center;
            text-align: center;
          }

          .container1 {
            height: 100vh;
          }

          .slideshow-container {
            position: relative;
            max-width: 80%;
            overflow: hidden;
            border-radius: 8px;
          }

          .slide {
            width: 80%;
            height: auto;
            opacity: 0;
            transition: opacity 1s ease-in-out;
            position: absolute;
          }

          .slide img {
            width: 100%;
            justify-content: center;
          }

          .slide.active {
            opacity: 1;
          }

          .icon {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            justify-content: center;
          }

          .icon img {
            width: 100%;
            border-radius: 50%;
            margin-top: 15px;
            margin-bottom: 10px; 
          }

          .button-daftar {
            background-color: #4D96B6;
            color: #ffffff;
            font-weight: bold;
            padding: 10px 20px;
            border-radius: 20px;
            box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
            cursor: pointer;
            transition: background-color 0.3s ease;
            margin-bottom: 1%;
          }

          .button-daftar:hover {
            background-color: #155d82;
          }
        `}
      </style>

      {/* Komponen Navbar */}
      <Navbarfirst />

      {/* Bagian home dengan slideshow dan ikon */}
      <section className="home">
        <div className="container1 justify-content-center" style={{ display: 'flex', paddingTop: '12%'}}>
          <div className="slideshow-container col-md-9">
            <div className="slide active">
              <img src={slide1} alt="slide 1" />
            </div>
            <div className="slide">
              <img src={slide2} alt="slide 2" />
            </div>
            <div className="slide">
              <img src={slide3} alt="slide 3" />
            </div>
          </div>
          <div className="icon col-md-4 justify-content-center ">
            <img src={donate1} alt="icon" />
            <div className="button-daftar">Daftarkan Lembaga Anda</div>
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

export default Beranda;