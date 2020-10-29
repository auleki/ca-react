import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
    background-color: #000;
  }

  * {
    padding: 0;
    margin: 0;
    border: none;
    outline: none;
  }
`

export default GlobalStyle;