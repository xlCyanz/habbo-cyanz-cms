import { ThemeUIStyleObject } from "theme-ui";

const defaultStyle: ThemeUIStyleObject = {
  p: 2,
  borderRadius: 3,
};

const shadowStyle: ThemeUIStyleObject = {
  boxShadow: "0 0 8px rgba(0, 0, 0, .3)",
};

export default {
  lastRegister: {
    ...defaultStyle,
    ...shadowStyle,
    borderRadius: 3,
    backgroundColor: "foreground",
    height: 60,
    width: 60,
    backgroundPosition: "50% 20%",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "primary",
    },
  },
  news: {
    ...defaultStyle,
    p: 2,
    bg: "foreground",
    width: "100%",
    borderRadius: 3,
  },
  newsTitle: {
    ...defaultStyle,
    ...shadowStyle,
    bg: "foreground",
    height: 50,
    width: 50,
  },
  newsAction: {
    ...defaultStyle,
    ...shadowStyle,
    borderRadius: 50,
    bg: "foreground",
    height: 40,
    width: 40,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    "&:hover": {
      bg: "primary",
    },
  },
} as Record<string, ThemeUIStyleObject>;
