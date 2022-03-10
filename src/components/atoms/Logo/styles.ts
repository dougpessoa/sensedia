import styled from "styled-components";
import { LogoTypes } from ".";

export const Img = styled.img.attrs({
  src: "/icons/logo.svg",
})<LogoTypes>`
  max-width: ${({ size }) => `${size}px`};
`;
