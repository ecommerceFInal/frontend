import styled from "styled-components";
import "typeface-inter";

export const ButtonSmallStyled = styled.button`
  background-color: #3498db; /* Cor de fundo padrão */
  color: #fff; /* Cor do texto padrão */
  font-family: "Inter", sans-serif;
  font-weight: 600;
  font-size: 14px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  outline: none;
  margin: 10px 20px;

  :hover {
    opacity: 0.8;
  }
`;
