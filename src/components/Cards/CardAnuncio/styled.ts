import styled from "styled-components";

export const CardAnuncioStyled = styled.li`
  max-width: 312px;
  text-align: start; /* Define o alinhamento do texto como start */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  img {
    max-width: 100%;
    height: 152px;
    width: 100%;
    max-height: 312px;
    object-fit: cover;
  }

  h2 {
    font-size: 16px; /* Tamanho de fonte alterado para 16px */
    margin: 8px 0;
    font-weight: 600; /* Peso da fonte */
    color: #212529; /* Cor da fonte */
    font-family: "Lexend Deca", sans-serif; /* Fonte definida como Lexend */
  }

  p {
    font-size: 14px; /* Tamanho de fonte alterado para 14px */
    color: #495057; /* Cor da fonte */
    font-weight: 400;
  }

  .anunciante-info {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin: 16px 0;
  }

  .anunciante-info img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    margin-right: 8px;
  }

  .anunciante-info p {
    font-weight: 500; /* Peso da fonte */
    font-family: "Inter", sans-serif; /* Fonte definida como Inter */
    font-size: 14px; /* Tamanho de fonte definido como 14px */
  }

  .carro-info {
    margin-top: 16px;
    font-size: 1.1em;
  }

  .carro-tags {
    display: flex;
    justify-content: space-between;
    align-self: center;
    margin: 8px 0;
  }

  .carro-tags .tags-span {
    display: flex;
    width: 150px;
    align-items: center;
    justify-content: space-between;
  }

  .carro-tags .tags-span span {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 55px;
    height: 32px;
    background-color: #edeafd;
    font-weight: 500;
    font-family: "Inter", sans-serif;
    font-size: 14px;
    color: #4529e6;
  }

  .carro-tags .tags-span .span-km {
    width: 90px;
  }

  .carro-tags p {
    font-family: "Lexend Deca", sans-serif;
    font-weight: 600;
    font-size: 16px;
    color: var(--grey1);
    align-self: center;
  }
`;
