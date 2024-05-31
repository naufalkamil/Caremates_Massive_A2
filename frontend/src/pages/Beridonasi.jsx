import React from "react";
import "./BeriDonasi.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "@fortawesome/fontawesome-free/css/all.min.css"; // Import FontAwesome
import Card from "./Card";

const BeriDonasi = () => {
  return (
    <section className="home">
      <div className="background-square">
        <div className="row justify-content-center text-center pb-1">
          <div className="col-10">
            <p
              style={{
                color: "white",
                fontFamily: "Open Sans",
                fontSize: "18px",
                fontStyle: "normal",
                lineHeight: "normal",
              }}
            >
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
            <Card imgSrc="img/img-panti/panti1.png" totalDonasi="15.000" />
            <Card imgSrc="img/img-panti/panti2.png" totalDonasi="15.000" />
            <Card imgSrc="img/img-panti/panti3.png" totalDonasi="15.000" />
            <Card imgSrc="img/img-panti/panti4.png" totalDonasi="15.000" />
            <Card imgSrc="img/img-panti/panti4.png" totalDonasi="15.000" />
            <Card imgSrc="img/img-panti/panti4.png" totalDonasi="15.000" />
          </div>
        </div>
      </div>
    </section>
  );
};
const SearchBar = () => {
  return (
    <div className="container pt-0">
      <div className="search">
        <input className="search-input" type="search" placeholder="Search" />
        <button className="search-btn">
          <i className="fas fa-search"></i>
        </button>
      </div>
    </div>
  );
};

export default BeriDonasi;
