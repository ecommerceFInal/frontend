import styled from "styled-components";

export const FooterStyled = styled.footer`
  background-color: var(--grey0); /* Cor de fundo do rodapé */
  color: var(--whiteFixed); /* Cor do texto no rodapé */
  padding: 20px; /* Espaçamento interno do rodapé */
  display: flex;
  justify-content: space-between; /* Alinhamento horizontal dos elementos */
  align-items: center; /* Alinhamento vertical dos elementos */
  text-align: center;
  height: 140px;

  .footer-logo {
    flex: 1; /* Ocupa 1/3 do espaço disponível na linha */
    text-align: left; /* Alinha o logotipo à esquerda */
    margin: 1.5rem;
  }

  .footer-logo img {
    width: 153px;
    height: 26px;
  }

  .footer-content {
    flex: 1; /* Ocupa 1/3 do espaço disponível na linha */
  }

  .footer-content span {
    font-size: 14px;
    font-weight: 400;
  }

  .button-container {
    flex: 1; /* Ocupa 1/3 do espaço disponível na linha */
    display: flex;
    justify-content: flex-end; /* Alinha o botão à direita */
    align-items: center; /* Alinha o botão verticalmente ao centro */
  }

  button {
    background-color: var(--grey1); /* Cor de fundo do botão */
    color: var(--whiteFixed); /* Cor do texto do botão */
    border: none;
    border-radius: 4px; /* Borda arredondada para o botão */
    width: 53px;
    height: 50px;
    cursor: pointer;
    transition: background-color 0.3s ease; /* Efeito de transição na cor de fundo */
  }

  button i {
    font-size: 24px; /* Tamanho do ícone */
  }

  button:hover {
    background-color: var(--brand2);
  }
`;
