import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
  line-height: 1.2;
  font-size: ${({ theme }) => theme.font.size.fontBase};
  font-family: ${({ theme }) => theme.font.family};
  letter-spacing: 2px
  }

  img,
  picture {
    max-width: 100%;
    display: block;
  }

  body,
  h1,
  h2,
  h3,
  h4,
  p {
    margin: 0;
  }

`

export default GlobalStyle;