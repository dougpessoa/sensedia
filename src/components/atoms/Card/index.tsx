import * as S from "./styles";

export type CardTypes = {
  title: string;
  subtitle: string;
  description: string;
  date?: string;
};

const Card = ({
  title,
  subtitle,
  description,
  date = "31/12/2022 23:59:59",
}: CardTypes) => {
  return (
    <S.Wrapper data-testid="sensedia-card">
      <S.Header>
        <S.Title>{title}</S.Title>
        <S.Subtitle>{subtitle}</S.Subtitle>
      </S.Header>
      <S.DescriptionWrapper>
        <S.Description title={description}>{description}</S.Description>
      </S.DescriptionWrapper>
      <S.Subtitle>{date}</S.Subtitle>
    </S.Wrapper>
  );
};

export default Card;
