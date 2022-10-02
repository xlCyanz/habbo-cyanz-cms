import { StylesUtils } from "@utils";

export const styles = StylesUtils.create({
  navlink: {
    mx: [0, 5],
  },
  navLinkText: {
    fontSize: [2, 2],
    px: [0, 4],
    py: 2,
    borderRadius: 2,
    ":hover": {
      bg: "highlight",
      color: "primary",
    },
  },
  navLinkTextActive: {
    color: "primary",
    fontWeight: 600,
  },
});
