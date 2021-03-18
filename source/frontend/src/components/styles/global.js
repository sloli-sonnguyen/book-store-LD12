import * as styled from 'styled-components';

const GlobalStyle = styled.createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    box-sizing: border-box;
  }

  ul,
  li {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  :root {
    font-size: 12px;

    @media (min-width: 768px) {
      font-size: 14px;
    }

    @media (min-width: 1024px) {
      font-size: 16px;
    }
  }

  body,
  html {
    overflow-x: hidden;
  }
`;

export default GlobalStyle;
