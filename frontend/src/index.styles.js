import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

   html, body, #app, #app>div {
      height: 100%;
   }

   body, #root {
      font-family: Arial, Helvetica, sans-serif;
      width: 100%;
      margin: 0 auto;
      padding: 0;
      box-sizing: border-box;
   }

   button {
      cursor: pointer;
   }
`;
