import React, { useState } from "react";
import Popup from "./Popup";
import VerifikasiPopup from "./VerifikasiPopup";
import KonfirmasiPopup from "./KonfirmasiPopup";

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
    setShowPopupButton(false); // Sembunyikan tombol "Buka Popup" setelah diklik
  };

  const toggleKonfirmasiPopup = () => {
    setIsKonfirmasiPopupOpen(true);
    setShowKonfirmasiPopupButton(false); // Sembunyikan tombol "Buka Konfirmasi Popup" setelah diklik
  };

  const handleConfirm = () => {
    console.log("Aksi dikonfirmasi");
    setIsVerifikasiOpen(false);
    setShowVerifikasiButton(false); // Sembunyikan tombol "Konfirmasi" setelah dikonfirmasi
  };

  const handleCancel = () => {
    console.log("Aksi dibatalkan");
    setIsVerifikasiOpen(false);
  };

  const handleAction = () => {
    setIsVerifikasiOpen(true);
    setShowVerifikasiButton(false); // Sembunyikan tombol "Konfirmasi" setelah tombol "Konfirmasi" diklik
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
            setShowPopupButton(true); // Tampilkan kembali tombol "Buka Popup" setelah menutup popup
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
            setShowKonfirmasiPopupButton(true); // Tampilkan kembali tombol "Buka Konfirmasi Popup" setelah menutup popup
          }}
        />
      )}
    </div>
  );
};

export default FungsiPopup;
