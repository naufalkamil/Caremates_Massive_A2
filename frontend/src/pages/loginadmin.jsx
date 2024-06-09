import React from "react";
import styled, { createGlobalStyle, keyframes } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    margin: 0;
    padding: 0;
    overflow: hidden;
  }
`;

const colorChange = keyframes`
  0% { background-position: 0% 50%; }
  25% { background-position: 25% 50%; }
  50% { background-position: 100% 50%; }
  75% { background-position: 75% 50%; }
  100% { background-position: 0% 50%; }
`;

const Background = styled.div`
  height: 100vh;
  background: linear-gradient(45deg, #00cbb7, #0098d9, #00baa7, #0081b8);
  animation: ${colorChange} 12s ease-in-out infinite;
  background-size: 200% 200%;
  background-position: 0% 50%;
  font-family: "Open Sans", sans-serif;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
`;

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 30px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding: 20px;
  }
`;

const LoginLogo = styled.div`
  margin-right: 50px;
  flex: 1;

  img {
    width: 300px;
    height: auto;
  }

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 10px; /* Add bottom margin for spacing between logo and form */
  }
`;

const LoginForm = styled.div`
  width: 100%;
  max-width: 1000px;
  height: 95%;
  background: rgba(203, 200, 200, 0.468);
  padding: 70px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 2;
  box-sizing: border-box;

  h2 {
    color: #fff;
    margin-bottom: 30px;
  }

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const FormGroup = styled.div`
  color: rgb(255, 255, 255);
  margin-bottom: 20px;
  width: 100%;

  label {
    width: 100%;
    display: block;
    margin-bottom: 10px;
    text-align: left;
  }

  input {
    width: 300px;
    padding: 10px;
    background-color: #fff;
    box-sizing: border-box;
    border-radius: 15px;
    border: none;
    color: #000;
    text-align: left;
    margin-bottom: 10px;

    @media (max-width: 480px) {
      max-width: 100%;
    }
  }
`;

const Button = styled.button`
  display: inline-block;
  padding: 10px;
  background-color: #4db6ac;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    background-color: #21726a;
  }

  @media (max-width: 480px) {
    width: 100%;
    max-width: 300px; /* Maximum width for the button */
    padding: 10px;
  }
`;

const Login = () => {
  return (
    <Background>
      <GlobalStyle />
      <LoginContainer>
        <LoginLogo>
          <img src="/src/assets/caremates01.png" alt="Logo" />
        </LoginLogo>
        <LoginForm>
          <h2>Selamat Datang!</h2>
          <form>
            <FormGroup>
              <label htmlFor="email">Masukkan Username </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Masukan Email Lembaga"
                required
              />
            </FormGroup>
            <FormGroup>
              <label htmlFor="password">Masukan Kata Sandi</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Masukan Kata Sandi"
                required
              />
            </FormGroup>
            <Button type="submit">Masuk</Button>
          </form>
        </LoginForm>
      </LoginContainer>
    </Background>
  );
};

export default Login;
