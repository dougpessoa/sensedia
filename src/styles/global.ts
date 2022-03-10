import {
  createGlobalStyle,
  css,
  DefaultTheme,
  GlobalStyleComponent,
} from "styled-components";
import "antd/dist/antd.css";

type GlobalStylesProps = {
  removeBg?: boolean;
};

const GlobalStyles: GlobalStyleComponent<
  GlobalStylesProps,
  DefaultTheme
> = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    &::before,
    &::after {
      box-sizing: inherit;
    }
  }
  ${({ theme }) => css`
    body {
      font-family: ${theme.fontFamily.primary};
    }
  `}
`;

export default GlobalStyles;
