import { ButtonSmallStyled } from "./styled";
import "typeface-inter";

interface CustomButtonSmallProps {
  backgroundColor: string;
  textColor: string;
  onClick: () => void;
  label: string;
}

const CustomButtonSmall: React.FC<CustomButtonSmallProps> = ({
  backgroundColor,
  textColor,
  onClick,
  label,
}) => {
  const ButtonSmall: React.CSSProperties = {
    width: "119px",
    height: "38px",
    backgroundColor,
    color: textColor,
    fontFamily: "Inter",
    fontWeight: 600,
  };

  return (
    <ButtonSmallStyled
      className="custom-button"
      style={ButtonSmall}
      onClick={onClick}
    >
      {label}
    </ButtonSmallStyled>
  );
};

export default CustomButtonSmall;
