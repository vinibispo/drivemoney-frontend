import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
    -webkit-font-smoothing: antialiased;
    outline: 0;
  }
  body, input, button {
    font: 400 16px Roboto, sans-serif;
  }
  button {
    cursor: pointer;
  }
  h1, h2, h3, h4, h5, h6 {
    font-weight: 500;
  }
`;
