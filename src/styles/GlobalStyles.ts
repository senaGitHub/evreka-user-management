import { createGlobalStyle } from "styled-components";

// This file defines the global CSS rules that apply across the entire app.
// It uses the current theme (colors, fonts) through styled-components' ThemeProvider.

export const GlobalStyles = createGlobalStyle`
    *,*::before,*::after {
        box-sizing: border-box; {/*Ensure consistent layout sizing for all elements*/}
    }

    html,body {
        margin: 0;
        padding: 0;
        height: 100%;
        background-color: ${({ theme }) => theme.colors.background}; {/* Use background color from theme */}
        color: ${({ theme }) => theme.colors.text}; {/* Use text color from theme */}
        font-family: 'Segoe UI', 'Helvetica Neue', sans-serif;
    }

    a {
        text-decoration: none; {/*Remove underlines from links */}
        color: inherit; {/*Inherit text color for consistency */}
    }
    
    button {
        cursor: pointer;
        font-family: inherit;
    }

    input, select, textarea {
        font-family: inherit;
        font-size: 1rem;
    }
`;
