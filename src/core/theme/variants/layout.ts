import { ThemeUIStyleObject } from "theme-ui";

const defaultStyle: ThemeUIStyleObject = {
  px: [3, 5, 6],
};

export default {
  container: defaultStyle,
  navbar: {
    ...defaultStyle,
    position: "relative",
    // backgroundColor: "foreground",
  },
  footer: {
    ...defaultStyle,
    flexDirection: ["column", null, null, "row"],
    justifyContent: "space-between",
    alignItems: "center",
    bg: "foreground",
  },
} as Record<string, ThemeUIStyleObject>;
