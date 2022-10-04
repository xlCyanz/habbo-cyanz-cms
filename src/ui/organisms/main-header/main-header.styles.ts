import { StylesUtils } from "@utils";

const styles = StylesUtils.create({
  headerBoxImage: {
    height: [3, 4],
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    overflow: "hidden",
  },
  blurBackground: {
    backdropFilter: "blur(0.5px)",
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    zIndex: 1,
  },
  subHeader: {
    py: 2,
    bg: "foreground",
    justifyContent: "space-between",
    flexDirection: ["column", "row"],
  },
});

export default styles;
