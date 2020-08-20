// eslint-disable-next-line
import React from "react";
import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}
body {
  background: #fafafa;
  font: 14px Arial, helvetica, sans-serif;
  -webkit-font-smoothing: antialiased !important;
}

`;
 
export default GlobalStyle;