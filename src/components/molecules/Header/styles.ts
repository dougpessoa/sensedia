import styled from "styled-components";
import { Search } from "styles/icons";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  gap: 20px;
`;

export const InputWrapper = styled.div`
  width: 60%;

  @media (max-width: 1000px) {
    width: 40%;
  }
`;

export const AsideWrapper = styled.div`
  width: 40%;
  display: flex;
  gap: 20px;

  @media (max-width: 1000px) {
    width: 60%;
  }
`;

export const SearchIcon = styled(Search)`
  width: 20px;
  height: 20px;
  color: white;
`;
