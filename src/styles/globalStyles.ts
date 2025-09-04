import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

:root{
  --white: #FFFFFF;
  --blue: #132450;
  --darkGray: #383A48;
  --lightGray: #383A4899;
}
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html{
    font-size: 62.5%;
}

body{
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
}

`;

export default GlobalStyle;
