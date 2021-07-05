import { createGlobalStyle, ThemeProvider } from 'styled-components'
import theme from '../theme'


const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Manrope, Verdana;
    line-height: 150%;
    ::-webkit-scrollbar {
      display: none;
    }
  }
  button {
    appearance: none;
    border: none;
    outline: none;
    cursor: pointer;
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