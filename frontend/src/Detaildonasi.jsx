import React, { useState } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { Button, Modal, Col, Row  } from 'react-bootstrap';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import { BsFillPersonFill } from "react-icons/bs";


const Detaildonasi = () => {
  // Fungsi untuk menampilkan slide secara otomatis
  
  const donationCollected = 10000000; // Variabel untuk donasi terkumpul
  const donationNeeded = 25000000; // Variabel untuk donasi dibutuhkan

  const incomeData = [
    {
      id: 1,
      description: "Donation from John Doe",
      amount: 50000,
      date: new Date('2024-05-27T00:00:00Z'),
      details: "Donated for educational needs",
    },
  ];
  
  const expenseData = [
    {
      id: 1,
      description: "Groceries",
      amount: 20000,
      date: new Date('2024-05-26T00:00:00Z'),
      details: "Bought groceries from Indomaret",
    },
  ];
  const [showIncomeModal, setShowIncomeModal] = useState(false);
const [showExpenseModal, setShowExpenseModal] = useState(false);
const [selectedIncome, setSelectedIncome] = useState(null);
const [selectedExpense, setSelectedExpense] = useState(null);

  

  // Jalankan fungsi showSlides setelah konten dimuat
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

        }
        `}
      </style>

      {/* Background atas */}
      <div className="background-atas" style={backgroundAtasStyle}>
      <h2 style={{fontFamily: '"Open Sans", sans-serif',fontWeight: '700', fontSize: '36px'}}>Yayasan Yatim Piatu Roudlotul Jannah</h2>
      </div>

      {/* Background Square */}
      <div className="background-square" style={backgroundSquareStyle}></div>

      {/* Bagian donasi */}
      <section className="detail-donasi">
        <div className="background-kuning" style={backgroundkuningStyle}>
            <div style={{position : "fixed", paddingTop:"10px", paddingLeft:'20px'}}>
            <h3 style={{fontFamily: '"Open Sans", sans-serif',fontWeight: '700', fontSize: '30px', color:"black"}}>Detail Donasi</h3>
            
            <div className="progres-bar" style={{width:'100%'}}>
            <ProgressBar now={donationCollected / donationNeeded * 100}/>
            <ListGroup >
                <ListGroupItem style={bglist}><span style={{ fontWeight: 'bold', color:'black' }}>Donasi Terkumpul:</span> Rp. {donationCollected}</ListGroupItem>
                <ListGroupItem style={bglist}>Donasi Dibutuhkan: Rp. {donationNeeded}</ListGroupItem>
            </ListGroup>
            
            </div>

            </div>
            <div className="yayasan" style={{paddingTop:"170px"}} >
                <p style={{fontFamily: 'Open Sans', fontWeight: '200', fontSize: '110%'}}>Donasi yang Anda berikan akan digunakan untuk mendukung kebutuhan dasar dan fasilitas untuk hafiz 
                    Qur’an yang memadai. Setiap kontribusi sangat berarti untuk memberikan masa depan yang lebih cerah 
                    dan penuh harapan bagi mereka yang kurang beruntung.  <span style={{ fontWeight: 'bold' }}>Terima kasih atas kebaikan dan kepedulian Anda.</span></p>
            </div>
            <div className="row">
                <div className='col-6'>
                  <p style={{textAlign:'center', fontFamily: 'Open Sans', fontWeight: '300', fontSize:'20px'}}>Detail Pemasukan</p>
                  <hr style={{border:'4px solid', color:'#4D96B6',borderRadius: '30px'}}/>
                  <div className='row' style={{background:"rgba(255, 255, 255, 0.25)", borderRadius:"50px",height:'18%'}}>
                  <Row className="align-items-center">
                    <Col xs="auto">
                      <BsFillPersonFill style={{ width: "35px", height: "35px" }} />
                    </Col>
                    <Col>
                      <p style={{marginTop:'2%', fontSize:'90%'}}>Kawan caremates berdonasi Rp.5000<br/><span style={{fontSize:'70%'}}>5 jam yang lalu</span></p> 
                    </Col>
                  </Row>
                  </div>
                  <div className='row' style={{background:"rgba(255, 255, 255, 0.25)", borderRadius:"50px", marginTop:'2%',height:'18%'}}>
                  <Row className="align-items-center">
                    <Col xs="auto">
                      <BsFillPersonFill style={{ width: "35px", height: "35px" }} />
                    </Col>
                    <Col>
                      <p style={{marginTop:'2%', fontSize:'90%'}}>Kawan caremates berdonasi Rp.5000<br/><span style={{fontSize:'70%'}}>5 jam yang lalu</span></p> 
                    </Col>
                  </Row>
                  </div>
                  <div className='row' style={{background:"rgba(255, 255, 255, 0.25)", borderRadius:"50px", marginTop:'2%',height:'18%'}}>
                  <Row className="align-items-center">
                    <Col xs="auto">
                      <BsFillPersonFill style={{ width: "35px", height: "35px" }} />
                    </Col>
                    <Col>
                      <p style={{marginTop:'2%', fontSize:'90%'}}>Kawan caremates berdonasi Rp.5000<br/><span style={{fontSize:'70%'}}>5 jam yang lalu</span></p> 
                    </Col>
                  </Row>
                  </div>
                </div>
                <div className='col-6'>
                  <p style={{textAlign:'center', fontFamily: 'Open Sans', fontWeight: '300', fontSize:'20px'}}>Detail Pengeluaran</p>
                  <hr style={{border:'4px solid', color:'white',borderRadius: '30px'}}/>
                  <div>
                    <Row className="justify-content-between">
                      <Col> Total Donasi Terkumpul </Col>
                      <Col className="text-end"> Rp. 100.000 </Col>
                    </Row>
                    <Row className="justify-content-between">
                      <Col> Biaya Layanan Dompet Digital </Col>
                      <Col className="text-end"> Rp. 10.000 </Col>
                    </Row>
                    <Row className="justify-content-between">
                      <Col> Donasi Tercairkan </Col>
                      <Col className="text-end"> Rp. 90.000 </Col>
                    </Row>
                    <Row className="justify-content-between">
                      <Col> Donasi Belum Tercairkan </Col>
                      <Col className="text-end"> Rp. 0 </Col>
                    </Row>
        </div>                   
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
  backgroundPosition: '0% 50%',
  fontFamily: '"Open Sans", sans-serif',
  margin: 0, // Menghapus margin default dari body
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  color: 'white',
};

const backgroundAtasStyle = {
    marginBottom: '20px',
    padding: '20px',
    margin: '2%',
    position: 'fixed',
    width: '90%',
    zIndex: 3,
    borderRadius: '20px',
    background: 'rgba(255, 255, 255, 0.42)',
    boxShadow: '0px 0px 24px -5px rgba(0, 0, 0, 0.25)',
    WebkitBackdropFilter: 'blur(20px)', // Backdrop filter for Chrome, Safari, and Opera
    backdropFilter: 'blur(20px)', // Backdrop filter for Firefox
    border: '1px solid rgba(255, 255, 255, 0.77)',
  };
const backgroundSquareStyle = {
    position: 'fixed',
    top: '55%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '88%',
    height: '85%',
    margin: 0,
    borderRadius: '20px',
    backgroundColor: '#ffffff6b',
    zIndex: 1,
  };

  const backgroundkuningStyle = {
    position: 'fixed',
    top: '32%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    height: '20%',
    margin: 0,
    borderRadius: '20px',
    backgroundColor: '#FFCC15',
    zIndex: 1,
  };

  const bglist = {
    backgroundColor : 'transparent',
    border: '1px',
  }

export default Detaildonasi;
