import styled from "styled-components";

export const CardCommentStyled = styled.div`
  /* Estilo para o container do CardComment */
  border: 1px solid #ccc;
  padding: 16px;
  margin: 16px;
  border-radius: 8px;
  background-color: #fff;

  /* Estilo para o campo de comentário (textarea) */
  .comment-input textarea {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-bottom: 10px;
    resize: vertical; /* Permite redimensionar verticalmente o textarea */
  }

  /* Estilo para o botão "Comentar" */
  .comment-input button {
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    padding: 8px 16px;
    cursor: pointer;
  }

  /* Estilo para os botões de reação */
  .comment-reactions button {
    background-color: #f0f0f0;
    color: #333;
    border: none;
    border-radius: 4px;
    padding: 8px 16px;
    margin-right: 10px;
    cursor: pointer;
  }

  /* Estilo para os botões de reação quando hover (mudando a cor de fundo) */
  .comment-reactions button:hover {
    background-color: #ddd;
  }
`;
