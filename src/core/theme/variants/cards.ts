import { ThemeUIStyleObject } from "theme-ui";

const defaultStyle: ThemeUIStyleObject = {
  p: 2,
  borderRadius: 3,
};

export default {
  lastRegister: {
    ...defaultStyle,
    borderRadius: 3,
    boxShadow: "0 0 8px rgba(0, 0, 0, .3)",
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
} as Record<string, ThemeUIStyleObject>;
