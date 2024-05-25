import React from "react";
import "./Popup.css";

const Popup = ({ content, handleClose }) => {
  return (
    <div className="popup">
      <div className="popup-inner">
        {content}
        <button className="custom-btn" onClick={handleClose}>
          Oke
        </button>
      </div>
    </div>
  );
};

export default Popup;
