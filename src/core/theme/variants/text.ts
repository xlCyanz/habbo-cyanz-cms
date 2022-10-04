import { ThemeUIStyleObject } from "theme-ui";

const defaultStyle: ThemeUIStyleObject = {
  color: "text",
  fontSize: 1,
};

export default {
  default: defaultStyle,
  newsCardTitle: {
    ...defaultStyle,
    fontSize: 2,
    fontWeight: 600,
  },
  newsCardSubtitle: {
    ...defaultStyle,
    fontSize: 0,
    fontFamily: "medium",
  },
  footerText: {
    ...defaultStyle,
    fontSize: 1,
    fontFamily: "semiBold",
  },
  navLinkText: {
    ...defaultStyle,
    fontSize: 2,
  },
} as Record<string, ThemeUIStyleObject>;
