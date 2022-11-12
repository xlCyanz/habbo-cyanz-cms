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
    display: "block",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
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
  newsTitle: {
    fontSize: 2,
    fontFamily: "semiBold",
  },
} as Record<string, ThemeUIStyleObject>;
