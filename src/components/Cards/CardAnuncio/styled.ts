import styled from "styled-components";

export const CardAnuncioStyled = styled.div`
  border: 1px solid red;
  border-radius: 8px;
  padding: 16px;
  max-width: 312px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  img {
    max-width: 100%;
    height: 152px;
    width: 100%;
    max-height: 200px;
    object-fit: cover;
  }

  h2 {
    font-size: 1.2em;
    margin: 8px 0;
  }

  p {
    font-size: 1em;
    color: #555;
  }

  .anunciante-info {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin: 16px 0;
    border: 2px solid red;
  }

  .anunciante-info img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 8px;
  }

  .carro-info {
    margin-top: 16px;
    font-size: 1.1em;
  }

  .carro-tags {
    display: flex;
    gap: 10px;
    margin: 8px 0;
    justify-content: center;
    align-items: center;
  }

  .carro-tags span {
    background-color: blue;
  }

  .carro-tags p {
    font-weight: bold;
    font-size: 1.2em;
    margin-left: 80px;
    color: #333;
  }
`;
