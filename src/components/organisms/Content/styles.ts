import styled from "styled-components";
export { default as Loading } from "components/atoms/Loading";

export const Main = styled.main`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1440px;
  padding: 40px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LoadingWrapper = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
