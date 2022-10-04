import { StylesUtils } from "@utils";

const TOOLTIP_H_MARGIN = "45px";
const TOOLTIP_V_MARGIN = "15px";
const TOOLTIP_ARROW_SIZE = "8px";

export type AlignVariants = "top" | "bottom" | "left" | "right";

export const styles = StylesUtils.create({
  tooltip: {
    px: 3,
    py: 2,
    position: "absolute",
    borderRadius: 2,
    fontFamily: "medium",
    left: "50%",
    transform: "translateX(-50%)",
    backgroundColor: "highlight",
    fontSize: "13px",
    lineHeight: 1,
    zIndex: 100,
    whiteSpace: "nowrap",
    "::before": {
      content: "' '",
      left: "50%",
      border: "solid transparent",
      height: null,
      width: null,
      position: "absolute",
      pointerEvents: "none",
      borderWidth: TOOLTIP_ARROW_SIZE,
      marginLeft: `calc(${TOOLTIP_ARROW_SIZE} * -1)`,
    },
  },
});

export const stylesAlign = StylesUtils.create<AlignVariants>({
  top: {
    top: `calc(${TOOLTIP_H_MARGIN} * -1)`,
    ":before": {
      top: "100%",
      borderTopColor: "highlight",
    },
  },
  right: {
    left: `calc(100% + ${TOOLTIP_V_MARGIN})`,
    top: "50%",
    transform: "translateX(0) translateY(-50%)",
    ":before": {
      left: `calc(${TOOLTIP_ARROW_SIZE} * -1)`,
      borderRightColor: "highlight",
    },
  },
  bottom: {
    bottom: `calc(${TOOLTIP_H_MARGIN} * -1)`,
    ":before": {
      bottom: "100%",
      borderBottomColor: "highlight",
    },
  },
  left: {
    right: `calc(100% + ${TOOLTIP_V_MARGIN})`,
    left: "auto",
    top: "50%",
    transform: "translateX(0) translateY(-50%)",
    ":before": {
      right: `calc(${TOOLTIP_ARROW_SIZE} * -1)`,
      borderLeftColor: "highlight",
    },
  },
});
