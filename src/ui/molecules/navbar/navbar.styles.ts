import { StylesUtils } from "@utils";

export const styles = StylesUtils.create({
  navbar: {
    py: 2,
    justifyContent: ["space-between"],
  },
  navbarMobile: {
    position: "absolute",
    p: 3,
    flexDirection: "column",
    display: ["flex", "none"],
    borderRadius: 3,
    backgroundColor: "highlight",
    zIndex: 4,
    mt: 1,
    right: 2,
    left: 2,
  },
  navbarMobileText: {
    fontSize: 2,
    mb: 2,
    fontWeight: 600,
  },
  navLinkMobile: {
    py: 2,
    fontSize: 1,
    fontWeight: 500,
  },
});
