import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css"; // Import FontAwesome

const Transaksi1 = () => {
  const [donationAmount, setDonationAmount] = useState("");

  const handleButtonClick = (amount) => {
    setDonationAmount(`Rp.${amount}`);
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    // Remove non-numeric characters except "Rp."
    const numericValue = value.replace(/[^0-9]/g, "");
    setDonationAmount(`Rp.${numericValue}`);
  };

  return (
    <section className="home" style={styles.home}>
      <style>
        {`
          body {
            background: linear-gradient(
              45deg,
              #00cbb7da,
              #0098d9de,
              #00baa7d7,
              #0081b8dc
            );
            animation: color 12s ease-in-out infinite;
            background-size: 2000% 2000%;
            background-position: 0%;
            font-family: "Open Sans", sans-serif;
            overflow: hidden;
          }

          @keyframes color {
            0% {
              background-position: 0% 50%;
            }
            25% {
              background-position: 25% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            75% {
              background-position: 75% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }

          @media (max-width: 600px) {
            .background-square {
              width: 95%;
              height: 95%;
            }

            .home {
              padding: 60px 20px;
            }
          }

          @media (min-width: 601px) and (max-width: 768px) {
            .background-square {
              width: 90%;
              height: 90%;
            }

            .home {
              padding: 80px 25px;
            }
          }

          @media (min-width: 769px) {
            .background-square {
              width: 88%;
              height: 88%;
            }

            .home {
              padding: 100px 30px;
            }
          }

          /* Hide the up and down arrows in the number input */
          input[type=number]::-webkit-outer-spin-button,
          input[type=number]::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
          }

          input[type=number] {
            -moz-appearance: textfield;
          }
        `}
      </style>
      <div className="background-square" style={styles.backgroundSquare}>
        <div className="d-flex align-items-center" style={styles.content}>
          <div
            className="icon-wrapper d-flex align-items-center"
            style={styles.iconWrapper}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="55"
              height="55"
              viewBox="0 0 25 25"
              fill="none"
            >
              <path
                d="M16 12C18.76 12 21 9.76 21 7C21 4.24 18.76 2 16 2C13.24 2 11 4.24 11 7C11 9.76 13.24 12 16 12ZM21.45 17.6C21.06 17.2 20.57 17 20 17H13L10.92 16.27L11.25 15.33L13 16H15.8C16.15 16 16.43 15.86 16.66 15.63C16.89 15.4 17 15.12 17 14.81C17 14.27 16.74 13.9 16.22 13.69L8.95001 11H7.00001V20L14 22L22.03 19C22.04 18.47 21.84 18 21.45 17.6ZM5.00001 11H0.984009V22H5.00001V11Z"
                fill="#4D96B6"
              />
            </svg>
          </div>
          <p style={styles.iconText}>
            Yayasan Yatim Piatu <br />
            Roudlotul Jannah
          </p>
        </div>
        <div className="container mt-5">
          <div className="row">
            {/* Donation Amount Section */}
            <div className="col-md-6 mb-4">
              <p style={styles.heading}>Tentukan Jumlah Donasi</p>
              <div className="mt-3">
                <label htmlFor="donationAmount" style={styles.label}></label>
                <input
                  type="text"
                  id="donationAmount"
                  className="form-control"
                  style={styles.input}
                  placeholder="Masukkan jumlah donasi"
                  value={donationAmount}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mt-3">
                <label style={styles.label}>Pilih Nominal</label>
                <div
                  className="btn-group"
                  role="group"
                  style={styles.buttonGroup}
                >
                  <button
                    type="button"
                    className="btn btn-outline-primary"
                    style={styles.button}
                    onClick={() => handleButtonClick("5.000")}
                  >
                    Rp.5.000
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-primary"
                    style={styles.button}
                    onClick={() => handleButtonClick("10.000")}
                  >
                    Rp.10.000
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-primary"
                    style={styles.button}
                    onClick={() => handleButtonClick("20.000")}
                  >
                    Rp.20.000
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-primary"
                    style={styles.button}
                    onClick={() => handleButtonClick("25.000")}
                  >
                    Rp.25.000
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-primary"
                    style={styles.button}
                    onClick={() => handleButtonClick("50.000")}
                  >
                    Rp.50.000
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-primary"
                    style={styles.button}
                    onClick={() => handleButtonClick("100.000")}
                  >
                    Rp.100.000
                  </button>
                </div>
              </div>
              <div
                style={{
                  backgroundColor: "#ffffff6b",
                  padding: "10px",
                  borderRadius: "15px",
                  marginTop: "160px",
                }}
              >
                <p
                  style={{
                    color: "#333",
                    marginTop: "20px",
                    textAlign: "center",
                    fontSize: "15px",
                    fontWeight: "bold",
                  }}
                >
                  Semoga donasimu menjadi berkah dan membawa kebahagiaan bagi
                  yang membutuhkan, dan kelak akan menjadikanmu bahagia pula.
                  Terima kasih!
                </p>
              </div>
            </div>
            {/* Payment Method Section */}
            <div className="col-md-6">
              <p style={styles.heading}>Metode Pembayaran</p>
              <div className="mt-3">
                <label htmlFor="paymentMethod" style={styles.label}></label>
                <select
                  id="paymentMethod"
                  className="form-select"
                  style={styles.select}
                  onChange={(e) => console.log(e.target.value)}
                >
                  <option value="">Pilih</option>
                  <option value="qris">
                    <img
                      src="/assets/img/qrislogo.png"
                      alt="qris"
                      style={{ marginRight: "5px", height: "20px" }}
                    />
                    Qris
                  </option>
                  <option value="shopee">
                    <img
                      src="/assets/SopiLogo.png"
                      alt="shopeepay"
                      style={{ marginRight: "5px", height: "20px" }}
                    />
                    ShopeePay
                  </option>
                  <option value="bca">
                    <img
                      src="/assets/BCALogo.png"
                      alt="va bca"
                      style={{ marginRight: "5px", height: "20px" }}
                    />
                    VA BCA
                  </option>
                  <option value="mandiri">
                    <img
                      src="/assets/img/BRILogo.png"
                      alt="va mandiri"
                      style={{ marginRight: "5px", height: "20px" }}
                    />
                    VA Mandiri
                  </option>
                </select>
              </div>
              <div className="mt-3">
                <button
                  type="button"
                  className="btn btn-warning" // Change button color to yellow
                  style={styles.continueButton} // Apply custom styles
                >
                  Lanjutkan Pembayaran
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const styles = {
  backgroundSquare: {
    position: "fixed",
    marginLeft: "10%",
  },
  iconWrapper: {
    backgroundColor: "#ffffff6b",
    borderRadius: "15px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "10px",
    marginRight: "20px",
    marginLeft: "30px",
  },
  content: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: "80px",
  },
  iconText: {
    fontSize: "24px",
    color: "#fff",
    fontWeight: "bold",
  },
  heading: {
    color: "#333",
    marginBottom: "20px",
    fontWeight: "bold",
  },
  label: {
    marginTop: "20px",
    color: "#555",
    fontWeight: "bold",
  },
  input: {
    padding: "10px",
    borderRadius: "15px",
    border: "1px solid #ccc",
  },
  select: {
    padding: "10px ",
    borderRadius: "15px",
    width: "200px",
    border: "1px solid #ccc",
  },
  buttonGroup: {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
  },
  button: {
    borderRadius: "15px",
    flex: "1 1 30%", // agar tombol mengambil lebar 100%
    backgroundColor: "white", // ubah latar belakang menjadi putih
    hover: "none",
    color: "black",
    "&:hover": {
      // menambahkan efek hover untuk tombol
      backgroundColor: "Black",
    },
    padding: "5px 10px", // ubah padding untuk mengecilkan tombol
    fontSize: "15px", // ukuran font default
    minWidth: "100px", // tambahkan minWidth untuk mengontrol lebar minimal tombol
    height: "50px",
  },
  continueButton: {
    minWidth: "100px",
    height: "50px",
    borderRadius: "15px",
    marginTop: "383px",
    marginLeft: "200px",
  },
};

export default Transaksi1;
