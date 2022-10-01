import { Theme } from "theme-ui";

import palette from "./palette";

const makeTheme = <T extends Theme>(t: T) => t;

const theme = makeTheme({
  config: {},
  fonts: {
    bold: "Montserrat-Bold",
    medium: "Montserrat-Medium",
    regular: "Montserrat-Regular",
    semiBold: "Montserrat-SemiBold",
  },
  colors: {
    text: palette.white,
    inputText: palette.eerieBlack,
    background: palette.yankeesBlue,
    foreground: palette.darkGunmetal,
    primary: palette.vividGamboge,
    primaryLight: palette.chineseYellow,
    secondary: palette.raisinBlack,
    secondaryLight: palette.onyx,
    accent: "",
    highlight: "",
    muted: "",
  },
  fontWeights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
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
  breakpoints: [48, 62, 75, 87.5, 160].map((value) => `${value}em`),
  radii: [0, 2, 4, 6, 12, 16, 18, "100%"],
  sizes: [16, 32, 64, 128, 256],
  maxWidths: [16, 32, 64, 128, 256, 512, 768, 1024, 1536],
  styles: {
    root: {
      fontFamily: "regular",
      lineHeight: "body",
      fontWeight: "body",
    },
  },
  text: {
    default: {
      color: "text",
      fontSize: 1,
    },
    footerText: {
      fontSize: 1,
      fontFamily: "semiBold",
    },
  },
  images: {
    avatarBorder: {
      borderRadius: 7,
    },
  },
  cards: {
    primary: {
      p: 2,
      borderRadius: 3,
    },
    secondary: {
      borderRadius: 3,
      boxShadow: "0 0 8px rgba(0, 0, 0, .3)",
      backgroundColor: "secondary",
      "&:hover": {
        backgroundColor: "primary",
      },
    },
  },
  buttons: {
    primary: {
      backgroundColor: "primary",
      "&:hover": {
        backgroundColor: "primaryLight",
      },
    },
    secondary: {
      backgroundColor: "secondary",
      "&:hover": {
        backgroundColor: "secondaryLight",
      },
    },
    tertiary: {
      backgroundColor: "white",
      color: "primary",
    },
    menu: {
      height: 30,
      width: 30,
    },
  },
  layout: {
    container: {
      px: [3, 5, 6],
    },
  },
  links: {
    nav: {
      "&:hover": {
        color: "primary",
      },
    },
    navActive: {
      color: "primary",
    },
  },
});

export default theme;
