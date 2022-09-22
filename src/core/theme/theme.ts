import { Theme } from "theme-ui";

import palette from "./palette";

const makeTheme = <T extends Theme>(t: T) => t;

const theme = makeTheme({
  config: {},
  fonts: {
    bold: "Raleway-Bold",
    medium: "Raleway-Medium",
    semiBold: "Raleway-SemiBold",
    regular: "Raleway-Regular",
  },
  colors: {
    text: palette.white,
    background: palette.outerSpace,
    primary: palette.vividGamboge,
    secondary: palette.independence,
    accent: "",
    highlight: "",
    muted: "",
  },
  fontWeights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
  fontSizes: [
    "0.5em",
    "0.625em",
    "0.875em",
    "1em",
    "1.125em",
    "1.25em",
    "1.5em",
    "2.25em",
    "3em",
    "3.75em",
    "6em",
    "8em",
  ],
  space: ["0em", "0.25em", "0.5em", "1em", "2em", "4em", "8em"],
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  letterSpacings: {
    copy: "0",
    normal: "normal",
    heading: "0.25em",
  },
  borders: [
    "0px solid",
    "1px solid",
    "2px solid",
    "4px solid",
    "8px solid",
    "16px solid",
    "32px solid",
  ],
  radii: [0, 2, 4, 16, "50%", "100%"],
  width: [16, 32, 64, 128, 256],
  heights: [16, 32, 64, 128, 256],
  maxWidths: [16, 32, 64, 128, 256, 512, 768, 1024, 1536],
  styles: {
    root: {
      fontFamily: "regular",
      lineHeight: "body",
      fontWeight: "body",
    },
  },
  buttons: {
    primary: {
      backgroundColor: "orange",
      "&:hover": {
        backgroundColor: "#f90",
      },
    },
    secondary: {
      backgroundColor: "secondary",
      "&:hover": {
        backgroundColor: "",
      },
    },
  },
});

export default theme;
