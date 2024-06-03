import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import galeri1 from "../img/img-galeri/galeri1.jpg";

const Card = ({ imgSrc, totalDonasi, link = "#" }) => {
  return (
    <div className="col-md-4">
      <div className="card p-2" style={styles.card}>
        <img
          src={imgSrc}
          className="card-img-top img-fluid rounded-2"
          alt="project1"
        />
        <div className="row">
          <div className="col-9">
            <div className="card-body" style={styles.cardBody}>
              <div className="rounded-5 p-0 m-0" style={styles.totalDonasi}>
                <p className="mt-2" style={styles.totalDonasiText}>
                  Total Donasi
                  <br />
                  <b>{totalDonasi}</b>
                  <a href={link} style={styles.lihatSelengkapnya}>
                    <br />
                    Lihat Selengkapnya
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="col d-flex align-items-center justify-content-center">
            <div className="icon-wrapper" style={styles.iconWrapper}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 25 25"
                fill="none"
              >
                <path
                  d="M16 12C18.76 12 21 9.76 21 7C21 4.24 18.76 2 16 2C13.24 2 11 4.24 11 7C11 9.76 13.24 12 16 12ZM21.45 17.6C21.06 17.2 20.57 17 20 17H13L10.92 16.27L11.25 15.33L13 16H15.8C16.15 16 16.43 15.86 16.66 15.63C16.89 15.4 17 15.12 17 14.81C17 14.27 16.74 13.9 16.22 13.69L8.95001 11H7.00001V20L14 22L22.03 19C22.04 18.47 21.84 18 21.45 17.6ZM5.00001 11H0.984009V22H5.00001V11Z"
                  fill="#4D96B6"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const BeriDonasi = () => {
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

          .container .row {
            overflow-y: auto;
            max-height: 400px;
            -ms-overflow-style: none; /* IE and Edge */
            scrollbar-width: none; /* Firefox */
          }

          .container .row::-webkit-scrollbar {
            display: none; /* Chrome, Safari, and Opera */
          }
          @media (max-width: 600px) {
            .background-square {
              width: 95%;
              height: 95%;
            }

            .home {
              padding: 60px 20px;
            }

            .search-input {
              width: 250px !important;
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

            .search-input {
              width: 300px !important;
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

            .search-input {
              width: 400px !important;
            }
          }
        `}
      </style>

      {/* <div className="background-square" style={styles.backgroundSquare}> */}
      <div className="row justify-content-center text-center pb-1">
        <div className="col-10">
          <p style={styles.text}>
            Caremates berperan sebagai jembatan dengan tujuan terciptanya
            kesejahteraan bagi semua saudara kita yang membutuhkan. Caremates
            terhubung dengan lebih dari 150 lembaga panti asuhan di Indonesia,
            temukan lembaga yang tepat untuk menyalurkan donasi Anda di
            Caremates.
          </p>
        </div>
      </div>
      <SearchBar />
      <div className="container pt-3">
        <div className="row justify-content-center text-start">
          <Card imgSrc={galeri1} totalDonasi="15.000" />
          <Card imgSrc={galeri1} totalDonasi="15.000" />
          <Card imgSrc={galeri1} totalDonasi="15.000" />
          <Card imgSrc="img/img-panti/panti4.png" totalDonasi="15.000" />
          <Card imgSrc="img/img-panti/panti4.png" totalDonasi="15.000" />
          <Card imgSrc="img/img-panti/panti4.png" totalDonasi="15.000" />
        </div>
      </div>
      {/* </div> */}
    </section>
  );
};

const SearchBar = () => {
  return (
    <div className="container pt-0">
      <div className="search" style={styles.search}>
        <input
          className="search-input"
          type="search"
          placeholder="Search"
          style={styles.searchInput}
        />
        <button className="search-btn" style={styles.searchBtn}>
          <i className="fas fa-search" style={styles.searchIcon}></i>
        </button>
      </div>
    </div>
  );
};

const styles = {
  // home: {
  //   padding: "100px 30px",
  // },
  // backgroundSquare: {
  //   position: "fixed",
  //   top: "50%",
  //   left: "50%",
  //   transform: "translate(-50%, -50%)",
  //   width: "88%",
  //   height: "88%",
  //   borderRadius: "20px",
  //   backgroundColor: "#ffffff6b",
  //   zIndex: "-1",
  //   overflow: "hidden",
  // },
  text: {
    color: "white",
    fontFamily: "Open Sans",
    fontSize: "18px",
    fontStyle: "normal",
    lineHeight: "normal",
    marginTop: "80px",
    marginBottom: "50px",
  },
  search: {
    display: "flex",
    justifyContent: "center",
    marginTop: "30px",
    marginBottom: "30px",
  },
  searchInput: {
    width: "400px",
    height: "55px",
    backgroundColor: "rgba(0, 0, 0, 0.041)",
    padding: "12px 24px",
    border: "none",
    borderRight: "none",
    borderRadius: "25px 0 0 25px",
    outline: "none",
    color: "#000000",
    boxShadow: "0 2px 0 rgba(0, 0, 0, 0.1)",
  },
  searchBtn: {
    width: "55px",
    height: "55px",
    border: "none",
    borderRadius: "0 25px 25px 0",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "rgba(0, 0, 0, 0.041)",
    boxShadow: "0 2px 0 rgba(0, 0, 0, 0.1)",
  },
  searchIcon: {
    color: "white",
  },
  card: {
    background: "rgba(255, 255, 255, 0.50)",
    border: "none",
    marginTop: "30px",
    marginBottom: "20px",
  },
  cardBody: {
    padding: 0,
  },
  totalDonasi: {
    backgroundColor: "#ffc801",
    textAlign: "center",
  },
  totalDonasiText: {
    fontSize: "small",
    margin: 0,
  },
  lihatSelengkapnya: {
    fontSize: "small",
  },
  iconWrapper: {
    backgroundColor: "#ffffff6b",
    borderRadius: "15px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "10px",
    marginLeft: "-25px",
  },
};

export default BeriDonasi;
