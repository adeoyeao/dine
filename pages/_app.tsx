import { createGlobalStyle, ThemeProvider } from 'styled-components'
import theme from '../theme'

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Spartan&display=swap');
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Spartan, sans-serif;
    line-height: 150%;
    ::-webkit-scrollbar {
      display: none;
    }
  };
  body {
    background: teal;
  }
`

const App = ({ Component, pageProps }) => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
          <Component {...pageProps} ></Component>
      </ThemeProvider>
    </>
  )
}

export default App