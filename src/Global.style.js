import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
}

*,
*::after,
*::before {
  box-sizing: inherit;
}

html {
  box-sizing: border-box;
  font-size: 62.5%; //1rem = 10px
  @media only screen and (max-width: 1440px) {
    font-size: 65%;
  }
  @media only screen and (min-width: 1441px) {
    font-size: 80%;
  }
}

body {
  font-family: "Montserrat", sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #dce8ff;
  @media only screen and (max-width: 1440px) {
    min-height: 100vh;
  }
}

`;
