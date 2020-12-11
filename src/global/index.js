import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        box-sizing:border-box;
        list-style: none;
    }

    body{
        padding: 0;
        margin: 0;
        font-family: 'Roboto', sans-serif;
        overflow:hidden;
    }

`;

export default GlobalStyle;
