import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import theme from "./theme";

const GlobalStyles = createGlobalStyle`
    ${reset}  // reset 적용

    @font-face {
        font-family: "Pretendard Variable";
        src: url("/fonts/PretendardVariable.woff2") format("woff2"),
             url("/fonts/PretendardVariable.woff2") format("woff");
        font-weight: 100 900;
        font-style: normal;
    }

    @font-face {
        font-family: "SUIT Variable";
        src: url("/fonts/SUIT-Variable.woff2") format("woff2"),
             url("/fonts/SUIT-Variable.woff") format("woff");
        font-weight: 100 900;
        font-style: normal;
    }

    html {
        font-size: 62.5%;
        // 1rem = 10px로 지정
    }

    * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    -ms-overflow-style: none; /* for Internet Explorer, Edge */
    scrollbar-width: none; /* for Firefox */

    &::-webkit-scrollbar {
      display: none;
    }
    }

    body {
        font-family:
        'Pretendard Variable',
        Pretendard,
        -apple-system,
        BlinkMacSystemFont,
        system-ui,
        Roboto,
        'Helvetica Neue',
        'Segoe UI',
        'Apple SD Gothic Neo',
        'Noto Sans KR',
        'Malgun Gothic',
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol',
        sans-serif;
        font-style: normal;
        color: ${theme.colors.White};
        background-color: ${theme.colors.Black};
    }

    h1 {
        margin: 0;
    }

    input,
    textarea,
    select {
        all: unset;
        box-sizing: border-box;
    }

    /* Safari - solving issue when using user-select:none on the <body> text input doesn't working */
    input,
    textarea {
        user-select: auto;

        &:focus {
        outline: none;
        }
    }

    button {
        cursor: pointer;
        background: none;
        border: none;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    svg {
        cursor: pointer;
    }

    ul,
    li {
        list-style: none;
    }

 
  @media (max-width: 768px) {
    body {
      font-size: 14px;
      line-height: 1.4;
    }
  }
`;

export default GlobalStyles;
