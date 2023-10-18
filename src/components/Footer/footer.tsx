import React from "react";
import logo from "../../assets/LogoFooter.png";
import { FooterStyled } from "./styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <FooterStyled className="footer">
      <div className="footer-logo">
        <img src={logo} alt="Logo da Empresa" />
      </div>
      <div className="footer-content">
        <span>&copy; 2022 - Todos os direitos reservados.</span>
      </div>
      <div className="button-container">
        <button onClick={scrollToTop} className="button">
          <FontAwesomeIcon icon={faCaretUp} />
        </button>
      </div>
    </FooterStyled>
  );
};

export default Footer;
