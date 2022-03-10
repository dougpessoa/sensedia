import styled from "styled-components";

export const Wrapper = styled.nav`
  width: 100%;
  height: 64px;
  background-color: ${({ theme }) => theme.colors.primary};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.24);

  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  max-width: 1440px;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 40px;
`;

export const Img = styled.img.attrs({
  src: "/icons/logo.svg",
})`
  max-width: 300px;
`;
