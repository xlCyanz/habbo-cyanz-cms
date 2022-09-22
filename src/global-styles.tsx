import { css, Global } from "@emotion/react";

const GlobalStyles = () => (
  <Global
    styles={css`
      @font-face {
        font-family: "Raleway-Regular";
        src: url("/fonts/Raleway-Regular.ttf");
      }

      @font-face {
        font-family: "Raleway-Bold";
        src: url("/fonts/Raleway-Bold.ttf");
      }

      @font-face {
        font-family: "Raleway-SemiBold";
        src: url("/fonts/Raleway-SemiBold.ttf");
      }

      @font-face {
        font-family: "Raleway-Medium";
        src: url("/fonts/Raleway-Medium.ttf");
      }
    `}
  />
);

export default GlobalStyles;
