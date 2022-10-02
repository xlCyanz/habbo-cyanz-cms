import { StylesUtils } from "@utils";

export const styles = StylesUtils.create({
  footerContainer: {
    flexDirection: ["column", null, null, "row"],
    justifyContent: "space-between",
    alignItems: "center",
    bg: "foreground",
  },
  footerCopyright: {
    flexDirection: ["column", "row"],
    alignItems: [null, "center"],
    mb: 2,
  },
  footerSocial: {
    justifyContent: "center",
  },
});
