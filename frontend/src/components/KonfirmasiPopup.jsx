import React from "react";
import "./KonfirmasiPopup.css";

const KonfirmasiPopup = ({ topText, bottomText, handleClose }) => {
  return (
    <div className="konfirmasi-popup">
      <div className="konfirmasi-popup-inner">
        <h2>{topText}</h2>
        <div className="checkmark-wrapper">
          <div className="checkmark"></div>
        </div>
        <p>{bottomText}</p>
        <button className="close-btn" onClick={handleClose}>
          Tutup
        </button>
      </div>
    </div>
  );
};

export default KonfirmasiPopup;
