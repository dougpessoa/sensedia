import * as S from "./styles";

export type ButtonTypes = {
  children: React.ReactNode;
  type?: "button" | "reset" | "submit";
  buttonType?: "default" | "rounded";
  onClick?: () => void;
};

const Button = ({
  children,
  type = "button",
  buttonType,
  onClick,
}: ButtonTypes) => {
  return (
    <S.Wrapper
      data-testid="sensedia-button"
      buttonType={buttonType}
      type={type}
      onClick={onClick}
    >
      {children}
    </S.Wrapper>
  );
};

export default Button;
