import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    body {
        min-width: 20rem;
        margin: 0;
        font-family: Arial, sans-serif;
    }

    h1,
    h2,
    h3,
    p {
        margin: 0;
    }

    button,
    input,
    textarea {
        font: inherit;
    }
`;