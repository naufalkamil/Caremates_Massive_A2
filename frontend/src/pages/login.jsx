import React, { useState } from "react";
import Popup from "../components/Popup";
import VerifikasiPopup from "../components/KonfirmasiPopup";
import KonfirmasiPopup from "../components/VerifikasiPop";
import "./login.css";

const FungsiPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVerifikasiOpen, setIsVerifikasiOpen] = useState(false);
  const [isKonfirmasiPopupOpen, setIsKonfirmasiPopupOpen] = useState(false);
  const [showVerifikasiButton, setShowVerifikasiButton] = useState(true);
  const [showPopupButton, setShowPopupButton] = useState(true);
  const [showKonfirmasiPopupButton, setShowKonfirmasiPopupButton] =
    useState(true);

  const togglePopup = () => {
    setIsOpen(!isOpen);
    setShowPopupButton(false);
  };

  const toggleKonfirmasiPopup = () => {
    setIsKonfirmasiPopupOpen(true);
    setShowKonfirmasiPopupButton(false); 
  };

  const handleConfirm = () => {
    console.log("Aksi dikonfirmasi");
    setIsVerifikasiOpen(false);
    setShowVerifikasiButton(false);
  };

  const handleCancel = () => {
    console.log("Aksi dibatalkan");
    setIsVerifikasiOpen(false);
  };

  const handleAction = () => {
    setIsVerifikasiOpen(true);
    setShowVerifikasiButton(false);  
  };

  return (
    <div>
      {showVerifikasiButton && (
        <button onClick={handleAction}>Verifikasi</button>
      )}
      {showKonfirmasiPopupButton && (
        <button onClick={toggleKonfirmasiPopup}>Buka Konfirmasi Popup</button>
      )}
      {showPopupButton && <button onClick={togglePopup}>Buka Popup</button>}
      {isOpen && (
        <Popup
          content={
            <>
              <h2>
                Pengajuan penggalangan dana akan segera kami verifikasi dalam
                kurun waktu 1x24 jam.
              </h2>
            </>
          }
          handleClose={() => {
            setIsOpen(false);
            setShowPopupButton(true); 
          }}
        />
      )}
      {isVerifikasiOpen && (
        <VerifikasiPopup
          message="Apakah anda yakin akan menghentikan penggalangan?"
          handleConfirm={handleConfirm}
          handleCancel={handleCancel}
        />
      )}
      {isKonfirmasiPopupOpen && (
        <KonfirmasiPopup
          topText="Akun Anda Akan Segera Kami Verifikasi dalam 1x24 jam, Terimakasih"
          bottomText="Periksa secara berkala e-mail anda untuk mendapatkan tautan login setelah akun terverifikasi"
          handleClose={() => {
            setIsKonfirmasiPopupOpen(false);
            setShowKonfirmasiPopupButton(true); 
          }}
        />
      )}
    </div>
  );
};

export default FungsiPopup;
