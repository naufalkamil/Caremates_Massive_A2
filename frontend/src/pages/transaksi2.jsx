import React from 'react';
import Navbarfirst from '../components/Navbar';
import Button from 'react-bootstrap/Button';
import barcode from '../img/img-transaksi2/barcode.png'
import qris from '../img/img-transaksi2/QRIS.png'


const transaksi2 = () => {
  

  React.useEffect(() => {

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
          .label {
            background-color: #70b3ba;
            border-radius: 20px;
            box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
            padding: 25px 60px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          
          .label-text {
            font-size: 30px;
            font-weight: bold;
            color: #ffff;
          }
          
        `}
      </style>

      {/* Komponen Navbar */}
      <Navbarfirst />

      {/* Bagian Transaksi2 */}
      <section className="barcode" style={{zIndex: "1", width: "65%"}}>
        <div style={{ display: 'flex', paddingTop: '14%'}}>
            <div className="col-6 align-content-center text-center" style={{justifyContent:'center', paddingTop: '0%' }}>
                <div>
                    <h2 style={{fontWeight:'500', fontSize:'30px', color:'black'}}>Caremates</h2>
                    <p style={{fontWeight:'200', fontSize:'15px', color:'black'}}>Donasi Panti</p>
                    <img src={barcode} alt="logo" style={{width:'70%'}}/>
                    <br></br>
                    <img src={qris} alt="qris" style={{width:'30%', marginTop:'20px'}}/>
                </div>

            </div>
            <div className="col-6" style={{justifyContent:'center',paddingLeft:'16%',paddingTop: '14%' }} >
              <p>ID Pembayaran: 12541-422154-12</p>
              <label className="label">
                  <span className="label-text">Rp. 10.000</span>
              </label>
              <p style={{marginTop:'10px'}}>Waktu Pembayaran Tersisa : 8.00.15</p>
              <div style={{paddingTop:'10px' ,paddingLeft:'10px'}}>
              <Button variant="warning" style={{ width: '100%', height: '100%'}}>Download QRIS</Button>{' '}
              </div>
            </div>
        </div>
        
      </section>

      
    </div>
  );
};

const backgroundStyle = {
  height: '100vh',
  background: 'linear-gradient(45deg, #00cbb7, #0098d9, #00baa7, #0081b8)',
  animation: 'colorChange 12s ease-in-out infinite',
  backgroundSize: '500% 500%',
  backgroundPosition: '0% 50%',
  fontFamily: '"Open Sans", sans-serif',
  margin: 0,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  color: 'white',
};

export default transaksi2;
