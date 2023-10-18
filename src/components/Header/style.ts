import styled from "styled-components";

export const HeaderStyled = styled.header`
  background-color: #fff; /* Cor de fundo do cabeçalho */
  color: #fff; /* Cor do texto no cabeçalho */
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  margin: 1.5rem;
  height: 80px;

  .logo > img {
    width: 153.02px;
    height: 26.34px;
  }

  .nav ul {
    list-style: none;
    display: flex;
    margin: 0;
    padding: 0;
  }

  .nav__item:last-child {
    margin-right: 0; /* Remover margem do último item do menu */
  }

  .nav__item a {
    text-decoration: none;
    color: black; /* Cor dos links no menu */
    font-family: "Inter", sans-serif;
    font-weight: 600;
    display: inline-block; /* Torna o elemento âncora em bloco de tamanho fixo */
    width: 133px; /* Largura fixa desejada */
    height: 48px; /* Altura fixa desejada */
    text-align: center; /* Centraliza o texto horizontalmente */
    line-height: 48px; /* Centraliza o texto verticalmente */
  }

  .nav__item a:hover {
    text-decoration: underline;
    border: 1.5px solid #adb5bd; /* Adicione a borda no hover */
    color: #0b0d0d; /* Altere a cor do texto no hover */
  }
`;
