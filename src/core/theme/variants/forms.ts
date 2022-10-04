import { ThemeUIStyleObject } from "theme-ui";

const defaultStyle: ThemeUIStyleObject = {
  border: "none",
  borderRadius: 0,
  outline: 0,
  fontFamily: "medium",
};

export default {
  input: defaultStyle,
} as Record<string, ThemeUIStyleObject>;
