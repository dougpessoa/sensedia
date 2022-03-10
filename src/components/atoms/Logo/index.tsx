import * as S from "./styles";

export type LogoTypes = {
  size?: number;
};

const Logo = ({ size = 300 }: LogoTypes) => {
  return (
    <S.Img
      data-testid="sensedia-logo"
      size={size}
      alt="sensedia's logo"
      title="Sensedia"
    />
  );
};

export default Logo;
