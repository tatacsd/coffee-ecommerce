import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    :focus {
        outline: 0;
        box-shadow: 0 0 0 2px ${(props) => props.theme.product.yellow};
    }

    body {
        color: ${(props) => props.theme.base['base-title']};
        background: ${(props) => props.theme.background};
        -webkit-font-smoothing: antialiased; /* to make the font smoother */
    }

    body, input, textarea, button {
        font-family: 'Roboto', sans-serif;
        font-size: 1rem;
        font-weight: 400;
    }

    header {
        font-family: 'Baloo 2', cursive;
        font-size: 1.125rem;
        font-weight: 700;
    }
`;
