import React, { useState } from "react";
import { CardCommentStyled } from "./styled";

interface CardCommentProps {
  onCommentSubmit: (comment: string) => void;
}

const CardComment: React.FC<CardCommentProps> = ({ onCommentSubmit }) => {
  const [comment, setComment] = useState("");

  const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };

  const handleCommentSubmit = () => {
    if (comment.trim() !== "") {
      onCommentSubmit(comment);
      setComment("");
    }
  };

  return (
    <CardCommentStyled className="card-comment">
      <div className="comment-input">
        <textarea
          placeholder="Digite seu comentário..."
          value={comment}
          onChange={handleCommentChange}
        />
        <button onClick={handleCommentSubmit}>Comentar</button>
      </div>
      <div className="comment-reactions">
        <button onClick={() => onCommentSubmit("Gostei muito!")}>
          Gostei muito!
        </button>
        <button onClick={() => onCommentSubmit("Incrível")}>Incrível</button>
        <button
          onClick={() => onCommentSubmit("Recomendarei para meus amigos!")}
        >
          Recomendarei para meus amigos!
        </button>
      </div>
    </CardCommentStyled>
  );
};

export default CardComment;
