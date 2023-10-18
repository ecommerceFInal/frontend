import styled from "styled-components";

export const FormStyled = styled.form`
  margin: 2rem;
  padding: 1rem;
  background-color: var(--whiteFixed);

  label {
    width: 100%;
    border-radius: 0.3rem;
    font-weight: 500;
    font-size: 14px;
    color: var(--grey1);
  }

  input {
    width: 100%;
    height: 48px;
    padding: 16px;
    margin: 1rem 0;
    border-radius: 4px;
    border: 1.5px solid var(--grey7);
    font-family: "Inter", sans-serif;
    font-weight: 400;
    font-size: 16px;
    transition: border-color 0.3s;
  }

  input:focus {
    border-color: var(--brand2);
  }

  button {
    margin: 0;
  }
`;
