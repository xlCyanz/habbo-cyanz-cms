import { css, Global } from "@emotion/react";

const GlobalStyles = () => (
  <Global
    styles={css`
      @font-face {
        font-family: "Montserrat-Regular";
        src: url("/fonts/Montserrat-Regular.ttf");
      }

      @font-face {
        font-family: "Montserrat-Bold";
        src: url("/fonts/Montserrat-Bold.ttf");
      }

      @font-face {
        font-family: "Montserrat-SemiBold";
        src: url("/fonts/Montserrat-SemiBold.ttf");
      }

      @font-face {
        font-family: "Montserrat-Medium";
        src: url("/fonts/Montserrat-Medium.ttf");
      }
    `}
  />
);

export default GlobalStyles;
