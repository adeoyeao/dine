import { createGlobalStyle, ThemeProvider } from "styled-components";
import theme from "../theme";
import { HtmlHead } from "components";
import { Footer } from 'layout'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Spartan, Roboto, sans-serif;
    line-height: 150%;
    ::-webkit-scrollbar {
      display: none;
    }
  };
`;

const App = ({ Component, pageProps }) => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <HtmlHead />
        <Component {...pageProps}></Component>
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default App;
