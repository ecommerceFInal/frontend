import React, { useState } from "react";
import { FormStyled } from "./style";
import CustomButton from "../Buttons/buttons";

interface FormComponentProps {
  type: string;
  id: string;
  name: string;
  onSubmit: (data: { [key: string]: string }) => void;
}

const FormComponent: React.FC<FormComponentProps> = ({
  type,
  id,
  name,
  onSubmit,
}) => {
  const [formData, setFormData] = useState<{ [key: string]: string }>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <FormStyled onSubmit={handleSubmit}>
      <label htmlFor="id">{name}</label>
      <input
        type={type}
        id={id}
        name={name}
        value={formData[name] || ""}
        onChange={handleInputChange}
      />
      <CustomButton
        backgroundColor="var(--grey6)"
        textColor="var(--grey0)"
        onClick={handleSubmit}
        label="Text Button"
      >
        Submit
      </CustomButton>
    </FormStyled>
  );
};

export default FormComponent;
