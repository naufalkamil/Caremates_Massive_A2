import React from "react";
import "./login.css";

const Login = () => {
  return (
    <div style={backgroundStyle}>
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
      <div className="login-container">
        <div className="login-logo">
          <img src="/src/assets/caremates01.png" alt="Logo" />
        </div>
        <div className="login-form">
          <h2>Selamat Datang!</h2>
          <form>
            <div className="form-group">
              <label htmlFor="email">Alamat Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Masukan Email Lembaga"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Masukan Kata Sandi</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Masukan Kata Sandi"
                required
              />
            </div>
            <button type="submit">Masuk</button>
          </form>
        </div>
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

export default Login;
