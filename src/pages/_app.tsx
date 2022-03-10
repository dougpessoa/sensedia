import { HomeProvider } from "contexts/home";
import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "styles/global";
import theme from "styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <HomeProvider>
        <GlobalStyles />
        <Component {...pageProps} />
      </HomeProvider>
    </ThemeProvider>
  );
}

export default MyApp;
