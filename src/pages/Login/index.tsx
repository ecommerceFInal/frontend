import { useState } from "react";
import Footer from "../../components/Footer/footer";
import HeaderComponent from "../../components/Header/header";
import InputWithLabel from "../../components/Input/inputs";
import { FormStyled, MainStyled } from "./styled";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginClick = () => {
    // Lógica para lidar com o clique em "Fazer Login"
    console.log("Clicou em Fazer Login");
  };

  const handleRegisterClick = () => {
    // Lógica para lidar com o clique em "Cadastrar"
    console.log("Clicou em Cadastrar");
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  return (
    <>
      <HeaderComponent
        onLoginClick={handleLoginClick}
        onRegisterClick={handleRegisterClick}
      />
      <MainStyled>
        <FormStyled className="login-form">
          <h2>Login</h2>
          <InputWithLabel
            type="email"
            id="email"
            name="email"
            value={email}
            label="Email"
            onChange={handleEmailChange}
          />

          <InputWithLabel
            type="password"
            id="password"
            name="password"
            value={password}
            label="Senha"
            onChange={handlePasswordChange}
          />

          <a href="#">Esqueci minha senha</a>
          <button type="submit">Entrar</button>
          <p>Ainda não possui conta?</p>
          <a href="#">Cadastrar</a>
        </FormStyled>
      </MainStyled>
      <Footer />
    </>
  );
};
