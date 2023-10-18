import { ButtonStyled } from "./styled";
import "typeface-inter";

interface CustomButtonProps {
  backgroundColor: string;
  textColor: string;
  onClick: () => void;
  label: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  backgroundColor,
  textColor,
  onClick,
  label,
}) => {
  const buttonStyle: React.CSSProperties = {
    width: "146px",
    height: "46px",
    backgroundColor,
    color: textColor,
    fontFamily: "Inter",
    fontWeight: 600,
  };

  return (
    <ButtonStyled
      className="custom-button"
      style={buttonStyle}
      onClick={onClick}
    >
      {label}
    </ButtonStyled>
  );
};

export default CustomButton;
