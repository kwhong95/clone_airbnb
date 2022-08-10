import reset from "styled-reset";
import { createGlobalStyle, css } from "styled-components";
import paltette from "./paltette";

const globalStyle = css`
  ${reset};
  * {
    box-sizing: border-box;
  }
  body {
    color: ${paltette.black};
  }
`;

const GlobalStyle = createGlobalStyle`
  ${globalStyle};
`;

export default GlobalStyle;
