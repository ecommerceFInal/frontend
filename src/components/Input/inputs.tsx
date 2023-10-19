import React from "react";
import { DivInputsStyled } from "./styled";

interface InputWithLabelProps {
  type: string;
  id: string;
  name: string;
  value: string;
  label: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputWithLabel: React.FC<InputWithLabelProps> = ({
  type,
  id,
  name,
  value,
  label,
  onChange,
}) => {
  return (
    <DivInputsStyled>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
      />
    </DivInputsStyled>
  );
};

export default InputWithLabel;
