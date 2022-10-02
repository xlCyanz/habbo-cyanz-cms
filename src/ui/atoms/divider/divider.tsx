import React from "react";
import { Divider, DividerProps as DividerPropsUI } from "theme-ui";

import { StylesUtils } from "@utils";

import { styles } from "./divider.styles";

export type DividerProps = DividerPropsUI & {
  vertical?: boolean;
};

const DividerWrapper = ({ sx, vertical, ...props }: DividerProps) => {
  return (
    <Divider
      sx={StylesUtils.compose(sx, vertical ? styles.vertical : {})}
      {...props}
    />
  );
};

export default DividerWrapper;
