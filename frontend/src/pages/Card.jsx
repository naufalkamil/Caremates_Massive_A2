import React from "react";
import "./BeriDonasi.css";
import "./BeriDonasi";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "@fortawesome/fontawesome-free/css/all.min.css"; // Import FontAwesome;

const Card = ({ imgSrc, totalDonasi, link = "#" }) => {
  return (
    <div className="col-md-4">
      <div
        className="card p-2"
        style={{ background: "rgba(255, 255, 255, 0.50)" }}
      >
        <img
          src={imgSrc}
          className="card-img-top img-fluid rounded-2"
          alt="project1"
        />
        <div className="row">
          <div className="col-9">
            <div className="card-body">
              <div
                className="rounded-5 p-0 m-0"
                style={{ backgroundColor: "#ffc801", textAlign: "center" }}
              >
                <p className="mt-2" style={{ fontSize: "small", margin: 0 }}>
                  Total Donasi
                  <br />
                  <b>{totalDonasi}</b>
                  <a href={link} style={{ fontSize: "small" }}>
                    <br />
                    Lihat Selengkapnya
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="col d-flex align-items-center justify-content-center">
            <div
              className="icon-wrapper"
              style={{
                backgroundColor: "#ffffff6b",
                borderRadius: "15px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "10px",
                marginLeft: "-25px",
              }}
            >
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
            {/* <p
              style={{
                fontSize: "small",
                marginTop: "5px",
                marginBottom: "0",
              }}
            >
              Donasi
            </p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
