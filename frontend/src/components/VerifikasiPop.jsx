import React from "react";
import "./VerifikasiPopup.css";

const VerifikasiPopup = ({ message, handleConfirm, handleCancel }) => {
  return (
    <div className="verifikasi-popup">
      <div className="verifikasi-popup-inner">
        <h2>{message}</h2>
        <div className="buttons">
          <button onClick={handleConfirm}>Ya</button>
          <button onClick={handleCancel}>Tidak</button>
        </div>
      </div>
    </div>
  );
};

export default VerifikasiPopup;
