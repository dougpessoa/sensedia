import styled, { keyframes } from "styled-components";
import { LoaderAlt } from "styles/icons";

const loader = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;

export const Wrapper = styled(LoaderAlt)`
  width: 30px;
  height: 30px;
  color: ${({ theme }) => theme.colors.primary};

  animation: ${loader} 0.7s infinite linear;
`;
