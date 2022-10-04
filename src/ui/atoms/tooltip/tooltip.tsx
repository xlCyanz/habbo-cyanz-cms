import React from "react";

import { StylesUtils } from "@utils";

import Box from "../box";
import { AlignVariants, styles, stylesAlign } from "./tooltip.styles";

export type TooltipProps = {
  children: React.ReactNode;
  content: React.ReactNode;
  direction?: AlignVariants;
  delay?: number;
};

const TooltipWrapper = ({
  children,
  content,
  direction = "top",
  delay = 300,
  ...props
}: TooltipProps) => {
  const [active, setActive] = React.useState(false);
  let timeout: ReturnType<typeof setTimeout>;

  const showTooltip = () => {
    timeout = setTimeout(() => setActive(true), delay);
  };

  const hideTooltip = () => {
    clearInterval(timeout);
    setActive(false);
  };

  return (
    <Box
      sx={{ display: "inline-block", position: "relative" }}
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
      {...props}
    >
      {children}
      {active && (
        <Box sx={StylesUtils.compose(styles.tooltip, stylesAlign[direction])}>
          {content}
        </Box>
      )}
    </Box>
  );
};

export default TooltipWrapper;
