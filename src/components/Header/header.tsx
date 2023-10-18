import React from "react";
import logo from "../../assets/Logo.png";
import { HeaderStyled } from "./style";

interface HeaderProps {
  onLoginClick: () => void;
  onRegisterClick: () => void;
}

const HeaderComponent: React.FC<HeaderProps> = ({
  onLoginClick,
  onRegisterClick,
}) => {
  return (
    <HeaderStyled>
      <div className="logo">
        <img src={logo} alt="Logo da Empresa" />
      </div>
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <a href="#" onClick={onLoginClick}>
              Fazer Login
            </a>
          </li>
          <li className="nav__item">
            <a href="#" onClick={onRegisterClick}>
              Cadastrar
            </a>
          </li>
        </ul>
      </nav>
    </HeaderStyled>
  );
};

export default HeaderComponent;
