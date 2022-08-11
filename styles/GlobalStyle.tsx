import reset from "styled-reset";
import { createGlobalStyle, css } from "styled-components";
import paltette from "./palette";

const globalStyle = css`
  ${reset};
  * {
    box-sizing: border-box;
  }
  body {
    font-family: Noto Sans, Noto Sans KR;
    color: ${paltette.black};
  }
  a {
    text-decoration: none;
    color: ${paltette.black};
  }
`;

const GlobalStyle = createGlobalStyle`
  ${globalStyle};
`;

export default GlobalStyle;
