import { StylesUtils } from "@utils";

export const styles = StylesUtils.create({
  navbar: {
    py: 3,
    alignItems: "center",
    justifyContent: ["space-between", "center"],
  },
  navbarMobile: {
    flexDirection: "column",
    display: ["flex", "none"],
    backgroundColor: "foreground",
    py: 2,
  },
  navbarMobileText: {
    fontSize: 2,
    mb: 2,
    fontWeight: 600,
  },
  navbarContainer: {
    position: "relative",
    backgroundColor: "foreground",
  },
  navLinkMobile: {
    py: 2,
    fontSize: 1,
    fontWeight: 500,
  },
});
