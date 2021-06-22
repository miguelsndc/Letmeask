import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${props => props.theme.background};
    color: ${props => props.theme.text};
  }

  body,input,button,textarea {
    font: 400 16px 'Roboto', sans-serif;
  }

  @media (max-width: 1366px) {
    html {
      font-size: 93.75%;
    }
  }
  @media (max-width: 980px) {
    html {
      font-size: 87.5%;
    }
  }
`
