import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

:root{
  --white: #FFFFFF;
  --blue: #132450;
  --darkGray: #383A48;
  --lightGray: #383A4899;
  --borderGray: #9EB9FF33;
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

#root{
  display: flex;
  gap: 2.4rem;
  
}

button{
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    background-color: transparent;
    border: none;
}

`;

export default GlobalStyle;
