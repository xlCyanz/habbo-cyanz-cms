import { ThemeUIStyleObject } from "theme-ui";

export default {
  nav: {
    px: [2, 4],
    py: 2,
    mb: [2, 0],
    borderRadius: 2,
    ":hover": {
      bg: "highlight",
    },
  },
} as Record<string, ThemeUIStyleObject>;
