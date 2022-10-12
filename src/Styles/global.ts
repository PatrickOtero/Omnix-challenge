import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    font-size: 62.5%;
}

body {
    display: flex;

    background-color: ${props => props.theme.backgroundColor};
    font-family: 'Open Sans', sans-serif;
}

h1, b {
    cursor: default;
}

`