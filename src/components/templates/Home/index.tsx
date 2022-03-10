import Navbar from "components/molecules/Navbar";
import Content from "components/organisms/Content";
import * as S from "./styles";

const Home = () => {
  return (
    <S.Wrapper>
      <Navbar />
      <Content />
    </S.Wrapper>
  );
};

export default Home;
