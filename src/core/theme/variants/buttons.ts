import { ThemeUIStyleObject } from "theme-ui";

const defaultStyle: ThemeUIStyleObject = {
  width: "100%",
  fontFamily: "semiBold",
  borderRadius: 3,
  cursor: "pointer",
};

export default {
  primary: {
    ...defaultStyle,
    backgroundColor: "primary",
    "&:hover": {
      backgroundColor: "primaryLight",
    },
  },
  secondary: {
    ...defaultStyle,
    backgroundColor: "white",
    color: "primary",
    "&:hover": {
      backgroundColor: "primaryLight",
      color: "white",
    },
  },
} as Record<string, ThemeUIStyleObject>;
