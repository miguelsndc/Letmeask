import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .Overlay {
    position: fixed;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.5);
  }

  .Modal {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 40.875rem;
    width: 100%;
    height: 26.625rem;
    border: 1px solid #ccc;
    background: #fff;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    border-radius: 8px;
    outline: none;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;

    h2 {
      font-family: 'Poppins', sans-serif;
    }

    p {
      color: ${props => props.theme.grayDark};
      margin-bottom: 2rem;
      margin-top: .75rem;
    }

    div > div {
      display: flex;
      align-items: center;
      justify-content: center ;
      gap: .5rem;
    }

    svg {
      width: 3rem;
      height: 3rem;
      margin-bottom: 1.25rem;

      path {
        stroke: ${props => props.theme.danger};
      }
    }

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
