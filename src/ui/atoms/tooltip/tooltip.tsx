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
      sx={styles.container}
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
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
