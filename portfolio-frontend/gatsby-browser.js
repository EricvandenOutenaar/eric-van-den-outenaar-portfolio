import "./src/css/main.css"

import React from "react"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import Theme from "./src/themes/theme"

/*
    In this file I will create the global styles and make the styling theme
    available in all underlying components.
*/

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    body {
        font-family: ${({ theme }) => theme.fonts.secondary};
        background: ${({ theme }) => theme.colors.white};
        color: ${({ theme }) => theme.colors.grey3};
        line-height: 1.5;
        font-size: 0.875rem;
        margin-top: 0rem;
      }
      p {
        margin-bottom: 1.25rem;
        color: ${({ theme }) => theme.colors.grey3};
      },
      ul {
        list-style-type: none;
      }
      a {
        text-decoration: none;
      }
      
      h1,
      h2,
      h3,
      h4 {
        letter-spacing: ${({ theme }) => theme.spacings.spacing};
        text-transform: capitalize;
        line-height: 1.25;
        margin-bottom: 0.75rem;
        font-family: ${({ theme }) => theme.fonts.primary};
      }
      h1 {
        font-size: 3rem;
      }
      h2 {
        font-size: 2rem;
      }
      h3 {
        font-size: 1.25rem;
      }
      h4 {
        font-size: 0.875rem;
      }
      @media screen and (min-width: 800px) {
        h1 {
          font-size: 4rem;
        }
        h2 {
          font-size: 2.5rem;
        }
        h3 {
          font-size: 1.75rem;
        }
        h4 {
          font-size: 1rem;
        }
        body {
          font-size: 1rem;
        }
        h1,
        h2,
        h3,
        h4 {
          line-height: 1;
        }
      }
      section {
        padding: 5rem 0;
      }
    
    `

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={Theme}>
    <GlobalStyles />
    {element}
  </ThemeProvider>
)
