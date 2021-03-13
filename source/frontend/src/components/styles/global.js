import * as styled from 'styled-components';

const px2vw = (size, width = 1440) => `${(size / width) * 100}vw`;
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
    font-size: ${px2vw(24)};

    @media (min-width: 768px) {
      font-size: ${px2vw(18)};
    }

    @media (min-width: 1024px) {
      font-size: ${px2vw(16)};
    }
  }
`;

export default GlobalStyle;
