import { StylesUtils } from "@utils";

export const styles = StylesUtils.create({
  newsTitleSection: {
    flexDirection: ["column", "row"],
    justifyContent: "space-between",
    alignItems: ["flex-start", "center"],
    mb: [3, null, 4],
  },
  newsTitle: {
    flexDirection: "row",
    alignItems: "center",
    mb: [3, 0],
  },
  newsActions: {
    flexDirection: "row",
  },
  newsSectionGrid: {},
});
