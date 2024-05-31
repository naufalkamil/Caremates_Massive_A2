import React from "react";
import "./Popup.css";

const Popup = ({ content, handleClose }) => {
  return (
    <div className="popup" style={backgroundStyle}>
      <style>
        {`
          @keyframes colorChange {
            0% { background-position: 0% 50%; }
            25% { background-position: 25% 50%; }
            50% { background-position: 100% 50%; }
            75% { background-position: 75% 50%; }
            100% { background-position: 0% 50%; }
          }

        `}
      </style>
      <div className="popup-inner">
        {content}
        <button className="custom-btn" onClick={handleClose}>
          Oke
        </button>
      </div>
    </div>
  );
};

const backgroundStyle = {
  height: "100vh", // Memastikan latar belakang menutupi seluruh tinggi viewport
  background: "linear-gradient(45deg, #00cbb7, #0098d9, #00baa7, #0081b8)",
  animation: "colorChange 12s ease-in-out infinite",
  backgroundSize: "200% 200%",
  backgroundPosition: "0% 50%",
  fontFamily: '"Open Sans", sans-serif',
  margin: 0, // Menghapus margin default dari body
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  color: "white",
};

export default Popup;
